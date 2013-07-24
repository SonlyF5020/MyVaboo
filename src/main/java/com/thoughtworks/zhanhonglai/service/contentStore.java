package com.thoughtworks.zhanhonglai.service;

import com.thoughtworks.zhanhonglai.data.UpdateDate;
import com.thoughtworks.zhanhonglai.data.UserContent;

import java.util.HashMap;
import java.util.Map;

public class ContentStore {
    Map<String,UserContent> contents = new HashMap<String,UserContent>();
    public void buildUserFile(String userName,UserContent content){
        contents.put(userName,content);
    }

    public ContentStore() {
        String testContent = "hello world you stupid";
        UserContent userContent = new UserContent(testContent,new UpdateDate());
        contents.put("test",userContent);
    }

    public String readContent(String userName){
        if (contents.containsKey(userName)){
            return contents.get(userName).getContent();
        }
        return "";
    }

    public Map<String, UserContent> getContents() {
        return contents;
    }
}
