$(document).ready(function () {
    console.log('jQuery esta trabajando');
    $('#formulario').submit(function (e) {
        const postData = {
            name: $('#txtNombre').val(),
            correo: $('#txtCorreo').val(),
            telefono: $('#txtTelefono').val(),
            comentarios: $('#txtComentarios').val()
        };
        $.post('Envio.php', postData, function(response){
            console.log(response);
        });
        e.preventDefault();
    });
});