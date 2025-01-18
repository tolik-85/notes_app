const controller = {
  handleAddNote(note) {
    model.addNote(note)
    const notes = model.getNotes()
    view.renderNotesContainer(notes)
    view.renderNotesCounter(notes.length)
  },
  handleDeleteNote(noteTextContent) {
    model.deleteNote(noteTextContent)
    const notes = model.getNotes()
    view.renderNotesContainer(notes)
    view.renderNotesCounter(notes.length)
  },
  handleChangeNoteValue(prevNoteValue, nextNoteValue) {
    model.changeNote(prevNoteValue, nextNoteValue)
    const notes = model.getNotes()
    view.renderNotesContainer(notes)
  },
}
