package com.thoughtworks.zhanhonglai.data;

public class UserInfo {
    String UserName;
    String password;

    public String getUserFaceUrl() {
        return UserFaceUrl;
    }

    String UserFaceUrl;

    public UserInfo(String userName, String password, String userFaceUrl) {
        this.UserName = userName;
        this.password = password;
        this.UserFaceUrl = userFaceUrl;
    }

    public String getPassword() {
        return password;
    }
}
