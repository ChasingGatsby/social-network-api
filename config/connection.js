const {connect, connection}= require('mongoose');   

connect (`mongodb://localhost:27017/socialNetwork`)

module.exports = connection