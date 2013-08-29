package com.thoughtworks.zhanhonglai.MySQL;

import com.thoughtworks.zhanhonglai.data.UserContent;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MySQLmanager {
    private Connection connection = null;
    private java.sql.Statement statement = null;
    private ResultSet resultSet = null;

    public void createUser(String userName, String password, String faceUrl, String email) throws ClassNotFoundException, SQLException {
        connectDatabase();
        String values = buildCreateValues(userName, password, faceUrl, email);
        String initSQL = "INSERT INTO CoreBase.UserInfo(username,password,faceurl,email) " +
                "values(" + values + ")";
        statement.execute(initSQL);
        connection.close();
    }

    public boolean isUserNameExisted(String userName) throws SQLException, ClassNotFoundException {
        connectDatabase();
        String querySQL = "SELECT username FROM CoreBase.UserInfo WHERE username="+format(userName);
        resultSet = statement.executeQuery(querySQL);
        while (resultSet.next()){
            if (resultSet.getString(1)!=null){
                connection.close();
                return true;
            }
        }
        connection.close();
        return false;
    }

    private void connectDatabase() throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.jdbc.Driver");
        connection = DriverManager.getConnection("jdbc:mysql://localhost/CoreBase", "root", "");
        statement = connection.createStatement();
    }

    private String buildCreateValues(String userName, String password, String faceUrl, String email) {
        return format(userName) + "," + format(password) + "," + format(faceUrl) + "," + format(email);
    }

    private String format(String input) {
        return "'" + input + "'";
    }

    public boolean isPasswordCorrect(String userName, String password) throws SQLException, ClassNotFoundException {
        connectDatabase();
        String querySQL = "SELECT username FROM CoreBase.UserInfo WHERE username="+format(userName)+" AND password="+format(password);
        resultSet = statement.executeQuery(querySQL);
        while (resultSet.next()){
            if (resultSet.getString(1)!=null){
                connection.close();
                return true;
            }
        }
        connection.close();
        return false;
    }

    public String getUserFaceUrl(String userName) throws SQLException, ClassNotFoundException {
        connectDatabase();
        String querySQL = "SELECT faceurl FROM CoreBase.UserInfo WHERE username="+format(userName);
        resultSet = statement.executeQuery(querySQL);
        String userFaceUrl = "";
        while (resultSet.next()){
            if (resultSet.getString(1)!=null){
                userFaceUrl = resultSet.getString(1);
            }
        }
        connection.close();
        return userFaceUrl;
    }

    public boolean isEmailCorrect(String userName, String email) throws SQLException, ClassNotFoundException {
        connectDatabase();
        String querySQL = "SELECT email FROM CoreBase.UserInfo WHERE username="+format(userName)+" AND email="+format(email);
        resultSet = statement.executeQuery(querySQL);
        while (resultSet.next()){
            if (resultSet.getString(1)!=null){
                connection.close();
                return true;
            }
        }
        connection.close();
        return false;
    }

    public String getUserPassword(String userName) throws SQLException, ClassNotFoundException {
        connectDatabase();
        String querySQL = "SELECT password FROM CoreBase.UserInfo WHERE username="+format(userName);
        resultSet = statement.executeQuery(querySQL);
        String password = "";
        while (resultSet.next()){
            if (resultSet.getString(1)!=null){
                password = resultSet.getString(1);
            }
        }
        connection.close();
        return password;
    }

    public void updateUserFaceUrl(String userName, String faceurl) throws SQLException, ClassNotFoundException {
        connectDatabase();
        String initSQL = "UPDATE CoreBase.UserInfo SET faceurl ="+format(faceurl)+" WHERE username="+format(userName);
        statement.execute(initSQL);
        connection.close();
    }

    public void addContent(String userName, String content, String date) throws SQLException, ClassNotFoundException {
        connectDatabase();
        String values = format(userName)+","+format(content)+","+format(date);
        String initSQL = "INSERT INTO CoreBase.MainContent(username,content,constructdate) " +
                "values(" + values + ")";
        statement.execute(initSQL);
        connection.close();
    }

    public Map<String, UserContent> getAllContents() throws SQLException, ClassNotFoundException {
        connectDatabase();
        Map<String,UserContent> resultMap = new HashMap<String, UserContent>();

        // Construct Initial User Content Without Reply.
        String queryKEYs = "SELECT id,username,content,constructdate FROM CoreBase.MainContent";
        resultSet = statement.executeQuery(queryKEYs);
        while (resultSet.next()){
            String id = resultSet.getString(1);
            String username = resultSet.getString(2);
            String content = resultSet.getString(3);
            String date = resultSet.getString(4);
            UserContent userContent = new UserContent(username,content,date);
            resultMap.put(id,userContent);
        }

        // Add Response Content
        for (String mainContentKey : resultMap.keySet()){
            Map<String,UserContent> responseMap = new HashMap<String, UserContent>();
            String queryReply = "SELECT id,responser,replycontent,responsedate FROM CoreBase.Reply WHERE contentid="+format(mainContentKey);
            resultSet = statement.executeQuery(queryReply);
            while (resultSet.next()){
                String id = resultSet.getString(1);
                String username = resultSet.getString(2);
                String content = resultSet.getString(3);
                String date = resultSet.getString(4);
                UserContent userContent = new UserContent(username,content,date);
                responseMap.put(id,userContent);
            }
            resultMap.get(mainContentKey).setResponses(responseMap);
        }
        connection.close();
        return resultMap;
    }

    public void deleteContent(String id) throws SQLException, ClassNotFoundException {
        connectDatabase();
        String deleteContent = "DELETE FROM CoreBase.MainContent WHERE id="+id;
        statement.execute(deleteContent);
        String deleteResponse = "DELETE FROM CoreBase.Reply WHERE contentid="+id;
        statement.execute(deleteResponse);
        connection.close();
    }

    public void addResponseForContent(String contentid, String responser, String replycontent, String date) throws SQLException, ClassNotFoundException {
        connectDatabase();
        String values = format(responser)+","+contentid+","+format(date)+","+format(replycontent);
        String addSQL = "INSERT INTO CoreBase.Reply(responser,contentid,responsedate,replycontent) " +
                "values(" +values+ ")";
        statement.execute(addSQL);
        connection.close();
    }

    public Map<String, UserContent> getUserContent(String username) throws SQLException, ClassNotFoundException {
        connectDatabase();
        Map<String,UserContent> resultMap = new HashMap<String, UserContent>();

        // Construct Initial User Content Without Reply.
        String queryKEYs = "SELECT id,username,content,constructdate FROM CoreBase.MainContent WHERE username="+format(username);
        resultSet = statement.executeQuery(queryKEYs);
        while (resultSet.next()){
            String id = resultSet.getString(1);
            String user = resultSet.getString(2);
            String content = resultSet.getString(3);
            String date = resultSet.getString(4);
            UserContent userContent = new UserContent(user,content,date);
            resultMap.put(id,userContent);
        }

        // Add Response Content
        for (String mainContentKey : resultMap.keySet()){
            Map<String,UserContent> responseMap = new HashMap<String, UserContent>();
            String queryReply = "SELECT id,responser,replycontent,responsedate FROM CoreBase.Reply WHERE contentid="+format(mainContentKey);
            resultSet = statement.executeQuery(queryReply);
            while (resultSet.next()){
                String id = resultSet.getString(1);
                String user = resultSet.getString(2);
                String content = resultSet.getString(3);
                String date = resultSet.getString(4);
                UserContent userContent = new UserContent(user,content,date);
                responseMap.put(id,userContent);
            }
            resultMap.get(mainContentKey).setResponses(responseMap);
        }
        connection.close();
        return resultMap;
    }
}
