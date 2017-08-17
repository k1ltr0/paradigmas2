function Note(text) {
  this.text = text || '';
  this.createdAt = new Date();
  this.completed = false;
}

Note.prototype.toString = function () {
  var str = '[' + (this.completed ? 'X' : ' ') + ']'; //? : if en linea
  str += ' | ' + this.createdAt.toDateString();
  str += ' | ' + this.text;
  return str;
};


function Notes(){
  this.data = []; 
  this.data.sort(); //Acá ordena
}

Notes.prototype.add = function (note){  
  if(note instanceof Note){    
    this.data.unshift(note);
  }else{
    throw exception; // throw exception
  }
};

Notes.prototype.toString = function (){
   return this.data.join('\n'); // Acá une elementos 
};

module.exports.Note = Note;
module.exports.Notes = Notes;