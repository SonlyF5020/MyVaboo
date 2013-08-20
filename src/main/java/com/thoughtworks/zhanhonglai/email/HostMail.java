package com.thoughtworks.zhanhonglai.email;

import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;

import javax.mail.internet.MimeMessage;

public class HostMail {
    public static void sendMail(String emailAddress,String password) throws javax.mail.MessagingException {
        JavaMailSenderImpl senderImpl = new JavaMailSenderImpl();

        // 设定mail server
        senderImpl.setHost("smtp.163.com");
        senderImpl.setUsername("vaboo_bigz");
        senderImpl.setPassword("zhan123456789");

        // 建立HTML邮件消息
        MimeMessage mailMessage = senderImpl.createMimeMessage();

        // true表示开始附件模式
        MimeMessageHelper messageHelper = new MimeMessageHelper(mailMessage, true, "utf-8");

        // 设置收件人，寄件人
        messageHelper.setTo(emailAddress);
        messageHelper.setFrom("vaboo_bigz@163.com");
        messageHelper.setSubject("找回密码");
        // true 表示启动HTML格式的邮件
        messageHelper.setText("<html><head></head><body><h1>你的密码是："+password+"</h1></body></html>", true);

        // 发送邮件
        senderImpl.send(mailMessage);
        System.out.println("邮件发送成功.....");

    }
}
