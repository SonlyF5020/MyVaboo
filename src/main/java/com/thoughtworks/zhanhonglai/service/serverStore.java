package com.thoughtworks.zhanhonglai.service;

import java.util.HashMap;
import java.util.Map;

public class ServerStore {
    Map<String, String> userPasswordStore = new HashMap<String, String>();
    String currentUser;
    //TODO : Use session to handle multi-user online problem


    public void setCurrentUser(String currentUser) {
        this.currentUser = currentUser;
    }

    public boolean userPasswordIsCorrect(String name, String password) {
        return userPasswordStore.containsKey(name) && userPasswordStore.get(name).equals(password);
    }

    public void createUser(String name, String password) {
        userPasswordStore.put(name, password);
        setCurrentUser(name);
    }

    public ServerStore() {
        userPasswordStore.put("test", "123");
    }

    public boolean alreadyExistUser(String name) {
        return userPasswordStore.containsKey(name);
    }
}
