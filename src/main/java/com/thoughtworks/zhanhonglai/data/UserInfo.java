package com.thoughtworks.zhanhonglai.data;


import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class UserInfo {
    private String UserName;
    private String password;
    private String UserFaceUrl;
    private String emailAddress;

    public String getUserFaceUrl() {
        return UserFaceUrl;
    }

    public UserInfo() {
    }

    public String getUserName() {
        return UserName;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setUserName(String userName) {
        UserName = userName;
    }

    public void setPassword(String password){
        MessageDigest messageDigest = null;
        try {
            messageDigest = MessageDigest.getInstance("MD5");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        messageDigest.update(password.getBytes());

        byte[] bs=messageDigest.digest();   //进行加密运算并返回字符数组
        for(byte b: bs){
            System.out.print(b+"|"); //打印出来加密后的字符数组
        }
        System.out.println();

        StringBuffer sb=new StringBuffer();
        for(int i=0;i<bs.length;i++){    //字节数组转换成十六进制字符串，形成最终的密文
            int v=bs[i]&0xff;
            if(v<16){
                sb.append(0);
            }
            sb.append(Integer.toHexString(v));
        }
        System.out.println("加密之后的字符串："+sb);
        this.password = password;
    }

    public void setUserFaceUrl(String userFaceUrl) {
        UserFaceUrl = userFaceUrl;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public UserInfo(String userName, String password, String userFaceUrl){
        setUserName(userName);
        setPassword(password);
        setUserFaceUrl(userFaceUrl);
    }

    public String getPassword() {
        return password;
    }
}
