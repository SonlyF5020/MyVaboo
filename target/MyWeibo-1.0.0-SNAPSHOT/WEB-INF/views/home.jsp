<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>

<html>
<head>
    <title>My Weibo</title>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <link href="<%=request.getContextPath()%>/resources/css/myStyle.css" rel="stylesheet">
</head>
<body>

<h1>This is My Weibo</h1>
    <div id="editContent">
        <input type = "text" name="weiboContent" Value="Say something?"></input>
        <button id = "confirm"></button>
    </div>
</body>
</html>