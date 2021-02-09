$(function() {
    if (!$.cookie('hideModal')) {
    var delay_popup = 5000;
    setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);
    }
    $.cookie('hideModal', true, {
        expires: 7,
        path: '/'
    });
});