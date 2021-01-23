<%@ page import="java.io.File" %>
<%@ page pageEncoding="UTF-8" contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <title>Read file</title>
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

    .open_form {
      margin-top: 20px;
    }

    .upload_form {
      margin-bottom: 40px;
    }

    .open_input {
      margin-top: 20px;
      width: 100px;
    }

  </style>
</head>
<body>
<main>
  <form class="upload_form" action="upload" enctype="multipart/form-data" method="post">
    <p style="margin-bottom: 5px; margin-top: 0px;">
      <input type="file" value="Choose File" name="getFile" height="130"/><br>
    </p>
    <input type="submit" value="Upload File">
  </form>
  <b>${upload_result}</b><br>
  <form class="open_form" action="read" method="post" accept-charset="UTF-8">
    <span>Open file:</span><br>
    <input class="open_input" type="submit" name="exec" value="Open"/>
  </form>
</main>
</body>
</html>
