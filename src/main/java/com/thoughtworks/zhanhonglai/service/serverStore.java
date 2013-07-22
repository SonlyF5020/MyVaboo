package com.thoughtworks.zhanhonglai.service;

import java.util.HashMap;
import java.util.Map;

public class ServerStore {
    Map<String,String> userMap = new HashMap<String,String>();
    String currentUser;

    public String getCurrentUser() {
        return currentUser;
    }

    public void setCurrentUser(String currentUser) {
        this.currentUser = currentUser;
    }

    public boolean userPasswordIsCorrect(String name, String password) {
        return userMap.containsKey(name)&&userMap.get(name).equals(password);
    }

    public void createUser(String name, String password) {
        userMap.put(name,password);
        setCurrentUser(name);
    }

    public ServerStore() {
        userMap.put("test","123");
    }

    public boolean alreadyExistUser(String name) {
        return userMap.containsKey(name);
    }
}
