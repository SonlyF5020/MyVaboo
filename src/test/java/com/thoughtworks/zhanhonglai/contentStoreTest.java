package com.thoughtworks.zhanhonglai;

import com.thoughtworks.zhanhonglai.data.UpdateDate;
import com.thoughtworks.zhanhonglai.data.UserContent;
import com.thoughtworks.zhanhonglai.service.ContentStore;
import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

public class contentStoreTest {
    ContentStore contentStore = new ContentStore();

    @Test
    public void should_read_file() throws Exception {
        String content ="first";
        UpdateDate updateDate = new UpdateDate("2000","6","14");
        UserContent userContent = new UserContent(content,updateDate);

        contentStore.buildUserFile("zhanhonglai",userContent);
        assertThat(contentStore.readContent("zhanhonglai"), is("first"));
    }
}
