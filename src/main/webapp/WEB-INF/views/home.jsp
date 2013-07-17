<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" contentType="text/html; charset=GB2312"%>

<html>
<head>
    <title class="title">My Weibo</title>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <link href="<%=request.getContextPath()%>/resources/css/myStyle.css" rel="stylesheet">
    <link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet">

    <script>
        var i = 0;
        var j = 0;
        $(document).ready(function(){
            $('#confirm').bind("click",function(){
                var year = new Date().getYear().toString();
                var month = (new Date().getMonth()+1).toString();
                var date = new Date().getDate().toString();
                var dateString = "<br>"+"               ---"+year+"year "+month+"month "+date+"day";
                var deleteButton = $(document.createElement('div')).addClass('deleteButton');
                var chart = $(document.createElement('div')).attr('id', i++).attr('class', 'oneContent').html($('#weibo').val()+dateString).append(deleteButton);
                $('#weiboContent').prepend(chart);
                $('#weibo').val("");
            });

            $('#cancel').bind("click",function(){
                $('#'+j).hide();
                j++;
            });

            $('.oneContent').live('mouseover',function(){
                $(this).addClass('mouseOver');
                $('.deleteButton',this).show();
            });

            $('.oneContent').live('mouseout',function(){
                $('.oneContent').removeClass('mouseOver');
                $('.deleteButton').hide();
            });

            $('.deleteButton').live('click',function(){
                $(this).parent().hide();
            });
        });
    </script>

</head>

<body class="basicBody">
<div class="body">
<h1 class="centerText"><img src="/resources/img/weibo-icon.png" class="logo">&nbspVaboo</h1>
<hr>
    <div id="weiboContent" class="weiboContent"></div>
<hr>

    <div id="editContent" class="editContent">

        <div class="leftArea">
        <textarea type = "text" id="weibo" Value="Say something?" class="weibo"></textarea>
        </div>

        <div class="rightArea">
        <button id = "confirm" class="btn">confirm</button>
        <button id = "cancel" class="btn">delete</button>
        </div>
    </div>
</div>
</body>
</html>