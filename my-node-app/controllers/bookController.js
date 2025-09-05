let books = [
  { id: 1, title: "Book A", author: "Author A" },
  { id: 2, title: "Book B", author: "Author B" }
];

export const getBooks = (req, res) => {
  res.json(books);
};

export const addBook = (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
};
