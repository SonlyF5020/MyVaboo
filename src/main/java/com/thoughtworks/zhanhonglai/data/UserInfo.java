package com.thoughtworks.zhanhonglai.data;

public class UserInfo {
    String UserName;
    String password;
    String UserFaceUrl;

    public UserInfo(String userName, String password, String userFaceUrl) {
        UserName = userName;
        this.password = password;
        UserFaceUrl = userFaceUrl;
    }

    public String getPassword() {
        return password;
    }
}
