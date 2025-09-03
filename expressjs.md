// Basic routing
app.METHOD(PATH, HANDLER)

// Where:
// - METHOD is an HTTP request method (get, post, put, delete, etc.)
// - PATH is a path on the server
// - HANDLER is the function executed when the route is matched

// Examples:
app.get('/users', (req, res) => {
  res.send('GET request to users');
});

app.post('/users', (req, res) => {
  res.send('POST request to users');
});