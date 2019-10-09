

function obtenerComentarios () {

  $.getJSON("obtener_comentarios.php", function(result){
    console.log("Json obtenido de obtener comentarios:" );
    console.log(result);

   $.each(result, function(i, field){
      //let tiempo = moment().startOf('day').fromNow( field.fecha_envio );
      let tiempo = moment(field.fecha_envio).fromNow()
      $("#comentarios").append(
         "<i class='far fa-comment-dots'></i>" +  " " +
         "<b>" + field.correo + " comentó "  +  tiempo        +    ":<br> <span id='texto1'><i>\"" + field.comentario + "\"</i></span><br><hr class='style14' >"
         );
    });


    $(".div-shadow").addClass("invisible");

  });
}



function enviarComentario(valorCaja1, valorCaja3){

      var parametros = {
          "correo" : valorCaja1,
          "comentario" : valorCaja3
      };
      $.ajax({
          data:  parametros,
          url:   'enviar.php',
          type:  'post',
          beforeSend: function () {
              console.log("enviando datos");

              $("#mensajeResultado").html("<br><div class='alert alert-info alert-dismissible fade show' role='alert' id='resultado'> </div>");
              $("#resultado").html("Enviando información. Por favor espere...");


          },
          success:  function (response) {

              $("#mensajeResultado").html("<br><div class='alert alert-success alert-dismissible fade show' role='alert' id='resultado'> </div>");
              $("#resultado").html("Su mensaje fue enviado satisfactoriamente. <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>");
          }
      });
      limpiarCampos();
  };


function limpiarCampos() {
 $("#main-contact-form")[0].reset();
}
