$(document).ready(function(){
  $('.modal').modal();
}); 

/** función que hace que despues de que se vea el splash redireccione al index.html */
function load(){
  var url = 'index.html';
  /*splash*/
  setTimeout(function () {
    $('.splash').fadeOut(500);
  }, 3000);
  setTimeout(function () {
    $(location).attr('href', 'index.html').fadeIn(500)
  }, 3000);
}