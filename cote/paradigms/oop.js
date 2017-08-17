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
  if (note instanceof Note){
    this.data.unshift(note);
  } else {
    throw Exception;
  }
};

Notes.prototype.toString = function () {
    if (this.data.length == 0){
    return "";
  }
  this.data.sort(function(a,b){
    return a.createdAt - b.createdAt;
  });

  return this.data.join("\n");
};

module.exports.Note = Note;
module.exports.Notes = Notes;