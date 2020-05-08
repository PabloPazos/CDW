$(document).ready(function() {
    $('#boton').on('click', function() {
        //Agregar clase
        // $(this).addClass('naranja');
        //Quitar clase
        // $(this).removeClass('boton');
        //Alternar.
        // $(this).toggleClass('naranja');
        //Agregar características de css. No es la mejor práctica.
        $(this).css({
            'height': '100px',
            'width': '100 px'
        });
    });
});