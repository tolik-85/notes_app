const controller = {
  handleLoadPage() {},
  handleAddNote(noteText) {
    model.addNoteByText(noteText)
    const notes = model.getNotes()
    view.renderNotesContainer(notes)
    view.renderNotesCounter(notes.length)
  },
  handleRemoveNoteById(id) {
    model.removeNoteById(id)
    const notes = model.getNotes()
    view.renderNotesContainer(notes)
    view.renderNotesCounter(notes.length)
  },
  handleMarkNoteAsEditableById(id) {
    model.markNoteAsEditableById(id)
    const notes = model.getNotes()
    view.renderNotesContainer(notes)
    view.renderNotesCounter(notes.length)
  },
  handleEditNote(NewNoteText, id) {},
  // handleChangeNoteValue() {
  //   model.changeNote()
  //   const notes = model.getNotes()
  //   view.renderNotesContainer(notes)
  // },
}
// handleLoadPage() {
//   const tasks = storage.restoreTasks()
//   model.setTasks(tasks)
//   view.renderTasks(tasks)
// },
