//Definición Clases (Propietario, Animal y Mascota).

class Propietario {

    #nombre
    #direccion
    #telefono

    constructor(nombre, direccion, telefono) {
        this.#nombre = nombre;
        this.#direccion = direccion;
        this.#telefono = telefono;
    }

    // Getters
    get nombre() {
        return this.#nombre;
    }

    get direccion() {
        return this.#direccion;
    }

    get telefono() {
        return this.#telefono;
    }

    // Setters
    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    set direccion(nuevaDireccion) {
        this.#direccion = nuevaDireccion;
    }

    set telefono(nuevoTelefono) {
        this.#telefono = nuevoTelefono;
    }

    // Método
    datosPropietario() {
        return `El nombre del dueño es: <strong>${this.nombre}</strong>. El domicilio es: <strong>${this.direccion}</strong>, y el número de teléfono de contacto es: <strong>${this.telefono}</strong>`
    }
}

class Animal extends Propietario {

    #tipo

    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this.#tipo = tipo;
    }

    //Getter
    get tipo() {
        return this.#tipo;
    }

    //Setter
    set tipo(nuevoTipo) {
        this.#tipo = nuevoTipo;

    }

}

class Mascota extends Animal {

    #nombreMascota
    #enfermedad

    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this.#nombreMascota = nombreMascota;
        this.#enfermedad = enfermedad;
    }

    //Getters
    get nombreMascota() {
        return this.#nombreMascota;
    }
    get enfermedad() {
        return this.#enfermedad;
    }

    //Setters
    set nombreMascota(nuevoNombreMascota) {
        this.#nombreMascota = nuevoNombreMascota;
    }
    set enfermedad(nuevaEnfermedad) {
        this.#enfermedad = nuevaEnfermedad;
    }

    // Método
    datosMascota() {
        return `El tipo de animal es: <strong>${this.tipo}</strong>, mientras que el nombre de la mascota es: <strong>${this.nombreMascota}</strong>, y el motivo de consulta es: <strong>${this.enfermedad}</strong>.`
    }
}

// Definición variables y asignación para capturar información desde index.html 

const inicio = document.getElementById("inicio");
const propietario = document.getElementById("propietario");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");
const nombreMascota = document.getElementById("nombreMascota");
const tipo = document.getElementById("tipo");
const motivo = document.getElementById("enfermedad");
const resultado = document.getElementById("resultado");
const formulario = document.getElementById("form");
const botonLimpiarCampos = document.getElementById("botonLimpiar");

// Captura de información desde el formulario y presentación de información capturada.

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const propietarioIngresado = propietario.value;
    const telefonoIngresado = telefono.value;
    const direccionIngresado = direccion.value;
    const nombreMascotaIngresado = nombreMascota.value;
    const tipoIngresado = tipo.value;
    const motivoIngresado = motivo.value;
    const mascotaNueva = new Mascota(propietarioIngresado, direccionIngresado, telefonoIngresado, tipoIngresado, nombreMascotaIngresado, motivoIngresado);
    resultado.innerHTML = `<ul>
    <li>${mascotaNueva.datosPropietario()}</li>
     <li>${mascotaNueva.datosMascota()}</li>
     </ul>`;
    resultado.scrollIntoView({ behavior: "smooth" });
    botonLimpiarCampos.disabled = false;
});

// Activación de botón para limpiar datos del formulario.
botonLimpiarCampos.addEventListener("click", function () {
    propietario.value = "";
    telefono.value = "";
    direccion.value = "";
    nombreMascota.value = "";
    tipo.selectedIndex = 0;
    motivo.value = "";
    botonLimpiarCampos.disabled = true;
    inicio.scrollIntoView({ behavior: "smooth" });
});


