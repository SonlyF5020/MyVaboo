<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="true" contentType="text/html; charset=utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet">
<link href="<%=request.getContextPath()%>/resources/css/myStyle.css" rel="stylesheet">

<html>
<head>
    <title>invalidUser</title>
</head>
<body class="allBackground">
<div class="greenBorder">
    <h1>账号申请成功！</h1>
    <h2><c:out value="${content}"></c:out></h2>
</div>
</body>
</html>