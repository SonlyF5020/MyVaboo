package com.thoughtworks.zhanhonglai;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.Map;

@Controller
public class HomeController {
    Map<String,String> userMap = new HashMap<String,String>();
    String currentUser;

    @RequestMapping("/home")
    public String accessHome(Model model){
        model.addAttribute("name",currentUser);
        return "home";
    }

    @RequestMapping("/checkPassword")
    public String checkPassword(@RequestParam("name")String name,@RequestParam("password")String password, Model model){
        String result = "";
        if (password.equalsIgnoreCase("123456")){
            result = "checkPassword/validUser";
        }
        else{
            result = "checkPassword/invalidUser";
        }
        currentUser=name;
        return result;
    }


    @RequestMapping("/")
    public String checkAccount(Model model){
        return "checkPassword/checkAccount";
    }

    @RequestMapping("/register")
    public String newClient(Model model){
        return "newClient/newClient";
    }

    @RequestMapping("/clientCreate")
    public String clientCreate(@RequestParam("name")String name,
                               @RequestParam("password") String password,
                               @RequestParam("passwordConfirm")String passwordConfirm,
                               Model model){
        if(password.equals(passwordConfirm)){
            currentUser = name;
            return "newClient/successCreate";
        }
        return "newClient/passwordError";
    }
}
