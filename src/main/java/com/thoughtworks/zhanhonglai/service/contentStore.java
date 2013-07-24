package com.thoughtworks.zhanhonglai.service;

import sun.misc.IOUtils;

import java.io.*;

public class ContentStore {
    File contentFile;
    String testString;

    public void setTestString(String testString) {
        this.testString = testString;
    }

    public String getTestString() {
        return testString;
    }

    public void buildUserFile(String userName,String content){
        try {
            contentFile = new File("/data/"+userName+".txt");
            FileWriter fileWriter = new FileWriter(contentFile);
            fileWriter.write("fuck you "+userName + content);
            fileWriter.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public String readUserFile(String userName){
        try {
            BufferedReader inputStream = new BufferedReader(new FileReader(contentFile));
            String contentString="";
            String words;
            while((words=inputStream.readLine())!=null){
                contentString+=words;
            }
            inputStream.close();
            return contentString;

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return userName;
    }
}
