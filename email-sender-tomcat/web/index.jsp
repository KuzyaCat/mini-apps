<%-- Created by IntelliJ IDEA. --%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Sending email</title>
</head>
<body>
<form action="send" method="post">
  To:<input type="email" name="to" style="margin-left: 10px; margin-bottom: 10px; width: 400px;" /><br/>
  Subject:<input type="text" name="subject" style="margin-left: 10px; margin-bottom: 10px; width: 400px;" /><br/>
  Message:<input type="text" name="message" style="margin-left: 10px; margin-bottom: 10px; width: 400px;" /><br/>
  Your Email:<input type="email" name="user" style="margin-left: 10px; margin-bottom: 10px; width: 400px;" ><br/>
  Password:<input type="password" name="pass" style="margin-left: 10px; margin-bottom: 10px; width: 400px;" /><br/>
  <input type="submit" value="send" style="width: 100px; height: 50px;" />
</form>
</body>
</html>