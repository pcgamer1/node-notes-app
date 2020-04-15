const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return('Your notes...')
}
const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicate = notes.filter((note)=>note.title === title)
    if(duplicate.length === 0)
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.bold('Note added'))
    }
    else
    {
        console.log(chalk.red.bold('Duplicate title'))
    }
}
debugger
const removeNote = (title) => {
    const notes = loadNotes()
    notesd = notes.filter((note)=>note.title !== title)
    saveNotes(notesd)
    if(notes.length > notesd.length)
        console.log(chalk.green.bold('Note Removed'))
    else console.log(chalk.red.bold('No note removed'))
}
const listNote = () => {
    console.log(chalk.green.bold('Your Notes:'))
    const notes = loadNotes()
    notes.forEach(element => {
        console.log(element.title + ':' + element.body)
    })
}
const readNote = (title) => {
    console.log(chalk.green.bold('Reading Note:'))
    const notes = loadNotes()
    reqnote = notes.find((note) => note.title === title)
    if(reqnote != undefined)
        console.log(reqnote)
    else console.log(chalk.red.bold('Note does not exist'))
}
const saveNotes = (notes) => {
    const notedata = JSON.stringify(notes)
    fs.writeFileSync('notes.json',notedata)
}
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}