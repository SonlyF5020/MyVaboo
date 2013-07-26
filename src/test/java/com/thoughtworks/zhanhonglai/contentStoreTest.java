package com.thoughtworks.zhanhonglai;

import com.thoughtworks.zhanhonglai.data.UserContent;
import com.thoughtworks.zhanhonglai.service.ContentStore;
import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

public class contentStoreTest {
    ContentStore contentStore = new ContentStore();

    @Test
    public void should_read_file() throws Exception {
        String content = "first";
        String date = "2013.2.4";
        String userName = "xiaohei";
        UserContent userContent = new UserContent(userName, content, date);

        contentStore.addContent(userContent);
        assertThat(contentStore.getUserContent("xiaohei").get(""+0).getContent(), is("first"));
        assertThat(contentStore.getUserContent("xiaohei").get(""+0).getDate(), is("2013.2.4"));
    }
}
