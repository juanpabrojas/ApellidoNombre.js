class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`; 
    }

    addMascota(nombre) {
        this.mascotas.push(nombre);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros.push({nombre: nombre, autor: autor});
    }

    getBookNames(){
        return this.libros.map( libro => libro.nombre)
    }
}


const usuario = new Usuario('Juan','Rojas', [{nombre: "El cartero", autor:"Charles Bukowski"}], ['panchita','cachivache']);
console.log(usuario.getFullName());
usuario.addMascota('perro');
console.log(usuario.countMascotas());
usuario.addBook('Señor de los Anillos', 'J.R.Tolkien');
console.log(usuario.getBookNames());