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
        <form action="/checkPassword" method="get">
            аеУћЃК<input type="text" name="name"><br>
            УмТыЃК<input type="password" name="password"><br>
            <input type="submit" class="btn" value="ЕЧТН"><a href="/register" class="btn">зЂВс</a>
        </form>
    </div>
    <div class="bigLogo">
        <img src="/resources/img/zergIcon.png">
    </div>
</div>
</body>
</html>