package com.thoughtworks.zhanhonglai.data;


import java.util.ArrayList;
import java.util.List;

public class UserContent {
    private final String updateData;
    private final String content;
    private final String userName;
    private List<UserContent> responses = new ArrayList<UserContent>();

    public UserContent(String userName,String content, String updateDate) {
        this.userName = userName;
        this.content = content;
        this.updateData = updateDate;
    }

    public String getContent() {
        return content;
    }
    public String getDate(){
        return updateData;
    }

    public String getUserName() {
        return userName;
    }
}
