//primer constructor
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

//segundo constructor

function Notes() {
  this.data = [];
};

Notes.prototype.add = function (note) {
  //...debe botar error(throw) si el argumento (note) no es una instancia de Note.
  //.. debe añadir nuevas notas al principio de this.data, no al final.
  if(!(note instanceof Note)){
    throw Exception
  }
    this.data.unshift(note);
};

Notes.prototype.toString = function () {
  //...debe listar las notas ordenadas por fecha de creación descendente, la última añadida debe aparecer primero.
  if (this.data.length == 0){
    return "";
  }
  this.data.sort(function(a, b){
    return a.createdAt - b.createdAt;
  });
  return this.data.join('\n');
};

//.. No olvides exportar los constructores Note y Notes.
module.exports.Note = Note;
module.exports.Notes = Notes;