package com.thoughtworks.zhanhonglai;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@Controller
public class SearchController extends HomeController{
    @RequestMapping("/search")
    public String searchContent(@RequestParam("content") String content, HttpServletRequest request, Model model){
        Map searchResult =  mySQLmanager.search(content);
        model.addAllAttributes(searchResult);
        return "search";
    }
}
