$(document).ready(function() {



  $('#enviar').submit(function(e) {
    let nombre = $("#ingresa-nombre").val(); /*Asigna variable al campo del nombre*/
    let correo = $("#ingresa-mail-2").val();  /*Asigna variable al campo del correo*/
    $("#nombre").text("" + nombre);  /*Muestra el valor guardado de la variable en el texto con id nombre*/
    $("#correo").text("" + correo); /*Muestra el valor guardado de la variable en el texto con id correo*/
    $(".pantallaMensaje").slideDown();
    e.preventDefault();
  });


  $("#cerrar2").click(function(){
    $(".pantallaMensaje").slideUp(); /*cierra el div del msj*/
    $("#ingresa-mail-2").val("");  /*limpia los datos ingresado en el campo del mail*/
    $("#ingresa-nombre").val(""); /*limpia los datos ingresado en el campo del nombre*/
  });

});
