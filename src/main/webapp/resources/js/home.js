var deleteContent = "";
var editContent = {};

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
    getHistory();
    getUserName();
    submitHandler();
    mouseOverHandler();
    MouseOutHandler();

    $('#weiboContent').on('click', '.deleteButton', function () {
        $('#deleteModal').modal('show');
        deleteContent = $(this).parent().attr("id");
    });

    $('#weiboContent').on('click', '.writeButton', function () {
        $('#ownerName').html($('span', $(this).parent()).html());
        editContent.contentID = $(this).parent().attr("id");
        $('#editModal').modal('show');
    });

    $('#deleteModal').on('click', '#deleteSure', function () {
        document.location.href = '/delete?deleteIndex=' + deleteContent;
        $('#deleteModal').modal('hide');
    });

    $('#editModal').on('click', '#editSure', function () {
        $('#editModal').modal('hide');
        editContent.content = $('#reply').val();
        document.location.href='/addReply?reply='+editContent.content+'&id='+editContent.contentID;
    });
});

var getUserName = function () {
    $.getJSON("/json/currentUserName", function (allData) {
        $('#currentUserName').html(allData["userName"]);
    });
}

var getHistory = function () {
    $.getJSON("/json/userHistory", function (allData) {
        var index;
        for (index in allData) {
            var deleteButton = $('<div></div>').addClass('deleteButton');
            var writeButton = $('<div></div>').addClass('writeButton');
            var chart = $('<div></div>').attr('id', index).attr('class', 'oneContent')
                .html(allData[index]["content"] + "<br><hr>" + allData[index]["date"] + "(<span>" + allData[index]["userName"] + "</span>)")
                .append(deleteButton).append(writeButton);
            $('#weiboContent').prepend(chart);
        }
    });
}

