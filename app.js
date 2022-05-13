// -----------------------------------------------------------
// Importamos el modulo
let archivoTareas = require('./funcionesDeTareas');
let tareas = archivoTareas.leer();
let accion = process.argv[2];
// DESCRIPCION
// podemos capturar la palabra listar, de la siguiente manera:
// palabra node en el array ocupará la posición [ 0 ]
// app.js, ocupará la posición [ 1 ]
// el argumento listar, ocupa la posición [ 2 ]
// -----------------------------------------------------------

let msgCompartido = 'Las acciones disponibles son: listar | crear ... | filtrar ...\n';
    msgCompartido += 'OBS crear: indique el titulo de la tarea nueva\n';
    msgCompartido += 'OBS filtrar: indique el estado, ej (1) "pendiente" / (2) "en proceso" / (3) "terminada"\n';
    msgCompartido += '------------------------------------------\n';

// SWITCH
switch (accion) {

    // Si se escribe la palabra “listar” después del nombre del archivo,
    case 'listar':
        //console.log(tareas);
        console.log('------------------------------------------');
        console.log('Listado de tareas');
        console.log('------------------------------------------');
        
        // FOR EACH (ARROW) ////////////////////////////
        tareas.forEach( (tarea,indice) => console.log( indice + 1 + '. ' + tarea.titulo + ' - ' + tarea.estado ) );


        // FOR OF ////////////////////////////
        /*
        let i = 1;
        for (let tarea of tareas) 
        {
            console.log( i + '. ' + tarea.titulo + ' - ' + tarea.estado);
            i++
        }
        */
        
        // FOR EACH (TRADICIONAL) ////////////////////////////
        /*
        tareas.forEach( (elemento) => {
            console.log( i + '. ' + elemento.titulo + ' - ' + elemento.estado);
            i++
        });
        */
       
        break;


    case 'crear':
        let titulo = process.argv;
        titulo.shift(); // elimino por izq... node
        titulo.shift(); // elimino por izq... app.js
        titulo.shift(); // elimino por izq... crear
        titulo = titulo.join(' '); // union de una sola cadena
        console.log( titulo );
        // agregamos al array
        tareas.push( {titulo: titulo, estado: 'pendiente' } );
        console.log( tareas );
        archivoTareas.escribirJSON(tareas);
        /*
        console.log('------------------------------------------');
        console.log('Atención - Tienes que pasarme una acción.');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------------');
        */
        break;

    // FILTRAR ////////////////////////////
    case 'filtrar':

        let filtrarPorEstado = process.argv[3];
        let estado = ""
        if ( filtrarPorEstado == 1 ){ estado = "pendiente" }
        else if ( filtrarPorEstado == 2 ){ estado = "en proceso" }
        else if ( filtrarPorEstado == 3 ){ estado = "terminada" }
        else { estado = "..." }


        console.log('------------------------------------------');
        console.log('Listado de tareas "' + estado + '"' );
        console.log('------------------------------------------');


        let tareasFiltradas = tareas.filter( tarea => { 
            return tarea.estado == estado
        })

        if( estado == "..." ){
            console.log( 'Ese filtro no existe, las opciones son... pendiente / en proceso / terminada' );
        } 
        else if ( tareasFiltradas.length === 0 ){
            console.log( '( Sin tareas ' + estado + ' )' );

        }
        else {
            // FOR EACH (ARROW) ////////////////////////////
            tareasFiltradas.forEach( (tarea,indice) => console.log( indice + 1 + '. ' + tarea.titulo + ' - ' + tarea.estado ) );
        }
        
          
        break;

    // Si NO se escribe ninguna palabra después del nombre del archivo
    case undefined:
        console.log('------------------------------------------');
        console.log('Atención - Tienes que pasarme una acción.');
        console.log(msgCompartido);
        // -----------------------------------------------------
        break;
    
    // Si se llegase a pasar cualquier otro texto que no sea la palabra listar
    default:
        console.log('------------------------------------------');
        console.log('No entiendo que quieres hacer.');
        console.log(msgCompartido);
        // -----------------------------------------------------

        break;
    
}


