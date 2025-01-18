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
  handleChangeNoteValue() {
    model.changeNote()
    const notes = model.getNotes()
    view.renderNotesContainer(notes)
  },
  handleChangePrevValue(prevValue) {
    model.setPrevValue(prevValue)
  },
  handleChangeNextValue(nextValue) {
    model.setNextValue(nextValue)
  },
}
