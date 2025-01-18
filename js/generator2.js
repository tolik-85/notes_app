const generator = {
  generateNoteCard(note) {
    const elDivNoteCard = document.createElement('div')
    const elDivNoteActions = document.createElement('div')
    const elDivContent = document.createElement('div')
    const elButtonDeleteNote = document.createElement('button')
    let el

    if (note.isEditable) {
      el = this.generateTextAreaNoteCard(note.text)
    } else {
      el = this.generateElParagraphNoteCard(note.text)
    }

    elDivNoteCard.classList.add('note-card')
    elDivContent.classList.add('note-content')
    elDivNoteActions.classList.add('note-actions')

    elDivContent.appendChild(el)
    elDivNoteActions.appendChild(elButtonDeleteNote)
    elDivNoteCard.appendChild(elDivContent)
    elDivNoteCard.appendChild(elDivNoteActions)
    elButtonDeleteNote.addEventListener('click', view.onClickDeleteNoteBtn)
    elButtonDeleteNote.textContent = 'Удалить'

    return elDivNoteCard
  },

  generateTextAreaNoteCard(textContent) {
    const elTextArea = document.createElement('textArea')
    elTextArea.value = textContent
    elTextArea.addEventListener('blur', view.onElTExtAreaNoteBlur)
    return elTextArea
  },

  generateElParagraphNoteCard(textContent) {
    elParagraph = document.createElement('p')
    elParagraph.textContent = textContent
    elParagraph.addEventListener('dblclick', view.onElParagraphNoteDoubleClick)
    return elParagraph
  },
}
