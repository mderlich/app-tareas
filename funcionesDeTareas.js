
const fs = require('fs');


let archivoTareas = {

	// ./tareas.json
    // archivo: './tareas.json',
	// en caso de utilizarlo, se referencia luego asi... 'this.archivo'

    leer: function () {
		let datos = fs.readFileSync('./tareas.json', 'utf-8');
        return JSON.parse(datos);
    },

    escribirJSON: function(array){
        // Para que se guarde legible agregamos... stringify(array, null, 2)
        let datos = JSON.stringify(array, null, 4);
        fs.writeFileSync('./tareas.json', datos);
    },


    

}


module.exports = archivoTareas;