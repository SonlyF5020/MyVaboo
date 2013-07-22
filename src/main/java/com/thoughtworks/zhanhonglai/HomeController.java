package com.thoughtworks.zhanhonglai;

import com.thoughtworks.zhanhonglai.service.ServerStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.Map;

@Controller
public class HomeController {

    ServerStore serverStore = new ServerStore();

    @RequestMapping("/home")
    public String accessHome(Model model) {
        model.addAttribute("name", serverStore.getCurrentUser());
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
}
