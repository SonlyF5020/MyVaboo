<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" contentType="text/html; charset=GB2312" %>
<link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet">
<link href="<%=request.getContextPath()%>/resources/css/myStyle.css" rel="stylesheet">


<html>
<head>
    <title>welcome</title>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
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
        });
    </script>
</head>

<body class="allBackground">
<div class="login">
    <div class="clientForm">
        <form>
            ������<input type="text" id="inputName"><br>
            ���룺<input type="password" id="password1"><br>
            ���룺<input type="password" id="password2"><br>
            <span class="warning">��������������벻һ�£�</span><br>
            <input type="button" class="btn" id="confirmShow" value="ȷ��"><a href="/" class="btn">����</a>
        </form>

        <form action="/clientCreate" method="get" class="hiddenForm">
            <input type="text" name="name"><input type="password" name="password"><input type="submit" id="confirmHidden">
        </form>

    </div>
    <div class="bigLogo">
        <img src="/resources/img/zergIcon.png">
    </div>
</div>
</body>
</html>