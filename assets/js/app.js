$(document).ready(function(){
  
}); 

function load(){
  var url = 'index.html';
  /*splash*/
  setTimeout(function () {
    $('.splash').fadeOut(500);
  }, 3000);
  setTimeout(function () {
    $(location).attr('href', 'index.html').fadeIn(500)
  }, 4000);
}