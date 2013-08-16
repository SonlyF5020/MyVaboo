<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" contentType="text/html; charset=UTF-8" %>

<html>
<head>
    <title class="title">My Weibo</title>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <link href="<%=request.getContextPath()%>/resources/css/myStyle.css" rel="stylesheet">
    <link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet">
    <script type="text/javascript" src="/resources/js/bootstrap.js"></script>
    <script type="text/javascript" src="/resources/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/resources/js/home.js"></script>
</head>

<body class="allBackground">
<div class="body">
    <div class="header">
        <div class="head">
            <div class="miniLogo"><img src="/resources/img/zergIcon.png" CLASS="img-circle"></div>
            <div class="centerText"><h1>&nbspVaboo</h1></div>
        </div>
        <div class="clientInfo">
            <span id="client">用户:<span id="currentUserName"></span></span><br>
            <a href="/login">退出</a>
        </div>
    </div>
    <br>
    <hr>
    <div class="default"><h1>留下你的足迹</h1>
        <div class="navigator" id="navigator">
            <div divName="All">大家的</div>
            <div divName="My">我自己的</div>
        </div>
        <div id="weiboContent" class="weiboContent"></div>
        <hr>

        <jsp:include page="modal/deleteModal.jsp"></jsp:include>
        <jsp:include page="modal/editModal.jsp"></jsp:include>

        <div id="editContent" class="editContent">
            <div class="leftArea">
                <textarea type="text" id="weibo" Value="Say something?" class="weibo"></textarea>
            </div>
            <div class="rightArea">
                <button id="confirm" class="btn">提交</button>
            </div>
        </div>

        <form action="/submitContent" class="hiddenForm" method="post">
            <input type="text" id="newContent" name="newContent">
            <input type="submit" id="contentSubmit">
        </form>

    </div>
</div>
</body>
</html>