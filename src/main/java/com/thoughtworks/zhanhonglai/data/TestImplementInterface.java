package com.thoughtworks.zhanhonglai.data;

public class TestImplementInterface implements TestInterface{
    @Override
    public boolean isTestable() {
        return false;
    }
}
