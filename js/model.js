const model = {
  notes: [],

  addNote(note) {
    this.notes.push(note)
  },

  deleteNote(note) {
    const noteToDeleteindex = this.notes.indexOf(note)
    this.notes.splice(noteToDeleteindex, 1)
  },

  getNotes() {
    return this.notes
  },
  changeNote(prevNoteValue, nextNoteValue) {
    const noteIndex = this.notes.indexOf(prevNoteValue)
    this.notes[noteIndex] = nextNoteValue
  },
}
