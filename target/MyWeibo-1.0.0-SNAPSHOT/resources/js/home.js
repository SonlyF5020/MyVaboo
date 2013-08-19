var deleteContent = "";
var editContent = {};
var currentResponseDiv = null;

var MouseOutHandler = function () {
    $('#weiboContent').on('mouseout', '.oneContent', function () {
        $('.oneContent.mouseOver').removeClass('mouseOver');
        $('.deleteButton').hide();
        $('.writeButton').hide();
    });
}

var submitHandler = function () {
    $('#confirm').bind("click", function () {
        $('#newContent').val($('#weibo').val());
        $('#weibo').val("");
        $('#contentSubmit').click();
    });
}
var mouseOverHandler = function () {
    $('#weiboContent').on('mouseover', '.oneContent', function () {
        $(this).addClass('mouseOver');
        if ($('span', this).html() === $('#currentUserName').html()) {
            $('.deleteButton', this).show();
        }
        $('.writeButton', this).show();
    });
}
$(function () {

    $('.navigator').on('mouseover','div',function(){
        $(this).addClass('mouseOver');
    });

    $('.navigator').on('mouseout','div',function(){
        $(this).removeClass('mouseOver');
    });


    $('.navigator').on('click','div',function(){
        $('.navigator div').removeClass('mouseDone');
        $(this).addClass('mouseDone');
        $('#weiboContent').html("");
        var history = $(this).attr("divName");
        getHistory(history);
    })

    $('#weiboContent').on('click', '.deleteButton', function () {
        $('#deleteModal').modal('show');
        deleteContent = $(this).parent().attr("id");
    });

    $('#weiboContent').on('click', '.writeButton', function () {
        $('#ownerName').html($('span', $(this).parent()).html());
        editContent.contentID = $(this).parent().attr("id");
        currentResponseDiv = $(this).parent();
        $('#editModal').modal('show');
    });

    $('#deleteModal').on('click', '#deleteSure', function () {
        document.location.href = '/delete?deleteIndex=' + deleteContent;
        $('#deleteModal').modal('hide');
    });

    $('#editModal').on('click', '#editSure', function () {
        $('#editModal').modal('hide');
        editContent.content = $('#reply').val();
        $('#reply').val("");
        $.getJSON("/addReply?reply="+editContent.content+"&id="+editContent.contentID,function(newResponseContent){
            var response = newResponseContent["response"];
            renderResponse(currentResponseDiv,response);
        })
    });

    $('.navigator div[divName="My"]').click();
//    getAllHistory();
    getUserName();
    submitHandler();
    mouseOverHandler();
    MouseOutHandler();
});

var renderResponse = function(content,response){
    var newResponserSpan = $('<span></span>').html("-"+response["userName"]);
    var newResponseDate = $('<p></p>').html(response["date"]).append(newResponserSpan);
    var newResponseDiv = $('<div></div>').addClass('responseArea').html(response["content"]).append(newResponseDate);
    content.append(newResponseDiv);
}

var getUserName = function () {
    $.getJSON("/json/currentUserName", function (allData) {
        $('#currentUserName').html(allData["userName"]);
    });
}

var getAllHistory = function () {
    getHistory("All");
}

var getHistory = function(user){
    $.getJSON("/json/get"+user+"History", function (allData) {
        var index;
        for (index in allData) {
            var deleteButton = $('<div></div>').addClass('deleteButton');
            var writeButton = $('<div></div>').addClass('writeButton');

            var contentUser = $('<span></span>').html(allData[index]["userName"]);
            var contentDate = $('<p></p>').html(allData[index]["date"]).append(contentUser);
            var chart = $('<div></div>').attr('id', index).attr('class', 'oneContent')
                .html(allData[index]["content"]).append(contentDate)
                .append(deleteButton).append(writeButton);
            var responses = allData[index]["responses"];
            var responseIndex;
            for(responseIndex in responses){
                var response = responses[responseIndex];
                if(typeof (response!=="undefined")){
                    renderResponse(chart,response);
                }
            }
            $('#weiboContent').prepend(chart);
        }
    });
}

