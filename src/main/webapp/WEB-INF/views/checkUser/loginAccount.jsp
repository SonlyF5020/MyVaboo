<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" contentType="text/html; charset=UTF-8" %>
<link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet">
<link href="<%=request.getContextPath()%>/resources/css/myStyle.css" rel="stylesheet">


<html>
<head>
    <title>welcome</title>
</head>

<body class="allBackground">
<div class="login">
    <div class="clientForm">
        <form action="/checkUser" method="get">
            姓名：<input type="text" name="name"><br>
            密码：<input type="password" name="password"><br>
            <input type="submit" class="btn" value="登陆"><a href="/register" class="btn">注册</a>
        </form>
    </div>
    <div class="bigLogo">
        <img src="/resources/img/zergIcon.png">
    </div>
</div>
</body>
</html>