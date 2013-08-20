package com.thoughtworks.zhanhonglai.data;

public class UserInfo {
    private String UserName;
    private String password;
    private String UserFaceUrl;
    private String emailAddress;

    public String getUserFaceUrl() {
        return UserFaceUrl;
    }

    public UserInfo() {
    }

    public String getUserName() {
        return UserName;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setUserName(String userName) {
        UserName = userName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setUserFaceUrl(String userFaceUrl) {
        UserFaceUrl = userFaceUrl;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public UserInfo(String userName, String password, String userFaceUrl) {
        setUserName(userName);
        setPassword(password);
        setUserFaceUrl(userFaceUrl);
    }

    public String getPassword() {
        return password;
    }
}
