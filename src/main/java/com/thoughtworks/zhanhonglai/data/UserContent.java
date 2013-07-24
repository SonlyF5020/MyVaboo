package com.thoughtworks.zhanhonglai.data;

import com.thoughtworks.zhanhonglai.data.UpdateDate;

public class UserContent {
    private final UpdateDate updateData;
    private final String content;

    public UserContent(String content, UpdateDate updateDate) {
        this.content = content;
        this.updateData = updateDate;
    }

    public String getContent() {
        return content;
    }
}
