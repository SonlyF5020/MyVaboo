package com.thoughtworks.zhanhonglai.email;

import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;

import javax.mail.internet.MimeMessage;

public class HostMail {
    public static void sendMail() throws javax.mail.MessagingException {
        JavaMailSenderImpl senderImpl = new JavaMailSenderImpl();

        // 设定mail server
        senderImpl.setHost("smtp.163.com");
        senderImpl.setUsername("502089948");
        senderImpl.setPassword("zhan123456789");

        // 建立HTML邮件消息
        MimeMessage mailMessage = senderImpl.createMimeMessage();

        // true表示开始附件模式
        MimeMessageHelper messageHelper = new MimeMessageHelper(mailMessage, true, "utf-8");

        // 设置收件人，寄件人
        messageHelper.setTo("502089948@qq.com");
        messageHelper.setFrom("502089948@163.com");
        messageHelper.setSubject("测试邮件！");
        // true 表示启动HTML格式的邮件
        messageHelper.setText("<html><head></head><body><h1>你好：附件！！</h1></body></html>", true);

        // 发送邮件
        senderImpl.send(mailMessage);
        System.out.println("邮件发送成功.....");

    }
}
