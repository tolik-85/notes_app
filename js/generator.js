const generator = {
  generateNoteCard(note) {
    const elDivNoteCard = document.createElement('div')
    const elDivNoteActions = document.createElement('div')
    const elDivContent = document.createElement('div')
    const elParagraphNoteName = document.createElement('p')
    const elButtonDeleteNote = document.createElement('button')

    elDivNoteCard.classList.add('note-card')
    elDivContent.classList.add('note-content')
    elDivNoteActions.classList.add('note-actions')
    elParagraphNoteName.innerText = note
    elButtonDeleteNote.innerText = 'Удалить'

    elDivContent.appendChild(elParagraphNoteName)
    elDivNoteActions.appendChild(elButtonDeleteNote)
    elDivNoteCard.appendChild(elDivContent)
    elDivNoteCard.appendChild(elDivNoteActions)
    elButtonDeleteNote.addEventListener('click', view.onClickDeleteNoteBtn)
    elParagraphNoteName.addEventListener(
      'dblclick',
      view.onElParagraphNoteDoubleClick
    )
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
