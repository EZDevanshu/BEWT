const mongoose = require("mongoose");
const express = require("express");

const app = express();

app.use(express.json())


const DB_URL = "mongodb://localhost:27017/Library_db"

mongoose.connect(DB_URL)
    .then(() => { console.log("Product databse Connected !") })
    .catch((err) => { console.error(err) });

// create 

const LibrarySchma = mongoose.Schema({
    BookName: String,
    BookPrice: Number,
});
const Book = mongoose.model("Book", LibrarySchma);


app.post("/api/books", async (req, res) => {
    try {
        const bookCreated = new Book(req.body);
        const bookSave = await bookCreated.save()
        res.status(201).json(bookSave);
    }
    catch {
        res.status(500).json({ massage: "server eroor" })
    }
})


// read all 

app.get('/api/books', async (req, res) => {
    try {
        const getAllBook = await Book.find()
        res.status(201).json(getAllBook)
    }
    catch {
        res.status(500).json({ massage: "server error" })
    }
})


app.put('/api/books/:id', async (req, res) => {
    try {
        const updateBookEdition = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updateBookEdition)
    }
    catch {
        res.status(500).json({ massage: "server error" })
    }
})
// read one 

app.get('/api/books/:id', async (req, res) => {
    try {
        const getOneBook = await Book.findById(req.params.id);
        res.status(201).json(getOneBook)
    }
    catch {
        res.status(500).json({ massage: "server error" })
    }
})

app.delete('/api/books/:id', async (req, res) => {
    try {

        const book = await Book.findByIdAndDelete(req.params.id)
        if (!book) return res.status(404).send("book not found")
        res.status(201).json({ massage: "deleted Successfully" })
    }
    catch {
        res.status(500).json({ massage: "server error" })
    }
})

app.listen(3000, () => {
    console.log("server has started at 3000")
})