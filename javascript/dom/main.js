var cajas = document.getElementsByTagName('div');
// var cajas = document.getElementsByClassName('caja');
var primeraCaja = document.getElementById('primeraCaja');

// primeraCaja.textContent = 'Hola mundo';
// primeraCaja.innerHTML = '<u>Hola</u>';


//-----Creando nodos.
// 1.- Crear elemento.
var caja = document.createElement('div');
// 2.- Crear un nodo de texto.
var contenido = document.createTextNode('Hola mundo');
// 3.- Añadir el nodo de texto al elemento.
caja.appendChild(contenido);
// 4.- Agregar atributos a la caja.
// caja.setAttribute('class', 'caja naranja');

// 5.- Agregar el documento al elemento.
var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);

//-----Modificando la clase o id de un elemento
caja.id = 'primera';
caja.className = 'caja naranja';

//-----Conociendo el elemento padre
// cajas[0].parentNode; --> si este comando lo uso en consola me indica el elemento padre. En este caso section.
var padre = cajas[0].parentNode;

// padre.insertBefore(caja, primeraCaja); //-> mueve la caja creada arriba de la posición 0
// padre.insertBefore(caja, cajas[2]); //-> mueve la caja creada en la posición 2

padre.replaceChild(caja, cajas[0]); //-> reemplaza una caja por otra

padre.removeChild(cajas[3]);