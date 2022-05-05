const mongoose = require("mongoose")
mongoose
    .connect('mongodb://localhost:27017/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        replicaSet: "rs0"
    })
    .then(() => {
        console.log('MongoDB connected');
    })
const express = require("express")

const app = express()
const port = 3010

app.use("/api/v1/test", require("./route/"));

const server = require('http').createServer(app)

server.listen(port, () => {
    console.log(`server is up and listening on port ${port}`)
});
