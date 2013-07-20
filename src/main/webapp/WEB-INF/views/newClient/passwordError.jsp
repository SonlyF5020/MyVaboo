<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" contentType="text/html; charset=GB2312"%>
<link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet">
<link href="<%=request.getContextPath()%>/resources/css/myStyle.css" rel="stylesheet">

<html>
<head>
    <title>invalidUser</title>
    <script>
        setTimeout("document.location.href='/register'",1000);
    </script>
</head>
<body class="allBackground">
<div class="redBorder">
    <h1>您两次输入的密码不同！</h1>
</div>
</body>
</html>