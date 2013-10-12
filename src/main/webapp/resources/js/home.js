var deleteContent = "";
var editContent = {};
var currentResponseDiv = null;


var submitHandler = function () {
    $('#confirm').bind("click", function () {
        $('.editContent .rightArea img').show();
        var content = $('#weibo').sceditor('instance').val();
        $('#newContent').val(content);
        $('#weibo').sceditor('instance').val("");
        $('#contentSubmit').click();
    });
    $('.editContent .rightArea img').hide();
}
var mouseHandler = function () {
    $('#weiboContent').on('mouseover', '.oneContent',function () {
        $(this).addClass('mouseOver');
        if ($('span', this).html() === $('#currentUserName').html()) {
            $('.deleteButton', this).show();
        }
        $('.writeButton', this).show();
    }).on('mouseout', '.oneContent', function () {
            $('.oneContent.mouseOver').removeClass('mouseOver');
            $('.deleteButton').hide();
            $('.writeButton').hide();
        });
}
$(function () {
    $('.editContent .rightArea img').hide();

    $('.navigator').on('mouseover', 'div', function () {
        $(this).addClass('mouseOver');
    }).on('mouseout', 'div', function () {
        $(this).removeClass('mouseOver');
    }).on('click', 'div', function () {
        $('.editContent .rightArea img').show();
        $('.navigator div').removeClass('mouseDone');
        $(this).addClass('mouseDone');
        $('#weiboContent').html("");
        var history = $(this).attr("divName");
        getHistory(history);
    })

    $('#weiboContent').on('click', '.deleteButton', function () {
        $('#deleteModal').modal('show');
        deleteContent = $(this).parent().attr("id");
    }).on('click', '.writeButton', function () {
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
        $('.editContent .rightArea img').show();
        $('#editModal').modal('hide');
        editContent.content = $('#reply').val();
        $('#reply').val("");
        $.getJSON("/addReply?reply=" + editContent.content + "&id=" + editContent.contentID, function (newResponseContent) {
            var response = newResponseContent["response"];
            renderResponse(currentResponseDiv, response);
            $('.editContent .rightArea img').hide();
        })
    });

    $('#searchBtn').bind("click",function(){
        $('.editContent .rightArea img').show();
        $('#weiboContent').html("");
        var content = $('#searchContent').val();
        $.getJSON("/json/search?content="+content, function (allData) {
            alert(allData);
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
                for (responseIndex in responses) {
                    var response = responses[responseIndex];
                    if (typeof (response !== "undefined")) {
                        renderResponse(chart, response);
                    }
                }
                $('#weiboContent').prepend(chart);
                $('.editContent .rightArea img').hide();
            }
        });
    })

    $('.miniLogo').bind("click", function () {
        $('#faceChosen').modal();
    });

    var index = 1;
    while (index < 21) {
        var faceUrl = '/resources/img/Face-Icons/Males/' + index + '.png';
        var newFace = $("<img>").attr("src", faceUrl);
        var faceDiv = $("<div class='oneFace'><div>").append(newFace);
        $('#facesContainer').append(faceDiv);
        index++;
    }
    ;

    $('#faceChosen').on("click", "div.oneFace", function () {
        var src = $('img', this).attr("src");
        $('#faceChosen').modal('hide');
        $.getJSON("/json/changeFace?src=" + src, function (allData) {
            $('.miniLogo img').attr("src", allData["src"]);
        });
    })

    $('.navigator div[divName="My"]').click();
//    getAllHistory();
    initialUserInfo();
    submitHandler();
    mouseHandler();
});

var renderResponse = function (content, response) {
    var newResponserSpan = $('<span></span>').html("-" + response["userName"]);
    var newResponseDate = $('<p></p>').html(response["date"]).append(newResponserSpan);
    var newResponseDiv = $('<div></div>').addClass('responseArea').html(response["content"]).append(newResponseDate);
    content.append(newResponseDiv);
}

var initialUserInfo = function () {
    $.getJSON("/json/currentUserInfo", function (allData) {
        $('#currentUserName').html(allData["userName"]);
        $('.header .miniLogo img').attr("src", allData["userFaceUrl"]);
    });
}

var getHistory = function (user) {
    $.getJSON("/json/get" + user + "History", function (allData) {
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
            for (responseIndex in responses) {
                var response = responses[responseIndex];
                if (typeof (response !== "undefined")) {
                    renderResponse(chart, response);
                }
            }
            $('#weiboContent').prepend(chart);
            $('.editContent .rightArea img').hide();
        }
    });
}

