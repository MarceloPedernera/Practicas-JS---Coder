class Usuario {
    constructor(nombre, apellido, edad, ciudad, email) {

        
    // Conviene seguir usando This o pasar al nuevo metodo? 
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.edad =  parseFloat(edad);
        this.ciudad = ciudad;
        this.email = email;
        this.registrado = false;
    }

 // Esta Parte lo que quiero lograr es que el prompt aparezca al final y chequee si esta OK el mail y mas adelante enviar un mail de confirmacion
    registrar() {
        this.confirmarmail = prompt ("confirme su mail ");
        
        if (this.email === this.confirmarmail);
        this.registrado = true;
    
    }

}
const Usuario1 = new Usuario("Marcelo", "Pedernera", "35", "Buenos Aires" , "ejemplo1@gmail.com");
const Usuario2 = new Usuario("Sofia", "Rocha Jaje", "26", "Buenos Aires" ,"ejemplo2@outllok.com");

// Usuario1 "Marcelo" completaria y seria true, pero no Usuario2

//COMENTARIO PARA EL PROFESOR: Yo digo que Usuario1 Es true, pero como podria saber si completó todos los campos de forma automatica? 

Usuario1.registrar() 

// Muestra por consola los Objetos del constructor "usuarios"
console.log(Usuario1);
console.log(Usuario2);