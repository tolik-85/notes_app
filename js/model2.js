const model = {
  notes: [],

  addNoteByText(noteText) {
    const note = {
      text: noteText,
      isEditable: false,
      isDeleted: false,
    }
    this.notes.push(note)
  },

  removeNoteByText(noteText) {
    const findedNote = this.notes.find(note => note.text === noteText)
    findedNote.isDeleted = true
    // this.notes = this.notes.filter(note => note.text !== noteText)
  },

  markNoteAsEditableByText(noteText) {
    const findedNote = this.notes.find(note => note.text === noteText)
    findedNote.isEditable = true
  },

  editNote(noteText) {
    const findedNote = this.notes.find(note => note.isEditable)
    findedNote.text = noteText
    findedNote.isEditable = false
  },
}

// ['-foo', '^bar', '#baz']

model.addNoteByText('foo')
console.log(model.notes)

model.addNoteByText('foo')
console.log(model.notes)

model.markNoteAsEditableByText('foo')
console.log(model.notes)

model.editNote('xxxxx')
console.log(model.notes)
