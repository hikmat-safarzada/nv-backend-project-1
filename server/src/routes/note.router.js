const express = require("express");
const {getNotes, getOneNote, addNote} = require("../controllers/note.controller");

const router = express.Router();

router.get("/", getNotes);
router.get("/:id", getOneNote);
router.post("/", addNote)

module.exports = router