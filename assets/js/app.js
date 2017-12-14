$(document).ready(function(){
  $('.modal').modal();

  $('select').material_select();

  $('input#telephone').characterCounter();
}); 

/** función que hace que despues de que se vea el splash redireccione al index.html */
function load(){
  setTimeout(function () {
    $('.splash').fadeOut(500);
  }, 3000);
  setTimeout(function () {
    $(location).attr('href', 'principal.html').fadeIn(500)
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
  
/**funcion para validar si los caracteres del input contiene 3 digitos */
$('#cod').keyup(function () {
  var num = $('#cod').val();
  if (num.length == 3) {
    $('#resend').removeClass('disabled');
  } else if (num.length > 3) {
    $('#resend').addClass('disabled');
  } else if (num.length < 3) {
    $('#resend').addClass('disabled');
  }
});

/**funcion para habilitar y deshabilitar boton de inicio de sesion */
$('#email').keyup(function(){
  var first = $('#first_name').val();
  var last = $('#last_name').val();
  var pass = $('#email').val();
  if(first.length > 0 && last.length > 0 && pass.length > 0){
    $('#enviar').removeClass('disabled');
    $('#enviar').addClass('enabled');
    
  }
});
