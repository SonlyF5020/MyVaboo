<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" contentType="text/html; charset=UTF-8"%>
<link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet">
<link href="<%=request.getContextPath()%>/resources/css/myStyle.css" rel="stylesheet">

<html>
<head>
    <title>invalidUser</title>
    <script>
        setTimeout("document.location.href='/'",1000);
    </script>
</head>
<body class="allBackground">
<div class="redBorder">
    <h1>你输入的账号或密码有误！</h1>
    <div class="progress progress-striped active">
        <div class="bar" style="width: 40%;"></div>
    </div>
</div>
</body>
</html>