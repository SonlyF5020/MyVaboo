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
    <script>
        var i = 0;
        var j = 0;
        var deleteContent = "";
        $(document).ready(function () {
            $('#confirm').bind("click", function () {
                var year = new Date().getYear().toString().substring(1, 3);
                var month = (new Date().getMonth() + 1).toString();
                var date = new Date().getDate().toString();
                var name=$('#client').html();
                var dateString = "<hr>" + "---20" + year + "年" + month + "月" + date + "日"+"("+name+")";
                var deleteButton = $(document.createElement('div')).addClass('deleteButton');
                var chart = $(document.createElement('div')).attr('id', i++).attr('class', 'oneContent').html($('#weibo').val() + dateString).append(deleteButton);
                $('#weiboContent').prepend(chart);
                $('#weibo').val("");
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
            <div class="miniLogo"><img src="/resources/img/zergIcon.png"></div>
            <div class="centerText"><h1>&nbspVaboo</h1></div>
        </div>
        <div class="clientInfo">
            <span id="client">用户:<c:out value="${name}"></c:out></span><br>
            <a href="/">退出</a>
        </div>
    </div>
    <br>
    <hr>
    <div class="default"><h1>欢迎使用Vaboo,留下你的足迹</h1>

        <div id="weiboContent" class="weiboContent"></div>
        <hr>

        <div id="editContent" class="editContent">

            <div class="leftArea">
                <textarea type="text" id="weibo" Value="Say something?" class="weibo"></textarea>
            </div>

            <div class="rightArea">

                <div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                     aria-hidden="true">

                    <div class="modal-header">
                        <h3 id="myModalLabel">Are you sure you want to delete this tip?</h3>
                    </div>

                    <div class="modal-footer">
                        <button class="redButton btn" data-dismiss="modal" aria-hidden="true">NO!</button>
                        <button id="sureButton" class="btn btn-primary">Sure</button>
                    </div>
                </div>

                <button id="confirm" class="btn">confirm</button>
            </div>
        </div>
    </div>
</div>
</body>
</html>