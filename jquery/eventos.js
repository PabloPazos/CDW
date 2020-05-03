$(document).ready(function(){

    let boton = $('#boton');

    //Callback: función ANÓNIMA que se ejecuta después de que el botón fue clickeado
    // boton.click(function(){
    //     alert('Hola');
    // });

    //Evento que llama a función

    function saludo () {
        alert ('Saludos');
    }

    // boton.click(saludo);

    //Evento que llama a un fallback, es decir, con una función anónima
    // boton.on('mouseenter', function (){
    //     document.body.style.background = '#000';
    // });

    // boton.on('mouseleave', function (){
    //     document.body.style.background = '#fff';
    // });

    //Eliminando eventos
    // boton.on('click', function(){
    //     alert('Saludos');
    //     console.log('Saludos');
    // });

    // $('#desactivar').on('click', function (){
    //     boton.off('click');
    //     console.log('Botón de Ejecutar Desactivado');
    // });

    //Previniendo el comportamiento de lo enlances
    $('a').on('click', function(e){
        e.preventDefault();
        alert('Link');
    });
});