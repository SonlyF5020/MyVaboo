<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" contentType="text/html; charset=UTF-8"%>
<link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet">
<link href="<%=request.getContextPath()%>/resources/css/myStyle.css" rel="stylesheet">
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="/resources/js/bootstrap.js"></script>
<html>
<head>
    <title>validUser</title>
    <script>
        var p=0;
        $(function(){
            run();
        });
        function run(){
            p+=5;
            $("div[class=bar]").css("width",p+"%");
            if(p<100){
                setTimeout("run()",20);
            }
            else{
                setTimeout("document.location.href='/home'",1000);
            }
        }
    </script>
</head>
<body class="allBackground">
<div class="greenBorder">
    <h1>欢迎回来！. . .</h1>
    <div class="progress progress-striped active">
        <div class="bar" style="width: 0%;"></div>
    </div>
</div>
</body>
</html>