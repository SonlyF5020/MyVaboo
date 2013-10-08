package com.thoughtworks.zhanhonglai.MySQL;

import com.thoughtworks.zhanhonglai.data.UserContent;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

public class MySQLmanager {
    private Connection connection = null;
    private java.sql.Statement statement = null;
    private ResultSet resultSet = null;

    private String readURL;
    private String writeURL;
    private String userName;
    private String passWord;
    private String driver;

    public MySQLmanager() {
    }

    public MySQLmanager(String readURL, String writeURL, String userName, String passWord,String driver) {
        this.readURL = readURL;
        this.writeURL = writeURL;
        this.userName = userName;
        this.passWord = passWord;
        this.driver = driver;
    }

    public void createUser(String userName, String password, String faceUrl, String email) throws ClassNotFoundException, SQLException {
        connectWrite();
        String values = buildValues(userName, password, faceUrl, email);
        String initSQL = "INSERT INTO UserInfo(username,password,faceurl,email) " +
                "values(" + values + ")";
        statement.execute(initSQL);
        connection.close();
    }

    public boolean isUserNameExisted(String userName) throws SQLException, ClassNotFoundException {
        connectRead();
        String querySQL = "SELECT username FROM UserInfo WHERE username=" + format(userName);
        resultSet = statement.executeQuery(querySQL);
        while (resultSet.next()) {
            if (resultSet.getString(1) != null) {
                connection.close();
                return true;
            }
        }
        connection.close();
        return false;
    }

    private void connectRead() throws ClassNotFoundException, SQLException {
        try{
            Class.forName(driver).newInstance();
        }catch (Exception e){
            e.printStackTrace();
        }
        connection = DriverManager.getConnection(readURL,userName,passWord);
        statement = connection.createStatement();
    }

    private void connectWrite() throws ClassNotFoundException, SQLException {
        try{
            Class.forName(driver).newInstance();
        }catch (Exception e){
            e.printStackTrace();
        }
        connection = DriverManager.getConnection(writeURL,userName,passWord);
        statement = connection.createStatement();
    }

    private String buildValues(String userName, String password, String faceUrl, String email) {
        return format(userName) + "," + format(code(password)) + "," + format(faceUrl) + "," + format(email);
    }

    private String format(String input) {
        return "'" + input + "'";
    }

    public boolean isPasswordCorrect(String userName, String password) throws SQLException, ClassNotFoundException {
        connectRead();
        String querySQL = "SELECT username FROM UserInfo WHERE username=" + format(userName) + " AND password=" + format(code(password));
        resultSet = statement.executeQuery(querySQL);
        while (resultSet.next()) {
            if (resultSet.getString(1) != null) {
                connection.close();
                return true;
            }
        }
        connection.close();
        return false;
    }

    public String getUserFaceUrl(String userName) throws SQLException, ClassNotFoundException {
        connectRead();
        String querySQL = "SELECT faceurl FROM UserInfo WHERE username=" + format(userName);
        resultSet = statement.executeQuery(querySQL);
        String userFaceUrl = "";
        while (resultSet.next()) {
            if (resultSet.getString(1) != null) {
                userFaceUrl = resultSet.getString(1);
            }
        }
        connection.close();
        return userFaceUrl;
    }

    public boolean isEmailCorrect(String userName, String email) throws SQLException, ClassNotFoundException {
        connectRead();
        String querySQL = "SELECT email FROM UserInfo WHERE username=" + format(userName) + " AND email=" + format(email);
        resultSet = statement.executeQuery(querySQL);
        while (resultSet.next()) {
            if (resultSet.getString(1) != null) {
                connection.close();
                return true;
            }
        }
        connection.close();
        return false;
    }

    public String getUserPassword(String userName) throws SQLException, ClassNotFoundException {
        connectRead();
        String querySQL = "SELECT password FROM UserInfo WHERE username=" + format(userName);
        resultSet = statement.executeQuery(querySQL);
        String password = "";
        while (resultSet.next()) {
            if (resultSet.getString(1) != null) {
                password = resultSet.getString(1);
            }
        }
        connection.close();
        return password;
    }

    public void updateUserFaceUrl(String userName, String faceurl) throws SQLException, ClassNotFoundException {
        connectWrite();
        String initSQL = "UPDATE UserInfo SET faceurl =" + format(faceurl) + " WHERE username=" + format(userName);
        statement.execute(initSQL);
        connection.close();
    }

    public void addContent(String userName, String content, String date) throws SQLException, ClassNotFoundException {
        connectWrite();
        String values = format(userName) + "," + format(content) + "," + format(date);
        String initSQL = "INSERT INTO MainContent(username,content,constructdate) " +
                "values(" + values + ")";
        statement.execute(initSQL);
        connection.close();
    }

