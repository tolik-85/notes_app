const view = {
  onLoaded() {
    this.addEventListeners()
  },

  addEventListeners() {
    const elAddNoteBtn = document.querySelector('#add-note')
    elAddNoteBtn.addEventListener('click', this.onClickAddNoteBtn)
  },

  onClickAddNoteBtn() {
    const elTextArea = document.querySelector('#note-content')
    const notesContainer = document.querySelector('#notes-container')
    const elTextAreaNoteContent = elTextArea.value
    notesContainer.innerHTML = ''
    controller.handleAddNote(elTextAreaNoteContent)
    elTextArea.value = ''
  },

  onClickDeleteNoteBtn(e) {
    const noteId = e.target.parentNode.parentNode.id
    controller.handleRemoveNoteById(noteId)
  },

  renderNotesCounter(notesCount) {
    const notesCounter = document.querySelector('.notes-count')
    notesCounter.innerHTML = `Всего заметок: ${notesCount}`
  },

  onDoubleClickElParagraphNote(e) {
    const id = e.target.parentNode.parentNode.id
    controller.handleMarkNoteAsEditableById(id)
  },

  onElTExtAreaNoteBlur(e) {
    const notesContainer = document.querySelector('#notes-container')
    const elTextArea = e.target
    const elDivNoteContent = e.target.parentNode
    notesContainer.innerHTML = ''
    const elParagraph = generator.generateElParagraphNoteCard(elTextArea.value)
    controller.handleChangeNextValue(elTextArea.value)
    controller.handleChangeNoteValue()
    elDivNoteContent.appendChild(elParagraph)
  },

  renderNotesContainer(notes) {
    const notesContainer = document.querySelector('#notes-container')
    notesContainer.innerHTML = ''
    notes.forEach(note => {
      const noteCard = generator.generateNoteCard(note)
      notesContainer.appendChild(noteCard)
    })
    // const textArea = notesContainer.querySelector('textarea')
    // if (textArea) {
    //   textArea.focus()
    // }
  },
}

document.addEventListener('DOMContentLoaded', view.onLoaded.bind(view))
