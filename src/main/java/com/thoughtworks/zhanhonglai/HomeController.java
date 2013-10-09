package com.thoughtworks.zhanhonglai;

import com.thoughtworks.zhanhonglai.MySQL.MySQLmanager;
import com.thoughtworks.zhanhonglai.data.UserContent;
import com.thoughtworks.zhanhonglai.email.HostMail;
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
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

@SessionAttributes("sessionUserName")
@Controller
public class HomeController {
    protected final Logger logger = Logger.getLogger(this.getClass());

    public void setMySQLmanager(MySQLmanager mySQLmanager) {
        this.mySQLmanager = mySQLmanager;
    }

    protected MySQLmanager mySQLmanager;

    @RequestMapping("/home")
    public String accessHome() {
        logger.info("user access home");
        return "home";
    }

    @RequestMapping("/checkUser")
    public String checkUser(@RequestParam("name") String name, @RequestParam("password") String password, HttpServletRequest request) {
        HttpSession session = request.getSession();
        try {
            if (passwordIsCorrect(name, password)) {
                session.setAttribute("sessionUserName", name);
                return "checkUser/validUser";
            } else return "checkUser/invalidUser";
        } catch (Exception e) {
            return "checkUser/invalidUser";
        }
    }

    private boolean passwordIsCorrect(String name, String password) throws SQLException, ClassNotFoundException {
        mySQLmanager.isPasswordCorrect(name, password);
        return mySQLmanager.isPasswordCorrect(name, password);
    }

    @RequestMapping("/login")
    public String login(HttpServletRequest request) {
        try {
            if (!request.getSession().isNew()) {
                String userName = (String) request.getSession().getAttribute("sessionUserName");
                Boolean usernameExisted = mySQLmanager.isUserNameExisted(userName);
                if (usernameExisted) {
                    return "checkUser/validUser";
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.getMessage(), e);
            return "checkUser/loginAccount";
        }
        return "checkUser/loginAccount";
    }

    @RequestMapping("/logout")
    public String logout(HttpServletRequest request) {
        request.getSession().invalidate();
        return "checkUser/loginAccount";
    }

    @RequestMapping("/")
    public String loginAccount(HttpServletRequest request) {
        request.getSession().invalidate();
        logger.info("user start visit firstSight page now");
        return "firstSight";
    }

    @RequestMapping("/forgetPassword")
    public String forgetPassword() {
        return "checkUser/forgetPassword";
    }

    @RequestMapping("/clientCreate")
    public String clientCreate(@RequestParam("name") String name,
                               @RequestParam("password") String password,
                               @RequestParam("faceUrl") String faceUrl,
                               @RequestParam("emailAddress") String emailAddress,
                               HttpServletRequest request) throws SQLException, ClassNotFoundException {

        if (mySQLmanager.isUserNameExisted(name)) {
            return "newClient/invalidUserName";
        } else {
            faceUrl = faceUrl == "" ? "/resources/img/zergIcon.png" : faceUrl;
            mySQLmanager.createUser(name, password, faceUrl, emailAddress);
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
            try {
                mySQLmanager.addContent(userName, newContent, getCurrentDate());
            } catch (Exception e) {
                e.printStackTrace();
                logger.error(e.getMessage(), e);
            }
        }
        return "home";
    }

    private String getCurrentDate() {
        Date currentDate = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss ( E ) ");
        return formatter.format(currentDate);
    }

    @RequestMapping("/json/getAllHistory")
    public String getUserHistory(Model model) {
        try {
            model.addAllAttributes(mySQLmanager.getAllContents());
        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.getMessage(), e);
        }
        return "jsonView";
    }

    @RequestMapping("/json/currentUserInfo")
    public String getCurrentUserName(Model model, HttpServletRequest request) {
        try {
            long start = System.currentTimeMillis();

            String userName = (String) request.getSession().getAttribute("sessionUserName");

            logger.warn(userName);

            model.addAttribute("userName", userName);

            mySQLmanager.getUserFaceUrl(userName);
            String userUrl = mySQLmanager.getUserFaceUrl(userName);

            logger.warn(userUrl);

            model.addAttribute("userFaceUrl", userUrl);

            logger.warn("spend time: " + (System.currentTimeMillis() - start));
        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.getMessage(), e);
            model.addAttribute(e);
        }
        return "jsonView";
    }

    @RequestMapping("/delete")
    public String deleteContent(@RequestParam("deleteIndex") String deleteIndex) {
        try {
            mySQLmanager.deleteContent(deleteIndex);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.getMessage(), e);
        }
        return "home";
    }

    @RequestMapping("/addReply")
    public String addReply(@RequestParam("reply") String reply, @RequestParam("id") String id, HttpServletRequest request, Model model) {
        try {
            String responseUser = (String) request.getSession().getAttribute("sessionUserName");
            UserContent responseUserContent = new UserContent(responseUser, reply, getCurrentDate());
            mySQLmanager.addResponseForContent("" + id, responseUser, reply, getCurrentDate());
            model.addAttribute("response", responseUserContent);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.getMessage(), e);
        }
        return "jsonView";
    }

    @RequestMapping("/json/getMyHistory")
    public String getMyHistory(Model model, HttpServletRequest request) {
        try {
            String currentUser = (String) request.getSession().getAttribute("sessionUserName");
            Map<String, UserContent> userContents = null;
            userContents = mySQLmanager.getUserContent(currentUser);
            model.addAllAttributes(userContents);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.getMessage(), e);
        }
        return "jsonView";
    }

    @RequestMapping("/getBackPassword")
    public String getBackPassword(@RequestParam("userName") String userName,
                                  @RequestParam("emailAddress") String emailAddress) throws MessagingException {
        try {
            if (mySQLmanager.isEmailCorrect(userName, emailAddress)) {
                String password = mySQLmanager.getUserPassword(userName);
                HostMail.sendMail(emailAddress, password);
                return "checkUser/mailSend";
            }
        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.getMessage(), e);
        }
        return "checkUser/invalidUser";
    }

    @RequestMapping("/json/changeFace")
    public String changeFace(@RequestParam("src") String src, Model model, HttpServletRequest request) {
        try {
            String currentUser = (String) request.getSession().getAttribute("sessionUserName");
            mySQLmanager.updateUserFaceUrl(currentUser, src);
            model.addAttribute("src", mySQLmanager.getUserFaceUrl(currentUser));
        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.getMessage(), e);
        }
        return "jsonView";
    }

    @RequestMapping("/changePassword")
    public String changePassword() {
        return "register";
    }

}
