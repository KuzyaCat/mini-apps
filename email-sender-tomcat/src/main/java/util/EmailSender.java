package main.java.util;

import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;

public class EmailSender {
    public static void send(String to, String sub,
                            String msg, final String userName, final String password) {
        Properties props = new Properties();

        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");

        Session session = Session.getInstance(props,new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(userName, password);
            }
        });

        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(userName));
            message.addRecipient(Message.RecipientType.TO,new InternetAddress(to));
            message.setSubject(sub);
            message.setText(msg);

            Transport.send(message);
        }
        catch(Exception e) {
            e.printStackTrace();
        }
    }
}