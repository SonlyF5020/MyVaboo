<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="true" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>
<head>
    <title class="title">My Weibo</title>
    <script type="text/javascript" src="/resources/js/jQuery.js"></script>
    <link href="<%=request.getContextPath()%>/resources/css/myStyle.css" rel="stylesheet">
    <link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet">
    <script type="text/javascript" src="/resources/js/bootstrap.js"></script>
    <script type="text/javascript" src="/resources/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/resources/js/home.js"></script>
</head>

<body class="allBackground">
<div class="body">
    <c:import url="/WEB-INF/views/homePage/head.jsp"></c:import>
    <br>
    <hr>
    <div class="default"><h1>留下你的足迹</h1>
        <c:import url="/WEB-INF/views/homePage/navigator.jsp"></c:import>
        <div id="weiboContent" class="weiboContent"></div>
        <hr>
        <jsp:include page="modal/deleteModal.jsp"></jsp:include>
        <jsp:include page="modal/editModal.jsp"></jsp:include>
        <c:import url="/WEB-INF/views/homePage/edit.jsp"></c:import>
    </div>
    <jsp:include page="/WEB-INF/views/modal/facesLightbox.jsp"></jsp:include>
</div>
</body>
</html>