// JavaScript Document
/*$(function() {
	$('body').fadeOut();
});*/
// Get the modal
let modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

let modalUp = document.getElementById('id02');
window.onclick = function(eventUp) {
    if (eventUp.target == modal) {
        modal.style.display = "none";
    }
};







