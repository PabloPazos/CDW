$(document).ready(function(){

    $('#ejecutar').on('click', function(){
        $('.caja').slideUp(1000, function(){
            $(this).slideDown(1000);
        });
    });

    // $('#ejecutar').on('click', function(){
    //     $('.caja').slideUp(300);
    //     alert('Animación iniciada');
    //     $('.caja').slideDown(300);
    // });

});