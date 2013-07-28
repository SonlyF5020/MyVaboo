package com.thoughtworks.zhanhonglai;

import com.thoughtworks.zhanhonglai.data.UserContent;
import com.thoughtworks.zhanhonglai.service.ContentStore;
import com.thoughtworks.zhanhonglai.service.ServerStore;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.UnsupportedEncodingException;
import java.util.Collection;


@Controller
public class HomeController {

    ServerStore serverStore = new ServerStore();
    ContentStore contentStore = new ContentStore();

    @RequestMapping("/home")
    public String accessHome() {
        return "home";
    }

    @RequestMapping("/checkUser")
    public String checkUser(@RequestParam("name") String name, @RequestParam("password") String password) {
        if (passwordIsCorrect(name, password)) {
            serverStore.setCurrentUser(name);
            return "checkUser/validUser";
        } else {
            return "checkUser/invalidUser";
        }
    }

    private boolean passwordIsCorrect(String name, String password) {
        return serverStore.userPasswordIsCorrect(name, password);
    }


    @RequestMapping("/")
    public String loginAccount() {
        return "checkUser/loginAccount";
    }

    @RequestMapping("/clientCreate")
    public String clientCreate(@RequestParam("name") String name, @RequestParam("password") String password) {
        if (serverStore.alreadyExistUser(name)) {
            return "newClient/invalidUserName";
        } else {
            serverStore.createUser(name, password);
            return "newClient/successCreate";
        }
    }

    @RequestMapping("/submitContent")
    private String submitContent(@RequestParam("newContent") String newContent, @RequestParam("newContentDate") String newContentDate) throws InterruptedException, UnsupportedEncodingException {
        contentStore.addContent(new UserContent(serverStore.getCurrentUser(), newContent, newContentDate));
        return "home";
    }

    @RequestMapping("/json/userHistory")
    public String getUserHistory(Model model){
        model.addAllAttributes(contentStore.getAllContents());
        return "jsonView";
    }
    @RequestMapping("/json/currentUserName")
    public String getCurrentUserName(Model model){
        model.addAttribute("userName",serverStore.getCurrentUser());
        return "jsonView";
    }

    @RequestMapping("/delete")
    public String deleteContent(@RequestParam("deleteIndex") String deleteIndex){
        contentStore.deleteContent(deleteIndex);
        return "home";
    }
}
