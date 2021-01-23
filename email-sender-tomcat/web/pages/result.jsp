<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Sending result</title>
</head>
<body>
    <span><%=request.getAttribute("Message")%></span>
    <form action="send" method="get">
        <input style="width: 100px; height: 20px;" type="submit" value="Back"/>
    </form>
</body>
</html>