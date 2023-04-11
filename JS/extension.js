class Persona {
    constructo(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() { //saludar es un método
        console.log('Hola mi nombre es ' + this.nombre + 'y mi edad es ' + this. edad);
    }
}

// super hereda las clases 

class Programador extends Persona {
    constructor(nombre, edad, añosDeExperiencia) {
       super(nombre, edad);
       this.añosDeExperiencia = añosDeExperiencia;
    }
    codear() {
       console.log(
          'Soy ' +
             this.nombre +
             ' . Codeo desde hace  ' +
             this.añosDeExperiencia +
             ' años'
       );
    }
 }
 
 let martin = new Persona('Martín', 26);
 let programador = new Programador('María', 37, 4);
 martin.saludar();
 programador.codear();