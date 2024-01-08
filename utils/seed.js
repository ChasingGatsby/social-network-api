const connection = require("../config/connection");
const { User, Thought } = require("../models");

connection.once("error", (err) => err);

connection.once('open', async ()=> {
    console.log('Connected to database...')
})
