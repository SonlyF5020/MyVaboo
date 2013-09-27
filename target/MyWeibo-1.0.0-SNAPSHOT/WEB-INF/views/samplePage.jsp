
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
    <script type="text/javascript" src="/resources/js/jQuery.js"></script>
    <link href="/resources/css/sample.css" rel="stylesheet">
</head>
<body>
<script>
    $(document).ready(function(){
        var x = '<div class="dialog-titlebar">'+
        '<span class="webengage-tlogo"></span>'+
                '<span class="webengage-caption">Telstra 24x7 Chat</span>'+
                '<span title="close" class="webengage-close"></span>'+
                '</div>'+
                '<div class="dialog-content">'+
                '<div class="webengage-banner"></div>'+
                '</div>'+
                '<div class="dialog-buttonpane">'+
                '<div class="dialog-buttonset"></div>'+
        '</div>';
        $('body').append(x);
    });
</script>

</body>
</html>