package com.thoughtworks.zhanhonglai;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FirstSightController {
    @RequestMapping("/firstSight")
    public String accessFirstSight(){
         return "firstSight";
    }
}
