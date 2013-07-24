function mouseOver() {
    $(this).addClass('mouseOver');
    $('.deleteButton', this).show();
}

function mouseOut() {
    $('.oneContent').removeClass('mouseOver');
    $('.deleteButton').hide();
}

function clickDelete() {
    $('#myModal').modal('show');
    deleteContent = $(this).parent().attr("id");
}