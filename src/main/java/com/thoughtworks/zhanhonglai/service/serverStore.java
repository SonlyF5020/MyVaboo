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

    public void createNewUser(String name, String password, String faceUrl){
        UserInfo newUserInfo = new UserInfo(name, password, faceUrl);
        userInfoStore.put(name,newUserInfo);
    }

    public ServerStore() {
        this.userInfoStore.put("test",new UserInfo("test","123","/resources/img/zergIcon.png"));
    }

    public boolean isUserNameExisted(String name){
        return userInfoStore.containsKey(name);
    }

    public String getUserFaceUrl(String userName){
        return userInfoStore.get(userName).getUserFaceUrl();
    }
}
