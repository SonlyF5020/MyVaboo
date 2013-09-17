<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="true" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet">
<link href="<%=request.getContextPath()%>/resources/css/myStyle.css" rel="stylesheet">
<script type="text/javascript" src="/resources/js/jQuery.js"></script>
<script type="text/javascript" src="/resources/js/bootstrap.js"></script>
<html>
<head>
    <title>invalidUser</title>
    <script>
        var p = 0;
        $(function () {
            run();
        });
        function run() {
            p += 5;
            $("div[class=bar]").css("width", p + "%");
            if (p < 100) {
                setTimeout("run()", 20);
            }
            else {
                setTimeout("document.location.href='/home'", 1000);
            }
        }
    </script>
</head>
<body class="allBackground">
<div class="greenBorder">
    <h1>账号申请成功！</h1>

    <div class="progress progress-striped active">
        <div class="bar" style="width: 0%;"></div>
    </div>
    <img src="/resources/img/loading.gif">
</div>
</body>
</html>