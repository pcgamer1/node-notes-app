const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')
const argv = yargs.argv
// console.log(notes())
console.log(chalk.green.bold('Success!'))
// console.log(yargs.argv)
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        },
        title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }

})
yargs.command({
    command: 'list',
    describe: 'Lists a note',
    handler(){
        notes.listNote()
    }
})
yargs.command({
    command: 'read',
    describe: 'Reads a note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
yargs.parse()