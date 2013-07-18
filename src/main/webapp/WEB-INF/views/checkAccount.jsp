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
           аеУћЃК<input type="text" name="name"><br>
           УмТыЃК<input type="password" name="password">
            <input type="submit" value="ЕЧТН">
        </form>
    </div>
</body>
</html>