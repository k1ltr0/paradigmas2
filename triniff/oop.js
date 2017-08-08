function Note(text) {
  this.text = text || '';
  this.createdAt = new Date();
  this.completed = false;
}

Note.prototype.toString = function () {
  var str = '[' + (this.completed ? 'X' : ' ') + ']';
  str += ' | ' + this.createdAt.toDateString();
  str += ' | ' + this.text;
  return str;
};


function Notes() { //Aqui se guardaran los datos que entran
  this.data = []; //Guarda los datos en un arreglo
  this.data.sort(); //Ordena los datos por fecha
}

Notes.prototype.add = function (note) { //Añade las notas a la funcion Notes
  //...
  if (note instanceof Note) { //Si el dato que entra es una instancia de Note (si no esta vacío)
    this.data.unshift(note); //unshift (pushea en orden inverso), para q el primero que entre sea el primero en mostrarse
  }else{
    return error; //Si note no es una instancia de Note (esta vacio tirara error)
  }
};

Notes.prototype.toString = function () {
  //...
  return this.data.join('\n'); //Como cada dato que entra se imprime como una arreglo separado con comas, pero necesito separarlo por un enter para que se visualice una abajo de la otra
};

module.exports.Note = Note;
module.exports.Notes = Notes;
