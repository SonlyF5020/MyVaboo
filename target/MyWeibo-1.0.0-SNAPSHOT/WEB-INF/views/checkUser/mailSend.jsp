<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="true" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>
<head>
    <link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet">
    <link href="<%=request.getContextPath()%>/resources/css/myStyle.css" rel="stylesheet">
    <title></title>
</head>
<body class="allBackground">
<div class="redBorder">
    <h2>一封包含您密码的邮件已经发送到您的邮箱，请查收后登录！</h2>
    <a class="btn" href="/logout">登录</a>
</div>
</body>
</html>