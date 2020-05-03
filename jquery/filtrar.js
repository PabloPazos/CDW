$(document).ready(function(){

    //Selecciona la primer caja
    // $('.caja').first().css({
    //     background: '#000'
    // });

    //Selecciona la última caja
    // $('.caja').last().css({
    //     background: '#000'
    // });

    //Selecciona la posición del parámetro como un array
    // $('.caja').eq(2).css({
    //     background: '#000'
    // });

    //Seleccionar la  o las que tengan un parámetro particular, como id
    // $('.caja').filter('#segunda').css({
    //     background: '#f9a03f'
    // });

    //Seleccionar todos los elementos menos uno con un parámetro
    $('.caja').not('#segunda').css({
        background: '#f9a03f'
    });

});