    public Map<String, UserContent> getAllContents() throws SQLException, ClassNotFoundException {
        connectRead();
        Map<String, UserContent> resultMap = new HashMap<String, UserContent>();

        // Construct Initial User Content Without Reply.
        String queryKEYs = "SELECT id,username,content,constructdate FROM MainContent";
        resultSet = statement.executeQuery(queryKEYs);
        while (resultSet.next()) {
            String id = resultSet.getString(1);
            String username = resultSet.getString(2);
            String content = resultSet.getString(3);
            String date = resultSet.getString(4);
            UserContent userContent = new UserContent(username, content, date);
            resultMap.put(id, userContent);
        }

        // Add Response Content
        for (String mainContentKey : resultMap.keySet()) {
            Map<String, UserContent> responseMap = new HashMap<String, UserContent>();
            String queryReply = "SELECT id,responser,replycontent,responsedate FROM Reply WHERE contentid=" + format(mainContentKey);
            resultSet = statement.executeQuery(queryReply);
            while (resultSet.next()) {
                String id = resultSet.getString(1);
                String username = resultSet.getString(2);
                String content = resultSet.getString(3);
                String date = resultSet.getString(4);
                UserContent userContent = new UserContent(username, content, date);
                responseMap.put(id, userContent);
            }
            resultMap.get(mainContentKey).setResponses(responseMap);
        }
        connection.close();
        return resultMap;
    }

    public void deleteContent(String id) throws SQLException, ClassNotFoundException {
        connectWrite();
        String deleteContent = "DELETE FROM MainContent WHERE id=" + id;
        statement.execute(deleteContent);
        String deleteResponse = "DELETE FROM Reply WHERE contentid=" + id;
        statement.execute(deleteResponse);
        connection.close();
    }

    public void addResponseForContent(String contentid, String responser, String replycontent, String date) throws SQLException, ClassNotFoundException {
        connectWrite();
        String values = format(responser) + "," + contentid + "," + format(date) + "," + format(replycontent);
        String addSQL = "INSERT INTO Reply(responser,contentid,responsedate,replycontent) " +
                "values(" + values + ")";
        statement.execute(addSQL);
        connection.close();
    }

    public Map<String, UserContent> getUserContent(String username) throws SQLException, ClassNotFoundException {
        connectRead();
        Map<String, UserContent> resultMap = new HashMap<String, UserContent>();

        // Construct Initial User Content Without Reply.
        String queryKEYs = "SELECT id,username,content,constructdate FROM MainContent WHERE username=" + format(username);
        resultSet = statement.executeQuery(queryKEYs);
        while (resultSet.next()) {
            String id = resultSet.getString(1);
            String user = resultSet.getString(2);
            String content = resultSet.getString(3);
            String date = resultSet.getString(4);
            UserContent userContent = new UserContent(user, content, date);
            resultMap.put(id, userContent);
        }

        // Add Response Content
        for (String mainContentKey : resultMap.keySet()) {
            Map<String, UserContent> responseMap = new HashMap<String, UserContent>();
            String queryReply = "SELECT id,responser,replycontent,responsedate FROM Reply WHERE contentid=" + format(mainContentKey);
            resultSet = statement.executeQuery(queryReply);
            while (resultSet.next()) {
                String id = resultSet.getString(1);
                String user = resultSet.getString(2);
                String content = resultSet.getString(3);
                String date = resultSet.getString(4);
                UserContent userContent = new UserContent(user, content, date);
                responseMap.put(id, userContent);
            }
            resultMap.get(mainContentKey).setResponses(responseMap);
        }
        connection.close();
        return resultMap;
    }

    public static String code(String beforeCode) {
        MessageDigest messageDigest = null;
        try {
            messageDigest = MessageDigest.getInstance("MD5");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        messageDigest.update(beforeCode.getBytes());

        byte[] bs = messageDigest.digest();   //进行加密运算并返回字符数组
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < bs.length; i++) {    //字节数组转换成十六进制字符串，形成最终的密文
            int v = bs[i] & 0xff;
            if (v < 16) {
                sb.append(0);
            }
            sb.append(Integer.toHexString(v));
        }
        return "" + sb;
    }

    public void testSQL() throws ClassNotFoundException, SQLException, IllegalAccessException, InstantiationException {
        try{
            Class.forName(driver).newInstance();
        }catch (Exception e){
            e.printStackTrace();
        }
        connection = DriverManager.getConnection(writeURL,userName,passWord);
        statement = connection.createStatement();
        String SQL = "INSERT INTO testtable(testnumber) values(12)";
        statement.execute(SQL);
    }

    public Map search(String searchContent) throws SQLException, ClassNotFoundException{
        Map<String, UserContent> resultMap = new HashMap<String, UserContent>();

        // Construct Initial User Content Without Reply.
        String queryKEYs = "SELECT id,username,content,constructdate FROM MainContent WHERE username=" + format(username);
        resultSet = statement.executeQuery(queryKEYs);
        while (resultSet.next()) {
            String id = resultSet.getString(1);
            String user = resultSet.getString(2);
            String content = resultSet.getString(3);
            String date = resultSet.getString(4);
            UserContent userContent = new UserContent(user, content, date);
            resultMap.put(id, userContent);
        }

        // Add Response Content
        for (String mainContentKey : resultMap.keySet()) {
            Map<String, UserContent> responseMap = new HashMap<String, UserContent>();
            String queryReply = "SELECT id,responser,replycontent,responsedate FROM Reply WHERE contentid=" + format(mainContentKey);
            resultSet = statement.executeQuery(queryReply);
            while (resultSet.next()) {
                String id = resultSet.getString(1);
                String user = resultSet.getString(2);
                String content = resultSet.getString(3);
                String date = resultSet.getString(4);
                UserContent userContent = new UserContent(user, content, date);
                responseMap.put(id, userContent);
            }
            resultMap.get(mainContentKey).setResponses(responseMap);
        }
        connection.close();
        return resultMap;
    }
}
