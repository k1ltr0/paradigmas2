function Note(text) {
    this.text = text || '';
    this.createdAt = new Date();
    this.completed = false;
}

Note.prototype.toString = function() {
    var str = '[' + (this.completed ? 'X' : ' ') + ']';
    str += ' | ' + this.createdAt.toDateString();
    str += ' | ' + this.text;
    return str;
};


function Notes() {
    this.data = [];
}

Notes.prototype.add = function(note) {
    //si el argumento (note) no es una instancia de Note.    
    if (note instanceof Note) {
        this.data.unshift(note);
    } else {
        throw Exception;
    }
};

Notes.prototype.toString = function() {
    // Si no hay notas retorna vacio  
    if (this.data.length === 0) {
        return '';
    }

    this.data.sort((a, b) => b.createdAt - a.createdAt);

    // Ordeno la lista por fecha de creacion
    return this.data.join('\n');

};

module.exports.Note = Note;
module.exports.Notes = Notes;