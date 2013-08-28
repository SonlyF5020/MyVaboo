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
        String values = buildValues(userName, password, faceUrl, email);
        Class.forName("com.mysql.jdbc.Driver");
        connection = DriverManager.getConnection("jdbc:mysql://localhost/CoreBase", "root", "");
        statement = connection.createStatement();
        String initSQL = "INSERT INTO CoreBase.UserInfo(username,password,faceurl,email) " +
                "values(" + values + ")";
        statement.execute(initSQL);
        connection.close();
    }



    private String buildValues(String userName, String password, String faceUrl, String email) {
        return format(userName) + "," + format(password) + "," + format(faceUrl) + "," + format(email);
    }

    private String format(String input) {
        return "'" + input + "'";
    }
}
