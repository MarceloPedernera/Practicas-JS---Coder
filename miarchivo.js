class registro{

    constructor(nombre, apellido, edad, ciudad) {

            this.nombre = nombre.toUpperCase();
            this.apellido = apellido.toUpperCase();
            this.edad =  parseFloat(edad);
            this.ciudad = ciudad;
            this.email = email;
        }


}

const registro = [];
registros.push(new registro("Marcelo", "pedernera" , 35 , "Buenos Aires"));
registros.push(new registro("German", "ferreyra" , 21 , "Cordoba"));
registros.push(new registro("Cecilia", "Saez" , 32 , "Rosario"));

const registro = ["German", "ferreyra" , 21 , "Cordoba"];
console.log( registro.length );



// Proceso de Seleccion de curso de idiomas 
class seleccion {

    constructor(mes, modalidad, idioma, sede) {

            this.mes = mes;
            this.modalidad = modalidad;
            this.idioma = idioma;
            this.sede = sede;
           
        }
    

}


mes = ["agosto", "septiembre", "octubre", "noviembre", "diciembre"];

idioma = ["ingles", "italiano", "frances", "aleman", "portuges" , "chino", "ruso", "japones"];


sucursal = [ "centro" , "belgrano" , "palermo" , "boedo" , "online"];

cuotas = [1,2,3,4,5,6];

usuario = ["nombre" , "apellido" , "correo" , "telefono"] 




