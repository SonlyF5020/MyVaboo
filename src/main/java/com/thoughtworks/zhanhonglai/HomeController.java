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

        if (!session.isNew()&&session.getAttribute("sessionUserName").equals(name)){
            return "checkUser/validUser";
        }

        if (passwordIsCorrect(name, password)){
            session.setAttribute("sessionUserName",name);
            return "checkUser/validUser";
        }
        else return "checkUser/invalidUser";
    }

    private boolean passwordIsCorrect(String name, String password) {
        return serverStore.userPasswordIsCorrect(name, password);
    }


    @RequestMapping("/")
    public String loginAccount() {
        return "checkUser/loginAccount";
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
    private String submitContent(@RequestParam("newContent") String newContent, @RequestParam("newContentDate") String newContentDate, HttpServletRequest request) throws InterruptedException, UnsupportedEncodingException {
        HttpSession session = request.getSession();
        if (!session.isNew()) {
            String userName = (String) session.getAttribute("sessionUserName");
            contentStore.addContent(new UserContent(userName, newContent, newContentDate));
        }
        return "home";
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
}
