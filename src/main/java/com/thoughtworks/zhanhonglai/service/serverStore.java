package com.thoughtworks.zhanhonglai.service;

import com.thoughtworks.zhanhonglai.data.UserInfo;

import java.util.HashMap;
import java.util.Map;

public class ServerStore {
    Map<String,UserInfo> userInfoStore = new HashMap<String, UserInfo>();
    //TODO : Use session to handle multi-user online problem

    public boolean isPasswordCorrect(String name, String password){
        String userPassword = userInfoStore.get(name).getPassword();
        return password.equals(userPassword);
    }

    public void createNewUser(String name, String password, String faceUrl,String emailAddress){
        UserInfo newUserInfo = new UserInfo();
        newUserInfo.setUserName(name);
        newUserInfo.setPassword(password);
        newUserInfo.setUserFaceUrl(faceUrl);
        newUserInfo.setEmailAddress(emailAddress);
        userInfoStore.put(name,newUserInfo);
    }

    public ServerStore() {
        UserInfo defaultUser = new UserInfo();

        defaultUser.setUserName("test");
        defaultUser.setPassword("123");
        defaultUser.setUserFaceUrl("/resources/img/zergIcon.png");
        defaultUser.setEmailAddress("502089948@qq.com");

        this.userInfoStore.put(defaultUser.getUserName(),defaultUser);
    }

    public boolean isUserNameExisted(String name){
        return userInfoStore.containsKey(name);
    }

    public String getUserFaceUrl(String userName){
        return userInfoStore.get(userName).getUserFaceUrl();
    }

    public boolean isEmailCorrect(String userName, String emailAddress) {
        if (userInfoStore.containsKey(userName)){
            String userEmailAddress = userInfoStore.get(userName).getEmailAddress();
            return userEmailAddress.equals(emailAddress);
        }
        return false;
    }

    public String getUserPassword(String userName) {
        return userInfoStore.get(userName).getPassword();
    }

    public void updateUserFace(String currentUser, String src) {
        UserInfo currentUserInfo = userInfoStore.get(currentUser);
        currentUserInfo.setUserFaceUrl(src);
    }
}
