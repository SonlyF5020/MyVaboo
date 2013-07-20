package com.thoughtworks.zhanhonglai;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RegisterController {
    @RequestMapping("/register")
    public String newClient(Model model) {
        return "newClient/newClient";
    }
}
