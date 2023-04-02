const express = require("express");
const cors = require("cors");
const app = express();

const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.json());

const conn = require("./db/conn");

conn();

const routes = require("./routes/router");

app.use("/api", routes)

app.listen(5000, function() {
    console.log("Server online")
})

export default app;