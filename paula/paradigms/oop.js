/*
const note1 = new Note("hola");
const note2 = new Note("mundo");
const notes = new Notes();

notes.add(note1);
notes.add(note2);

console.log(notes.toString());
*/

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


function Notes() {
  this.data = [];
}

Notes.prototype.add = function (note) {
  if(!(note instanceof Note)) {
    throw Exception;;
  } else {
    this.data.unshift(note);
  }
};

Notes.prototype.toString = function () {
  return this.data.sort(function(a,b){
    return a.createdAt - b.createdAt;
  }).join("\n");
};

module.exports.Note = Note;
module.exports.Notes = Notes;