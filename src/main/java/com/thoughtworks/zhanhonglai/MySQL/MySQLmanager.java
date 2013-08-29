package com.thoughtworks.zhanhonglai.MySQL;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

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
}
