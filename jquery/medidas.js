$(document).ready(function() {

    let titulo = $('#titulo');
    let info = $('#info');

    // console.log(titulo.with());

    //Calcula el ancho del elemento.
    info.append('Ancho: ' + titulo.width() + '  <br />');

    //Calcula el ancho del elemento + el padding.
    info.append('Ancho interno: ' + titulo.innerWidth() + '  <br />');

    //Calcula el ancho del elemento + el padding + el border.
    info.append('Ancho Externo: ' + titulo.outerWidth() + '  <br />');

    //Calcula el ancho del elemento + el padding + el border + el margin.
    info.append('Ancho Externo: ' + titulo.outerWidth(true) + '  <br />');

    //Calcula el alto del elemento.
    info.append('Alto : ' + titulo.height() + '<br/>');

    //Calcula el alto del elemento + el padding.
    info.append('Alto Interno: ' + titulo.innerHeight() + '<br />');

    //Calcula el alto del elemento + el padding.
    info.append('Alto Externo: ' + titulo.outerHeight() + '<br />');

    //Calcula el alto del elemento + el padding + el margin.
    info.append('Alto Externo: ' + titulo.outerHeight(true) + '<br />');

});