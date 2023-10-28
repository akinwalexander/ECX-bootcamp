const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/bookstore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// Define your CRUD routes
app.use('/books', require('./routes/books'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});