<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="true" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet">
<link href="<%=request.getContextPath()%>/resources/css/myStyle.css" rel="stylesheet">


<html>
<head>
    <title>welcome</title>
    <script type="text/javascript" src="/resources/js/jQuery.js"></script>
    <script type="text/javascript" src="/resources/js/bootstrap.js"></script>

    <script>
        $(document).ready(function(){
            $('#confirmShow').bind("click",function(){
                if($('#password1').val() == $('#password2').val()){
                    $(".hiddenForm>[name='name']").val($('#inputName').val());
                    $(".hiddenForm>[name='password']").val($('#password1').val());
                    $(".hiddenForm>[name='emailAddress']").val($('#emailAddress').val());
                    $("#confirmHidden").click();
                }
                else{
                    $(".warning").show();
                }
            });
            var index = 1;
            while(index<21){
                var faceUrl = '/resources/img/Face-Icons/Males/'+index+'.png';
                var newFace = $("<img>").attr("src",faceUrl);
                var faceDiv = $("<div class='oneFace'><div>").append(newFace);
                $('#facesContainer').append(faceDiv);
                index++;
            }

            $('#faceChosen').on("click","div.oneFace",function(){
                var src = $('img',this).attr("src");
                $('.hiddenForm input[name="faceUrl"]').val(src);
                $('#faceChosen').modal('hide');
                $('.login .bigLogo img').attr("src",src);
            })


            $('.bigLogo a').bind("click",function(){
                $('#faceChosen').modal();
            });
        });
    </script>
</head>

<body class="allBackground">
<div class="login">
    <div class="clientForm">
        <form id="registerForm">
            姓名：<input type="text" id="inputName" required><br>
            密码：<input type="password" id="password1" minlength=6 required><br>
            密码：<input type="password" id="password2"><br>
            邮箱：<input type="email" id="emailAddress" required>
            <span class="warning"><br>您两次输入的密码不一致！</span><br>
            <input type="button" class="btn" id="confirmShow" value="确定"><a href="/logout" class="btn">返回</a>
        </form>

        <form action="/clientCreate" method="get" class="hiddenForm">
            <input type="text" name="name">
            <input type="password" name="password">
            <input type="text" name="faceUrl">
            <input type="text" name="emailAddress">
            <input type="submit" id="confirmHidden">
        </form>
    </div>
    <div class="bigLogo">
        <img src="/resources/img/zergIcon.png">
        <a class="btn">选择头像</a>
    </div>
    <jsp:include page="/WEB-INF/views/modal/facesLightbox.jsp"></jsp:include>
    <script src="/resources/js/jquery.validate.js"></script>
    <script>
        $('#registerForm').validate();
    </script>
</div>
</body>
</html>