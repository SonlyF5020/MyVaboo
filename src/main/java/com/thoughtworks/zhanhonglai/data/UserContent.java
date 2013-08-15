package com.thoughtworks.zhanhonglai.data;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UserContent {
    private final String updateData;
    private final String content;
    private final String userName;
    private Map<String,UserContent> responses = new HashMap<String,UserContent>();
    int responseIndex = 0;

    public Map<String, UserContent> getResponses() {
        return responses;
    }

    public void setResponses(List<UserContent> responses) {
        this.responses = (Map<String, UserContent>) responses;
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

    public void addResponse(UserContent responseUserContent) {
        responses.put(""+responseIndex,responseUserContent);
        responseIndex++;
    }
}
