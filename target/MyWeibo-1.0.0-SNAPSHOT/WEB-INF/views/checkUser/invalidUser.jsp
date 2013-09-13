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
            run();
        });
        function run(){
            p+=5;
            $("div[class=bar]").css("width",p+"%");
            if(p<100){
                setTimeout(function(){
                   run();
                },20);
            }
            else{
                setTimeout("document.location.href='/logout'",1500);
            }
        }
    </script>
</head>
<body class="allBackground">
<div class="redBorder">
    <h1>你输入的账号信息有误！</h1>
    <div class="progress progress-striped active">
        <div class="bar" style="width: 0%;"></div>
    </div>
</div>
</body>
</html>