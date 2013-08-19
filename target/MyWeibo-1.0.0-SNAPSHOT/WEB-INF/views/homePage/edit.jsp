<%@ page session="false" contentType="text/html; charset=UTF-8" %>

<div id="editContent" class="editContent">
    <div class="leftArea">
        <textarea type="text" id="weibo" Value="Say something?" class="weibo"></textarea>
    </div>
    <div class="rightArea">
        <button id="confirm" class="btn">提交</button>
    </div>
</div>

<form action="/submitContent" class="hiddenForm" method="post">
    <input type="text" id="newContent" name="newContent">
    <input type="submit" id="contentSubmit">
</form>