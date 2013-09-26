package com.thoughtworks.zhanhonglai;

import com.thoughtworks.zhanhonglai.MySQL.MySQLmanager;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.sql.SQLException;

@Controller
public class FirstSightController {
    private MySQLmanager testManager;
    @RequestMapping("/firstSight")
    public String accessFirstSight(){
         return "firstSight";
    }

    @RequestMapping("/testSQL")
    public String accessTest(Model model){
        try {
            testManager.testSQL();
        } catch (Exception e) {
             model.addAttribute(e);
        }
        return "jsonView";
    }
}
