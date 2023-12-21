// Función que devuelve el valor de la propiedad "nombre"
function obtenerNombre(objeto) {
    return objeto.nombre;
  }
  
  // Función que actualiza el valor de la propiedad "edad"
  function actualizarEdad(objeto, nuevaEdad) {
    objeto.edad = nuevaEdad;
  }
  
  // Función que agrega una nueva propiedad con un valor inicial de null
  function agregarNuevaPropiedad(objeto, nombrePropiedad) {
    objeto[nombrePropiedad] = null;
  }
  
  // Función que elimina una propiedad del objeto
  function eliminarPropiedad(objeto, nombrePropiedad) {
    delete objeto[nombrePropiedad];
  }
  
  // Función que devuelve la cantidad de propiedades del objeto
  function cantidadDePropiedades(objeto) {
    return Object.keys(objeto).length;
  }
  
  // Ejemplo de uso:
  const miObjeto = { nombre: "Ejemplo", edad: 25 };
  
  console.log("Nombre:", obtenerNombre(miObjeto));
  
  actualizarEdad(miObjeto, 30);
  console.log("Edad actualizada:", miObjeto.edad);
  
  agregarNuevaPropiedad(miObjeto, "ciudad");
  console.log("Objeto con nueva propiedad:", miObjeto);
  
  eliminarPropiedad(miObjeto, "edad");
  console.log("Objeto sin la propiedad 'edad':", miObjeto);
  
  console.log("Cantidad de propiedades:", cantidadDePropiedades(miObjeto));