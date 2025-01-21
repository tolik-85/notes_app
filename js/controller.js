const controller = {
  handleLoadPage() {
    let notes = storage.restoreNotes()
    model.setNotes(notes)
    notes = model.getNotes()
    view.renderNotesContainer(notes)
    view.renderNotesCounter(notes.length)
  },
  handleAddNote(noteText) {
    model.addNoteByText(noteText)
    storage.saveNotes(model.notes)
    const notes = model.getNotes()
    view.renderNotesContainer(notes)
    view.renderNotesCounter(notes.length)
  },
  handleRemoveNoteById(id) {
    model.removeNoteById(id)
    console.log(model.notes)
    storage.saveNotes(model.notes)
    const notes = model.getNotes()
    view.renderNotesContainer(notes)
    view.renderNotesCounter(notes.length)
  },
  handleMarkNoteAsEditableById(id) {
    model.markNoteAsEditableById(id)
    storage.saveNotes(model.notes)
    const notes = model.getNotes()
    view.renderNotesContainer(notes)
    view.renderNotesCounter(notes.length)
  },
  handleEditNote(NewNoteText, id) {
    model.editNote(NewNoteText, id)
    storage.saveNotes(model.notes)
    const notes = model.getNotes()
    view.renderNotesContainer(notes)
  },
}
