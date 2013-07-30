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
            <a href="/">退出</a>
        </div>
    </div>
    <br>
    <hr>
    <div class="default"><h1>留下你的足迹</h1>

        <div id="weiboContent" class="weiboContent"></div>
        <hr>

        <div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true">
            <div class="modal-header">
                <h3 id="myModalLabel">你确定要删除这一条吗?</h3>
            </div>
            <div class="modal-footer">
                <button class="redButton btn" data-dismiss="modal" aria-hidden="true">点错了</button>
                <button id="sureButton" class="btn btn-primary">是的</button>
            </div>
        </div>

        <div id="editContent" class="editContent">
            <div class="leftArea">
                <textarea type="text" id="weibo" Value="Say something?" class="weibo"></textarea>
            </div>
            <div class="rightArea">
                <button id="confirm" class="btn">提交</button>
            </div>
        </div>

        <form action="/submitContent" class="hiddenForm" method="post">
            <input type="text" id="newContentDate" name="newContentDate">
            <input type="text" id="newContent" name="newContent">
            <input type="submit" id="contentSubmit">
        </form>

    </div>
</div>
</body>
</html>