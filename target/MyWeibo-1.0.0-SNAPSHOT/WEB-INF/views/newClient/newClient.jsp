<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" contentType="text/html; charset=GB2312" %>
<link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet">
<link href="<%=request.getContextPath()%>/resources/css/myStyle.css" rel="stylesheet">


<html>
<head>
    <title>welcome</title>
</head>

<body class="darkBackground">
<div class="login">
    <div class="clientForm">
        <form action="/clientCreate" method="get">
            ������<input type="text" name="name"><br>
            ���룺<input type="password" name="password"><br>
            ���룺<input type="password" name="passwordConfirm"><br>
            <input type="submit" class="btn" value="ȷ��"><a href="/" class="btn">����</a>
        </form>
    </div>
    <div class="bigLogo">
        <img src="/resources/img/zergIcon.png">
    </div>
</div>
</body>
</html>