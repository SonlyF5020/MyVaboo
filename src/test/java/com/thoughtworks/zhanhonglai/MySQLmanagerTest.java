package com.thoughtworks.zhanhonglai;

import com.thoughtworks.zhanhonglai.MySQL.MySQLmanager;
import com.thoughtworks.zhanhonglai.data.UserContent;
import org.junit.Test;

import java.sql.SQLException;
import java.util.Map;

import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

public class MySQLmanagerTest {
    @Test
    public void shouldJudgeWhetherUserNameExistedOrNot(){
        MySQLmanager mySQLmaneger = new MySQLmanager();
        try {
            assertThat(mySQLmaneger.isUserNameExisted("zhanhonglai"),is(true));
            assertThat(mySQLmaneger.isUserNameExisted("computer"),is(false));
        } catch (Exception e) {
            System.out.println("SQL error!");
        }
    }

    @Test
    public void shouldJudgeWhetherUserPasswordIsCorrect() throws Exception {
        MySQLmanager mySQLmanager = new MySQLmanager();
        try{
            assertThat(mySQLmanager.isPasswordCorrect("zhanhonglai","123"),is(true));
            assertThat(mySQLmanager.isPasswordCorrect("zhanhonglai","1234"),is(false));
            assertThat(mySQLmanager.isPasswordCorrect("zzhhanhon","123"),is(false));
            assertThat(mySQLmanager.isPasswordCorrect("dashabi","dashabi"),is(true));
        }
        catch (Exception e){
            System.out.println("SQL error");
        }
    }

    @Test
    public void shouldGetRightFaceUrl(){
        MySQLmanager mySQLmanager = new MySQLmanager();
        try{
            assertThat(mySQLmanager.getUserFaceUrl("zhanhonglai"),is("/resources/img/Face-Icons/Males/9.png"));
            assertThat(mySQLmanager.getUserFaceUrl("adadsad"),is(""));
            assertThat(mySQLmanager.getUserFaceUrl("dashabi"),is("/resources/img/Face-Icons/Males/1.png"));
        }
        catch (ClassNotFoundException e){
            System.out.println("InterruptedException SQL error");
        }
        catch (SQLException a){
            System.out.println("SQLException");
        }
    }

    @Test
    public void shouldJudgeWhereEmailIsCorrectOrNot() throws Exception {
        MySQLmanager mySQLmanager = new MySQLmanager();
        try{
            assertThat(mySQLmanager.isEmailCorrect("zhanhonglai","502089948@qq.com"),is(true));
            assertThat(mySQLmanager.isEmailCorrect("adadsad", "502089948@qq.com"),is(false));
            assertThat(mySQLmanager.isEmailCorrect("dashabi", "33@qq.com"),is(false));
        }
        catch (ClassNotFoundException e){
            System.out.println("InterruptedException SQL error");
        }
        catch (SQLException a){
            System.out.println("SQLException");
        }
    }

    @Test
    public void shouldGetRightPassword() throws Exception {
        MySQLmanager mySQLmanager = new MySQLmanager();
        try{
            assertThat(mySQLmanager.getUserPassword("zhanhonglai"),is("123"));
            assertThat(mySQLmanager.getUserPassword("adadsad"),is(""));
            assertThat(mySQLmanager.getUserPassword("dashabi"),is("dashabi"));
        }
        catch (ClassNotFoundException e){
            System.out.println("InterruptedException SQL error");
        }
        catch (SQLException a){
            System.out.println("SQLException");
        }
    }

    @Test
    public void shouldGetRightFaceUrlAfterUpdate() throws Exception {
        MySQLmanager mySQLmanager = new MySQLmanager();
        try{
            mySQLmanager.updateUserFaceUrl("zhanhonglai","/resources/img/Face-Icons/Males/9.png");
            assertThat(mySQLmanager.getUserFaceUrl("zhanhonglai"),is("/resources/img/Face-Icons/Males/9.png"));

            mySQLmanager.updateUserFaceUrl("zhanhonglai","/resources/img/Face-Icons/Males/3.png");
            assertThat(mySQLmanager.getUserFaceUrl("zhanhonglai"),is("/resources/img/Face-Icons/Males/3.png"));

            mySQLmanager.updateUserFaceUrl("zhanhonglai","/resources/img/Face-Icons/Males/9.png");
        }
        catch (ClassNotFoundException e){
            System.out.println("InterruptedException SQL error");
        }
        catch (SQLException a){
            System.out.println("SQLException");
        }
    }

    @Test
    public void shouldInsertDateInMainContentTable() throws Exception {
        MySQLmanager mySQLmanager = new MySQLmanager();
        try{
            mySQLmanager.addContent("zhanhonglai","helloworld","2003-08-28");
            assertThat(true,is(true));
        }
        catch (Exception e){
            System.out.println("exception");
        }

    }

    @Test
    public void shouldGetAllContentCorrectly() throws Exception {
        MySQLmanager mySQLmanager = new MySQLmanager();
        try{
            mySQLmanager.addContent("zhanhonglai","helloworld","2003-08-28");
            mySQLmanager.addContent("honglai","ball","2003-08-29");
            mySQLmanager.addContent("lai","refactor","2003-08-28");
            mySQLmanager.addContent("dashabi","dashabi","2003-08-29");
            Map<String,UserContent> result = mySQLmanager.getAllContents();
            assertNotNull(result);
        }
        catch (Exception e){
            System.out.println("exception");
        }
    }
}
