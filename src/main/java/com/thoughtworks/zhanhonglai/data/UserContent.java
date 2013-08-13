package com.thoughtworks.zhanhonglai.data;


import java.util.ArrayList;
import java.util.List;

public class UserContent {
    private final String updateData;
    private final String content;
    private final String userName;
    private List<UserContent> responses = new ArrayList<UserContent>();


    public List<UserContent> getResponses() {
        return responses;
    }

    public void setResponses(List<UserContent> responses) {
        this.responses = responses;
    }

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
