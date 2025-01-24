const model = {
  notes: [],
  prevValue: '',
  nextValue: '',

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
  changeNote() {
    const noteIndex = this.notes.indexOf(this.prevValue)
    this.notes[noteIndex] = this.nextValue
  },
  setPrevValue(prevValue) {
    this.prevValue = prevValue
  },
  setNextValue(nextValue) {
    this.nextValue = nextValue
  },
}
