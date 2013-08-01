<%@ page session="false" contentType="text/html; charset=UTF-8" %>

<div id="editModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
    <div class="modal-header">
        <h3 id="myModalLabel">回复 @<span id="ownerName"></span></h3>
    </div>
    <div class="leftArea">
        <textarea type="text" id="reply" Value="留言内容" class="reply"></textarea>
    </div>
    <div class="modal-footer">
        <button class="redButton btn" data-dismiss="modal" aria-hidden="true">取消</button>
        <button id="editSure" class="btn btn-primary">确定</button>
    </div>
</div>