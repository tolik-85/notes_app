const view = {
  onLoaded() {
    view.addEventListeners()
  },

  addEventListeners() {
    const elAddNoteBtn = document.querySelector('#add-note')
    elAddNoteBtn.addEventListener('click', view.onClickAddNoteBtn)
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
    const noteTextContent =
      e.target.parentNode.parentNode.querySelector('p').innerHTML
    const notesContainer = document.querySelector('#notes-container')
    notesContainer.innerHTML = ''
    controller.handleDeleteNote(noteTextContent)
  },

  renderNotesCounter(notesCount) {
    const notesCounter = document.querySelector('.notes-count')
    notesCounter.innerHTML = `Всего заметок: ${notesCount}`
  },

  onElParagraphNoteDoubleClick(e) {
    const elParagraphNote = e.target
    const elDivNoteContent = e.target.parentNode
    elParagraphNote.remove()
    const elTextArea = generator.generateTextAreaNoteCard(
      elParagraphNote.textContent
    )
    controller.handleChangePrevValue(elParagraphNote.textContent)
    elDivNoteContent.appendChild(elTextArea)
    elTextArea.focus()
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
    notes.forEach(note => {
      const noteCard = generator.generateNoteCard(note)
      notesContainer.appendChild(noteCard)
    })
  },
}
document.addEventListener('DOMContentLoaded', view.onLoaded)
