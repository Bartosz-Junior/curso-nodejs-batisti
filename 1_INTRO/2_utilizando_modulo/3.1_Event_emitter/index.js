const eventEmitter = require('events')
const { EventEmitter } = require('stream')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
    console.log("Durante")
})

console.log("Antes")

eventEmitter.emit('start')

console.log("Depois")