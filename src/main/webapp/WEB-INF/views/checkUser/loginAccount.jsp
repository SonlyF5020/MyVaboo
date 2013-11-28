<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="true" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet">
<link href="<%=request.getContextPath()%>/resources/css/myStyle.css" rel="stylesheet">


<html>
<head>
    <title>welcome</title>
</head>

<body class="allBackground">
<div class="login">
    <div class="clientForm">
        <form action="/checkUser" method="post">
            姓名：<input type="text" name="name" required><br>
            密码：<input type="password" name="password" minlength=2 required><br>
            <a href="/forgetPassword">忘记密码？</a> <br>
            <input type="submit" class="btn" value="登陆"><a href="/register" class="btn">注册</a>
        </form>
    </div>
    <div class="bigLogo">
        <img src="/resources/img/zergIcon.png">
    </div>
    <script src="/resources/js/jQuery.js"></script>
    <script src="/resources/js/jquery.validate.js"></script>
    <script>
        $('form').validate();
    </script>
</div>
</body>
</html>