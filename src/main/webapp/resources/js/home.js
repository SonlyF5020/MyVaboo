var deleteContent = "";

$(function () {
    getHistory();
    getUserName();

    $('#confirm').bind("click", function () {
        var year = new Date().getYear().toString().substring(1, 3);
        var month = (new Date().getMonth() + 1).toString();
        var date = new Date().getDate().toString();
        var dateString = "---20" + year + "." + month + "." + date;
        $('#newContent').val($('#weibo').val());
        $('#newContentDate').val(dateString);
        $('#weibo').val("");
        $('#contentSubmit').click();
    });

    $('#weiboContent').on('mouseover','.oneContent',function(){
        $(this).addClass('mouseOver');
        if($('span',this).html()===$('#currentUserName').html()){
            $('.deleteButton', this).show();
        }
        $('.writeButton', this).show();
    });

    $('#weiboContent').on('mouseout','.oneContent',function(){
        $('.oneContent.mouseOver').removeClass('mouseOver');
        $('.deleteButton').hide();
        $('.writeButton').hide();
    });

    $('#weiboContent').on('click','.deleteButton',function(){
        $('#myModal').modal('show');
        deleteContent = $(this).parent().attr("id");
    });

    $('#myModal').on('click','#sureButton',function(){
        document.location.href='/delete?deleteIndex='+deleteContent
        $('#myModal').modal('hide');
    });
});

var getUserName = function(){
    $.getJSON("/json/currentUserName",function(allData){
        $('#currentUserName').html(allData["userName"]);
    });
}

var getHistory = function(){
    $.getJSON("/json/userHistory",function(allData){
        var index;
        for(index in allData){
            var deleteButton = $('<div></div>').addClass('deleteButton');
            var writeButton = $('<div></div>').addClass('writeButton');
            var chart = $('<div></div>').attr('id', index).attr('class', 'oneContent')
                .html(allData[index]["content"]+"<br><hr>"+allData[index]["date"]+"(<span>"+allData[index]["userName"]+"</span>)")
                .append(deleteButton).append(writeButton);
            $('#weiboContent').prepend(chart);
        }
    });
}

