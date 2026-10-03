const express = require("express");
const app = express();
const noteRouter = require("./note.router")
app.use(express.json());
app.use("/api/notes", noteRouter)

module.exports = app