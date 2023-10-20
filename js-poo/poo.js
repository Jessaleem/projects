function Persona(nombre, edad) {
  //clase
  //Constructor:

  this.nombre = nombre; // Propiedad pública
  this.edad = edad;
  let dni = '12345896'; // propiedad privada, no se puede acceder desde fuera

  //método para acceder a propiedad privada
  this.getDni = function () {
    return dni;
  };

  // método saludar
  this.saludar = function () {
    console.log(
      'Hola, soy ' +
        nombre +
        ' tengo ' +
        edad +
        ' años, mi dni es ' +
        this.getDni()
    );
  };
}

// instancias de clase
let objetoPersona = new Persona('Jessica Martínez', 20);
let objetoPers = new Persona('Lucía Molina', 6);

objetoPersona.saludar();
objetoPers.saludar();
