package com.thoughtworks.zhanhonglai;

import com.thoughtworks.zhanhonglai.service.ContentStore;
import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

public class contentStoreTest {
    ContentStore contentStore = new ContentStore();

    @Test
    public void should_read_file() throws Exception {
        contentStore.buildUserFile("zhanhonglai","hei");
        assertThat(contentStore.readUserFile("zhanhonglai"), is("HelloWorld"));
    }

    @Test
    public void testJava() throws Exception {
        ContentStore initialContentStore = new ContentStore();
        initialContentStore.setTestString("one");
        ContentStore anotherContentStore = initialContentStore;
        anotherContentStore.setTestString("two");
        System.out.println(initialContentStore.getTestString());
    }
}
