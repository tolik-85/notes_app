const model = {
  notes: [
    // {
    //   id: 1,
    //   text: 'noteText',
    //   isEditable: false,
    //   isDeleted: false,
    // },
    // {
    //   id: 2,
    //   text: 'noteText',
    //   isEditable: false,
    //   isDeleted: true,
    // },
    // {
    //   id: 3,
    //   text: 'noteText',
    //   isEditable: true,
    //   isDeleted: false,
    // },
    // {
    //   id: 4,
    //   text: 'noteText',
    //   isEditable: false,
    //   isDeleted: false,
    // },
  ],

  addNoteByText(noteText) {
    let noteId = this.notes.at(-1)?.id + 1
    if (!noteId) {
      noteId = 1
    }
    const note = {
      id: noteId,
      text: noteText,
      isEditable: false,
      isDeleted: false,
    }

    this.notes.push(note)
  },
  getNotes() {
    const notes = this.notes.filter(note => note.isDeleted === false)
    return notes
  },
  // removeNoteById(id) {
  //   const findedNote = this.notes.find(note => {
  //     note.id === id
  //   })
  //   findedNote.isDeleted = true
  // },
  // removeNoteById(id) {
  //   console.log(id)

  //   const findedNote = this.notes.filter(note => note.id === +id)
  //   findedNote.isDeleted = true
  // },
  removeNoteById(id) {
    this.notes.forEach(note => {
      if (note.id === +id) {
        note.isDeleted = true
      }
    })
  },

  markNoteAsEditableById(id) {
    this.notes.forEach(note => {
      if (note.id === +id) {
        note.isEditable = true
      }
    })
  },

  editNote(NewNoteText, id) {
    const findedNote = this.notes.find(note => note.id === id)
    findedNote.text = NewNoteText
    findedNote.isEditable = false
  },
}

// console.log(model.notes)
// model.addNoteByText('foo')
// console.log(model.notes)
// model.addNoteByText('bar')
// console.log(model.notes)
// model.addNoteByText('baz')
// console.log(model.notes)
// model.addNoteByText('xxx')
// console.log(model.notes)

// model.markNoteAsEditableById(2)
// console.log(model.notes)

// model.editNote('tttt', 2)
// console.log(model.notes)

// model.removeNoteById(1)
// console.log(model.notes)
// console.log(model.notes)
// model.removeNoteById(4)
// console.log(model.notes)
// console.log(model.notes)

// model.getNotes()
// console.log(model.getNotes())
