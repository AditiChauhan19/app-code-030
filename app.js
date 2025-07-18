const express = require('express');
const app = express();
const port = 1234;

app.get('/', (req, res) => {
  res.send('Hello from Aditi\'s Node App on EC2!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
