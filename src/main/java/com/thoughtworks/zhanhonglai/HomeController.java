package com.thoughtworks.zhanhonglai;

import com.thoughtworks.zhanhonglai.data.UserContent;
import com.thoughtworks.zhanhonglai.email.HostMail;
import com.thoughtworks.zhanhonglai.service.ContentStore;
import com.thoughtworks.zhanhonglai.service.ServerStore;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

@SessionAttributes("sessionUserName")
@Controller
public class HomeController {
    private final Logger logger = Logger.getLogger(this.getClass());

    ServerStore serverStore = new ServerStore();
    ContentStore contentStore = new ContentStore();

    @RequestMapping("/home")
    public String accessHome() {
        return "home";
    }

    @RequestMapping("/checkUser")
    public String checkUser(@RequestParam("name") String name, @RequestParam("password") String password, HttpServletRequest request) {
        HttpSession session = request.getSession();
        if (passwordIsCorrect(name, password)) {
            session.setAttribute("sessionUserName", name);
            return "checkUser/validUser";
        } else return "checkUser/invalidUser";
    }

    private boolean passwordIsCorrect(String name, String password) {
        return serverStore.isPasswordCorrect(name, password);
    }

    @RequestMapping("/login")
    public String login(HttpServletRequest request) {
        if (!request.getSession().isNew()){
            String userName = (String) request.getSession().getAttribute("sessionUserName");
            if (serverStore.isUserNameExisted(userName)){
                return "checkUser/validUser";
            }
        }
        return "checkUser/loginAccount";
    }

    @RequestMapping("/logout")
    public String logout(HttpServletRequest request){
        request.getSession().invalidate();
        return "checkUser/loginAccount";
    }

    @RequestMapping("/")
    public String loginAccount(HttpServletRequest request){
        request.getSession().invalidate();
        return "firstSight";
    }

    @RequestMapping("/forgetPassword")
    public String forgetPassword(){
        return "checkUser/forgetPassword";
    }

    @RequestMapping("/clientCreate")
    public String clientCreate(@RequestParam("name") String name,
                               @RequestParam("password") String password,
                               @RequestParam("faceUrl") String faceUrl,
                               @RequestParam("emailAddress") String emailAddress,
                               HttpServletRequest request) {
        if (serverStore.isUserNameExisted(name)) {
            return "newClient/invalidUserName";
        } else {
            faceUrl = faceUrl == "" ? "/resources/img/zergIcon.png" : faceUrl;
            serverStore.createNewUser(name, password, faceUrl,emailAddress);
            HttpSession session = request.getSession();
            session.setAttribute("sessionUserName", name);
            return "newClient/successCreate";
        }
    }

    @RequestMapping("/submitContent")
    private String submitContent(@RequestParam("newContent") String newContent, HttpServletRequest request) throws InterruptedException, UnsupportedEncodingException {
        HttpSession session = request.getSession();
        if (!session.isNew()) {
            String userName = (String) session.getAttribute("sessionUserName");
            contentStore.addContent(new UserContent(userName, newContent, getCurrentDate()));
        }
        return "home";
    }

    private String getCurrentDate() {
        Date currentDate = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss E ", Locale.CHINESE);
        return formatter.format(currentDate);
    }

    @RequestMapping("/json/getAllHistory")
    public String getUserHistory(Model model) {
        model.addAllAttributes(contentStore.getAllContents());
        return "jsonView";
    }

    @RequestMapping("/json/currentUserInfo")
    public String getCurrentUserName(Model model, HttpServletRequest request) {
        try{
        long start = System.currentTimeMillis();

        String userName = (String) request.getSession().getAttribute("sessionUserName");

        logger.warn(userName);

        model.addAttribute("userName", userName);
        String userUrl = serverStore.getUserFaceUrl(userName);

        logger.warn(userUrl);

        model.addAttribute("userFaceUrl", userUrl);

        logger.warn("spend time: "+(System.currentTimeMillis() - start));
        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.getMessage(),e);
            model.addAttribute(e);
        }
        return "jsonView";
    }

    @RequestMapping("/delete")
    public String deleteContent(@RequestParam("deleteIndex") String deleteIndex) {
        contentStore.deleteContent(deleteIndex);
        return "home";
    }

    @RequestMapping("/addReply")
    public String addReply(@RequestParam("reply") String reply, @RequestParam("id") String id, HttpServletRequest request, Model model) {
        String responseUser = (String) request.getSession().getAttribute("sessionUserName");
        UserContent responseUserContent = new UserContent(responseUser, reply, getCurrentDate());
        contentStore.getAllContents().get("" + id).addResponse(responseUserContent);
        model.addAttribute("response", responseUserContent);
        return "jsonView";
    }

    @RequestMapping("/json/getMyHistory")
    public String getMyHistory(Model model, HttpServletRequest request) {
        String currentUser = (String) request.getSession().getAttribute("sessionUserName");
        model.addAllAttributes(contentStore.getUserContent(currentUser));
        return "jsonView";
    }

    @RequestMapping("/getBackPassword")
    public String getBackPassword(@RequestParam("userName") String userName,
                                  @RequestParam("emailAddress") String emailAddress ) throws MessagingException {
        if (serverStore.isEmailCorrect(userName,emailAddress)){
            String password = serverStore.getUserPassword(userName);
            HostMail.sendMail(emailAddress,password);
            return "checkUser/mailSend";
        }
        return "checkUser/invalidUser";
    }

    @RequestMapping("/json/changeFace")
    public String changeFace(@RequestParam("src") String src,Model model,HttpServletRequest request){
        String currentUser = (String) request.getSession().getAttribute("sessionUserName");
        serverStore.updateUserFace(currentUser,src);
        model.addAttribute("src",serverStore.getUserFaceUrl(currentUser));
        return "jsonView";
    }
    @RequestMapping("/changePassword")
    public String changePassword(){
        return "register";
    }
}
