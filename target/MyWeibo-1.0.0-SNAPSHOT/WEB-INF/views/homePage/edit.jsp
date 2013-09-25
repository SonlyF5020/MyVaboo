<%@ page session="true" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<div id="editContent" class="editContent">
    <div class="leftArea">
        <textarea type="text" id="weibo" Value="Say something?" class="weibo"></textarea>
    </div>
    <div class="rightArea">
        <button id="confirm" class="btn">提交</button>
        <img src="/resources/img/circleLoading.gif" style="height: 80px;width: 80px;display:block;margin: auto">
    </div>
</div>

<form action="/submitContent" class="hiddenForm" method="post">
    <input type="text" id="newContent" name="newContent">
    <input type="submit" id="contentSubmit">
</form>