
const fs = require('fs');

var fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.txt'));
    } catch (err) {
        return [];
    }
}

var addingNote = (title, body) => {
    var notes = fetchNotes();

    var note = {
        title,
        body
    };

    var double = notes.filter((note) => note.title === title);

    if (double.length === 0) {
        notes.push(note);
        fs.writeFileSync("notes.txt", JSON.stringify(notes));
        // logNote(note);
        console.log("New node created");
    } else {
        console.log("Title already exists.");
    }
}

var removeNote = (title) => {
    var notes = fetchNotes();

    var filteredNotes = notes.filter((note) => note.title !== title);

    fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
}

var readNote = (title) => {
    var notes = fetchNotes();

    var filteredNotes = notes.filter((note) => note.title === title);
    console.log(`${filteredNotes[0].title}`)
    console.log(`${filteredNotes[0].body}`);
}

var getAll = () => {
    var notes = fetchNotes();

    notes.forEach((note) => logNote(note));
}
var lognot = (note) => {
    console.log(`${note.body}`)
}
var logNote = (note) => {

    console.log(`${note.title}`);
    // console.log(`${note.body}`)

}
module.exports = {
    addingNote,
    removeNote,
    readNote,
    getAll
}