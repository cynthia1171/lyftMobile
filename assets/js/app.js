$(document).ready(function(){
  $('.modal').modal();

  $('select').material_select();

  $('input#telephone').characterCounter();
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

/**funcion para validar si los caracteres del input contiene 10 digitos */
$('#telephone').keyup(function () {
  var num = $('#telephone').val();
  if (num.length == 10){
    $('#next').removeClass('disabled');
  } else if (num.length > 10){
    $('#next').addClass('disabled');
  } else if (num.length < 10) {
    $('#next').addClass('disabled');
  }
});

/**generar numero random */
$('#next').click(function(){
  var x = Math.floor((Math.random() * 1000) + 0);
  document.getElementById("num").innerHTML = x;
}); 
  