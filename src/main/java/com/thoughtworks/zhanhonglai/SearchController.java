package com.thoughtworks.zhanhonglai;

import com.thoughtworks.zhanhonglai.MySQL.MySQLmanager;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.sql.SQLException;
import java.util.Map;

@Controller
public class SearchController{

    public MySQLmanager getMySQLmanager() {
        return mySQLmanager;
    }

    public void setMySQLmanager(MySQLmanager mySQLmanager) {
        this.mySQLmanager = mySQLmanager;
    }

    MySQLmanager mySQLmanager;
    protected final Logger logger = Logger.getLogger(this.getClass());

    @RequestMapping("/json/search")
    public String searchContent(@RequestParam("content") String content, HttpServletRequest request, Model model) {
        Map searchResult = null;
        try {
            searchResult = mySQLmanager.search(content);
        } catch (SQLException e) {
            e.printStackTrace();
            logger.error(e.getMessage(), e);
        }
        catch (ClassNotFoundException e) {
            e.printStackTrace();
            logger.error(e.getMessage(), e);
        }
        model.addAllAttributes(searchResult);
        return "jsonView";
    }
}
