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

    @RequestMapping("/home")

    public String accessHoem(@RequestParam("password") String password){
        String result = "";
        if (password.equalsIgnoreCase("123456")){
            result = "home";
        }
        else{
            result = "invalidUser";
        }
        return result;
    }

    @RequestMapping("/")
    public String checkAccount(Model model){
        return "checkAccount";
    }
}
