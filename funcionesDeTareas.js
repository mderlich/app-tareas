// MICRO DESAFIO 1
// //////////////////////////////////////////////////
// módulo nativo lo llamamos
// módulo nativo de NodeJs File System - FS
// https://nodejs.org/dist/latest-v17.x/docs/api/fs.html
const fs = require('fs');
const datos = fs.readFileSync('./tareas.json', 'utf-8');
const tareas = JSON.parse(datos);

// Mostrar el listado de tareas existente por la terminal
// console.log(tareas);


// MICRO DESAFIO 2
// //////////////////////////////////////////////////
// https://nodejs-es.github.io/api/process.html#process_es_process

// podemos capturar la palabra listar, de la siguiente manera:
// palabra node en el array ocupará la posición [ 0 ]
// app.js, ocupará la posición [ 1 ]
// el argumento listar, ocupa la posición [ 2 ]

let accion = process.argv[2];

switch (accion) {

    // Si se escribe la palabra “listar” después del nombre del archivo,
    case 'listar':
        //console.log(tareas);
        console.log('------------------------------------------');
        console.log('Listado de tareas');
        console.log('------------------------------------------');
        
        // for hallada en Stack Overflow
        let i = 1;


        for (let tarea of tareas) 
        {
            console.log( i + '. ' + tarea.titulo + ' - ' + tarea.estado);
            i++
        }
        
        /*
        tareas.forEach( (elemento) => {
            console.log( i + '. ' + elemento.titulo + ' - ' + elemento.estado);
            i++
        });
        */
       
        break;

    // Si NO se escribe ninguna palabra después del nombre del archivo
    case undefined:
        console.log('------------------------------------------');
        console.log('Atención - Tienes que pasarme una acción.');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------------');
        break;
    
    // Si se llegase a pasar cualquier otro texto que no sea la palabra listar
    default:
        console.log('------------------------------------------');
        console.log('No entiendo que quieres hacer.');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------------');
        break;
    
}


module.exports = {
	accion
}