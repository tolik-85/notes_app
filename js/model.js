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
