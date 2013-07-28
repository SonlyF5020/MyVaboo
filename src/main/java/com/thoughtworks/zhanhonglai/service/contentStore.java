package com.thoughtworks.zhanhonglai.service;
import com.thoughtworks.zhanhonglai.data.UserContent;
import java.util.HashMap;
import java.util.Map;

public class ContentStore {
    Map<String,UserContent> contents = new HashMap<String,UserContent>();
    int contentIndex = 0;

    public void addContent(UserContent content) {
        contents.put(""+contentIndex, content);
        contentIndex++;
    }

    public Map<String, UserContent> getAllContents() {
        return contents;
    }

    public Map<String,UserContent> getUserContent(String userName) {
        Map<String,UserContent> result = new HashMap<String, UserContent>();
        for (String contentKey:contents.keySet()){
            if (contents.get(contentKey).getUserName().equals(userName)){
                result.put(contentKey,contents.get(contentKey));
            }
        }
        return result;
    }

    public void deleteContent(String deleteContent) {
        contents.remove(deleteContent);
    }
}
