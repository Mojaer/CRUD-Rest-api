const express = require("express");
const app = express();
const userRouter = require("./routers/routers");
const cors = require('cors')

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(userRouter)

app.use((req, res, next) => {
    res.status(404).json({
        message: "this is a error massage"
    })
})

module.exports = app