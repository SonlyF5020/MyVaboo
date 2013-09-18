<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="true" contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet">
<link href="<%=request.getContextPath()%>/resources/css/myStyle.css" rel="stylesheet">
<script type="text/javascript" src="/resources/js/jQuery.js"></script>
<script type="text/javascript" src="/resources/js/bootstrap.js"></script>


<html>
<head>
    <title>invalidUser</title>
    <script>
        var p=0;
        $(function(){
            setTimeout("document.location.href='/logout'",3000);
        });
    </script>
</head>
<body class="allBackground">
<div class="redBorder">
    <h1>你输入的账号信息有误！</h1>
    <img src="/resources/img/circleLoading.gif" style="height: 80px;width: 80px;margin-left: 250px">
</div>
</body>
</html>