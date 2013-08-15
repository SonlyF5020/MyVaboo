package com.thoughtworks.zhanhonglai;

import com.thoughtworks.zhanhonglai.data.UserContent;
import com.thoughtworks.zhanhonglai.service.ContentStore;
import com.thoughtworks.zhanhonglai.service.ServerStore;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

@SessionAttributes("sessionUserName")
@Controller
public class HomeController {

    ServerStore serverStore = new ServerStore();
    ContentStore contentStore = new ContentStore();

    @RequestMapping("/home")
    public String accessHome() {
        return "home";
    }

    @RequestMapping("/checkUser")
    public String checkUser(@RequestParam("name") String name, @RequestParam("password") String password, HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        if (passwordIsCorrect(name, password)) {
            session.setAttribute("sessionUserName", name);
            return "checkUser/validUser";
        } else return "checkUser/invalidUser";
    }

    private boolean passwordIsCorrect(String name, String password) {
        return serverStore.userPasswordIsCorrect(name, password);
    }

    @RequestMapping("/login")
    public String login() {
        return "checkUser/loginAccount";
    }

    @RequestMapping("/")
    public String loginAccount() {
        return "firstSight";
    }

    @RequestMapping("/clientCreate")
    public String clientCreate(@RequestParam("name") String name, @RequestParam("password") String password, HttpServletRequest request) {
        if (serverStore.alreadyExistUser(name)) {
            return "newClient/invalidUserName";
        } else {
            serverStore.createUser(name, password);
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

    @RequestMapping("/json/userHistory")
    public String getUserHistory(Model model) {
        model.addAllAttributes(contentStore.getAllContents());
        return "jsonView";
    }

    @RequestMapping("/json/currentUserName")
    public String getCurrentUserName(Model model, HttpServletRequest request) {
        HttpSession session = request.getSession();
        String userName = (String) session.getAttribute("sessionUserName");
        model.addAttribute("userName", userName);
        return "jsonView";
    }

    @RequestMapping("/delete")
    public String deleteContent(@RequestParam("deleteIndex") String deleteIndex) {
        contentStore.deleteContent(deleteIndex);
        return "home";
    }

    @RequestMapping("/addReply")
    public String addReply(@RequestParam("reply") String reply,@RequestParam("id") String id,HttpServletRequest request,Model model) {
        String responseUser = (String) request.getSession().getAttribute("sessionUserName");
        UserContent responseUserContent = new UserContent(responseUser, reply, getCurrentDate());
        contentStore.getAllContents().get("" + id).addResponse(responseUserContent);
        model.addAttribute("response",responseUserContent);
        return "jsonView";
    }
}
