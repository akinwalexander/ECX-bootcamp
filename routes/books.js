const express = require('express');
const router = express.Router();
const Book = require('../models/books');

// Create a new book
router.post('/', async (req, res) => {
  const { title, author } = req.body;
  const book = new Book({ title, author });
  await book.save();
  res.json(book);
});

// Get all books
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});


// Update a book by ID
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { title, author } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(id, { title, author }, { new: true });
    if (updatedBook) {
      res.json(updatedBook);
    } else {
      res.status(404).send('Book not found');
    }
  });
  
  // Delete a book by ID
  router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const deletedBook = await Book.findByIdAndRemove(id);
    if (deletedBook) {
      res.send('Book deleted');
    } else {
      res.status(404).send('Book not found');
    }
  });
  


module.exports = router;