<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" contentType="text/html; charset=GB2312"%>
<link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet">


<html>
<head>
    <title>welcome</title>
</head>

<body>
    <div class="body">
        <form action="/home" method="get">
           ������<input type="text" name="name"><br>
           ���룺<input type="password" name="password">
            <input type="submit" value="��½">
        </form>
    </div>
</body>
</html>