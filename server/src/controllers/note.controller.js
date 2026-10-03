const {notes} = require("../mockdata/data")
const getNotes = async (req, res) => {
    try {
        if(notes.length == 0){
            return res.status(404).json({
                message: "Notes Not Found"
            })
        }
        res.status(200).json({
            message: "Notes",
            notes
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getOneNote = async (req, res) => {
    try {
        const {id} = req.params;
        const note = notes.find(note => note.id === Number(id));
        if(!note){
            return res.status(404).json({
                message: "No Note Found"
            })
        }
        res.status(200).json({
            message: note
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const addNote = async (req, res) => {
    try {
        const {title, content} = req.body;
        const existingNote = notes.find(note => note.content == content && note.title == title);
        if(existingNote){
            return res.status(400).json({
                message: "Note already exists"
            })
        }
        const newNote = {
            id: notes.length + 1,
            title: title,
            content: content
        }
        notes.push(newNote)
        res.status(200).json({
            message: "Not added successfully",
            newNote
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {getNotes, getOneNote, addNote}