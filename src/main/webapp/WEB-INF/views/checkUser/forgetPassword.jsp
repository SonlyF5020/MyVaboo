<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" contentType="text/html; charset=UTF-8" %>
<html>
<head>
    <link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet">
    <link href="<%=request.getContextPath()%>/resources/css/myStyle.css" rel="stylesheet">
    <title></title>
</head>
<body class="allBackground">
<div class="greenBorder">
    <form action="/getBackPassword" method="get">
        用户名称：<input type="text" name="userName"><br>
        登记邮箱：<input type="text" name="emailAddress"><br>
        <input type="submit" class="btn" value="找回密码">
        <a class="btn" href="/logout">返回登录</a>
    </form>
</div>
</body>
</html>