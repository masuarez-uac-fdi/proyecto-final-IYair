<?php
    $name = $_POST['name'];
    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];
    $comentarios = $_POST['comentarios'];

    $contenido = '
    Nombre = $name
    Correo = $correo
    Telefono = $telefono
    Comentarios = $comentarios';
    $archivo = fopen('datos/$nombre.txt','w');
    fwrite($archivo,$contenido)
?>