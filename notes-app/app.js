//const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//Customize yargs version
//yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
        }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//List de notes
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler(argv) {
        notes.listNotes(argv.title, argv.body)
    }
})

//Read notes
yargs.command({
    command: 'read',
    describe: 'read note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

//console.log(process.argv)
console.log(yargs.argv)




// const command = process.argv[2]

// console.log(process.argv)

// if (command === 'add'){
//     console.log('adding note')
// } else if (command === 'remove'){
//     console.log('removing note')
// }








// const printNotes = getNotes('your notes...')

// console.log(printNotes)
// console.log(chalk.green.bold('Success!'))
// console.log(chalk.red.bold('Error!'))

// console.log(process.argv)


//console.log(validator.isEmail('@gmail.com'))
//console.log(validator.isURL('www.ecample.com'))

// const add = require('./utils.js')

// //console.log('hello')
// const sum = add(2, 3)

// console.log(sum)