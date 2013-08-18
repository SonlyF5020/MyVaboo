<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" contentType="text/html; charset=UTF-8" %>
<link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet">
<link href="<%=request.getContextPath()%>/resources/css/myStyle.css" rel="stylesheet">


<html>
<head>
    <title>welcome</title>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <script type="text/javascript" src="/resources/js/bootstrap.js"></script>

    <script>
        $(document).ready(function(){
            $('#confirmShow').live("click",function(){
                if($('#password1').val() == $('#password2').val()){
                    $(".hiddenForm>[name='name']").val($('#inputName').val());
                    $(".hiddenForm>[name='password']").val($('#password1').val());
                    $("#confirmHidden").click();
                }
                else{
                    $(".warning").show();
                }
            });
            var index = 1;
            while(index<6){
                var faceUrl = '/resources/img/Face-Icons/Males/'+index+'.png';
                var newFace = $("<img>").attr("src",faceUrl);
                var faceDiv = $("<div class='oneFace'><div>").append(newFace);
                $('#facesContainer').append(faceDiv);
                index++;
            }

            $('.bigLogo a').bind("click",function(){
                $('#faceChosen').modal();
            });
        });
    </script>
</head>

<body class="allBackground">
<div class="login">
    <div class="clientForm">
        <form>
            姓名：<input type="text" id="inputName"><br>
            密码：<input type="password" id="password1"><br>
            密码：<input type="password" id="password2"><br>
            <span class="warning">您两次输入的密码不一致！</span><br>
            <input type="button" class="btn" id="confirmShow" value="确定"><a href="/" class="btn">返回</a>
        </form>

        <form action="/clientCreate" method="get" class="hiddenForm">
            <input type="text" name="name"><input type="password" name="password"><input type="submit" id="confirmHidden">
        </form>

    </div>
    <div class="bigLogo">
        <img src="/resources/img/zergIcon.png">
        <a class="btn">选择头像</a>
    </div>
    <c:import url="/WEB-INF/views/newClient/facesLightbox.jsp"></c:import>
</div>
</body>
</html>