const model = {
  notes: [],

  addNoteByText(noteText) {
    let noteId = this.notes.at(-1)?.id + 1
    if (!noteId) {
      noteId = 1
    }
    const note = {
      id: noteId,
      text: noteText,
      isEditable: false,
      isDeleted: false,
    }

    this.notes.push(note)
  },

  getNotes() {
    const notes = this.notes.filter(note => note.isDeleted === false)
    return notes
  },

  setNotes(notes) {
    this.notes = notes
  },

  removeNoteById(id) {
    const findedNote = this.notes.find(note => {
      return note.id === +id
    })
    findedNote.isDeleted = true
  },

  markNoteAsEditableById(id) {
    const findedNote = this.notes.find(note => {
      return note.id === +id
    })
    findedNote.isEditable = true
  },

  editNote(NewNoteText, id) {
    const findedNote = this.notes.find(note => {
      return note.id === +id
    })
    findedNote.text = NewNoteText
    findedNote.isEditable = false
  },
}

// console.log(model.notes)
// model.addNoteByText('foo')
// console.log(model.notes)
// model.addNoteByText('bar')
// console.log(model.notes)
// model.addNoteByText('baz')
// console.log(model.notes)
// model.addNoteByText('xxx')
// console.log(model.notes)

// model.markNoteAsEditableById(2)
// console.log(model.notes)

// model.editNote('tttt', 2)
// console.log(model.notes)

// model.removeNoteById(1)
// console.log(model.notes)
// console.log(model.notes)
// model.removeNoteById(4)
// console.log(model.notes)
// console.log(model.notes)

// model.getNotes()
// console.log(model.getNotes())
