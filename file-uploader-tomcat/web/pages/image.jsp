<%@ page import="main.java.util.indentifier.ImageIndentifier" %>
<jsp:useBean id="fileName" scope="request" type="java.lang.String"/>
<jsp:useBean id="fileContent" scope="request" type="java.lang.String"/>

<%@ page pageEncoding="UTF-8" contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>${fileName}</title>
    <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
    <style type="text/css">
        body{
            margin: 0;
            padding: 0;
        }
        main {
            display: flex;
            flex-direction: column;
            align-items: center
        }
        .back_btn {
            width: 100px;
            height: 20px;
            border: 1px solid;
            text-align: center;
            border-radius: 7%;
            color: black;
            outline: none;
            text-decoration: none;
        }
    </style>
</head>
<body>
<main>
    <h2>${fileName}</h2>
    <%
        if (ImageIndentifier.isImage(fileName))  {
            out.print("<p align=center><img src=\"images/" + fileName + "\" alt=\"" + fileName + "\" /></p>");
        } else {
            out.print("<span>" + fileContent + "</span><br/>");
        }
    %>

    <a class="back_btn" href="/web_war_exploded">Back</a>
</main>
</body>
</html>
