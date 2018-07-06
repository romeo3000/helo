require("dotenv").config()
const express = require("express"),
      bodyParser = require("body-parser"),
      massive = require("massive"),
      controller = require("./controller");

const {SERVER_PORT, CONNECTION_STRING} = process.env
const app = express()
app.use(bodyParser.json())

const port = SERVER_PORT;
massive(CONNECTION_STRING).then(db => app.set("db", db))







app.listen(port, console.log(`Listening to port: ${port}`))
