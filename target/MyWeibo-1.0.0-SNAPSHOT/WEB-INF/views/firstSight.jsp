<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>
<head>
    <title></title>
    <link href="<%=request.getContextPath()%>/resources/css/myStyle.css" rel="stylesheet">
    <link href="<%=request.getContextPath()%>/resources/css/bootstrap.css" rel="stylesheet">
    <link href="<%=request.getContextPath()%>/resources/css/bootstrap.min.css" rel="stylesheet">
    <script type="text/javascript" src="/resources/js/jQuery.js"></script>
    <script type="text/javascript" src="/resources/js/bootstrap.js"></script>
    <script type="text/javascript" src="/resources/js/bootstrap.min.js"></script>
</head>
<body>
<header>钟表，可以回到起点，却已不是昨天</header>
<div class="firstSight-body">
    <div class="welcome">
        <div id="myCarousel" class="carousel slide">
            <ol class="carousel-indicators" style="position: absolute">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <!-- Carousel items -->
            <div class="carousel-inner">

                <div class="active item">
                    <img src="/resources/img/university/yiheyuan.jpg">

                    <div class="carousel-caption">
                        <h4>占红来的青葱岁月</h4>
                        <ul class="listCustomer">
                            <li>春湖落日水拖蓝</li>
                            <li>天影楼台上下涵</li>
                            <li>十里青山行画里</li>
                            <li>双飞百鸟似江南</li>
                        </ul>
                    </div>
                </div>

                <div class="item">
                    <img src="/resources/img/university/guys.jpeg">

                    <div class="carousel-caption">
                        <h4>三剑客</h4>

                        <p>明天你是否会想起
                            昨天你写的日记
                            明天你是否还惦记
                            曾经最爱哭的你</p>
                    </div>
                </div>
                <div class="item">
                    <img src="/resources/img/university/friends.jpeg">

                    <div class="carousel-caption">
                        <h4>我们都年轻</h4>
                    </div>
                </div>
            </div>
            <!-- Carousel nav -->
            <a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
            <a class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>
        </div>
    </div>
    <div class="loginLink">
        <div class="loginLink-login"><a href="/login">登录</a></div>
        <div class="loginLink-login"><a href="/register">注册</a></div>
    </div>

</div>

<link rel="stylesheet" type="text/css" href="/resources/css/bootstrap-wysihtml5-0.0.2.css">
<script src="/resources/js/bootstrap-wysihtml5-0.0.2.js"></script>
<script src="/resources/js/wysihtml5-0.3.0_rc2.js"></script>

<textarea id="some-textarea" placeholder="Enter text ..."></textarea>
<script type="text/javascript">
    $(function(){
        $('#some-textarea').wysihtml5();
    })
</script>


</body>
</html>