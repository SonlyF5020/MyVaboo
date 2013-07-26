<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" contentType="text/html; charset=GB2312" %>

<html>
<head>
    <title class="title">My Weibo</title>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <link href="<%=request.getContextPath()%>/resources/css/myStyle.css" rel="stylesheet">
    <link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet">
    <script type="text/javascript" src="/resources/js/bootstrap.js"></script>
    <script type="text/javascript" src="/resources/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/resources/js/home.js"></script>
    <script>
        var i = 0;
        var j = 0;
        var deleteContent = "";
        $(function () {
            $.getJSON("/json/userHistory",function(allData){
                var index;
                for(index in allData){
                    var deleteButton = $('<div></div>').addClass('deleteButton');
                    var chart = $('<div></div>').attr('id', i++).attr('class', 'oneContent')
                            .html(allData[index]["content"]+"<br><hr>"+allData[index]["date"]+"("+allData[index]["userName"]+")")
                            .append(deleteButton);
                    $('#weiboContent').prepend(chart);
                }
            });

            $('#confirm').live("click", function () {
                var year = new Date().getYear().toString().substring(1, 3);
                var month = (new Date().getMonth() + 1).toString();
                var date = new Date().getDate().toString();
                var dateString = "---20" + year + "." + month + "." + date;
                $('#newContent').val($('#weibo').val());
                $('#newContentDate').val(dateString);
                $('#weibo').val("");
                $('#contentSubmit').click();
            });

            $('.oneContent').live('mouseover', function () {
                $(this).addClass('mouseOver');
                $('.deleteButton', this).show();
            });

            $('.oneContent').live('mouseout', function () {
                $('.oneContent').removeClass('mouseOver');
                $('.deleteButton').hide();
            });

            $('.deleteButton').live('click', function () {
                $('#myModal').modal('show');
                deleteContent = $(this).parent().attr("id");
            });

            $('#sureButton').live('click', function () {
                $('#' + deleteContent).hide();
                $('#myModal').modal('hide');
            });
        });
    </script>

</head>

<body class="allBackground">
<div class="body">
    <div class="header">
        <div class="head">
            <div class="miniLogo"><img src="/resources/img/zergIcon.png" CLASS="img-circle"></div>
            <div class="centerText"><h1>&nbspVaboo</h1></div>
        </div>
        <div class="clientInfo">
            <span id="client">用户:<c:out value="${name}"></c:out></span><br>
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
                <h3 id="myModalLabel">你确定要删除这一条记录么?</h3>
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