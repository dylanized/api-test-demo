const express = require('express')
const app = express();

app.get('/', function (req, res) {
  res.send('hello world');
});

app.post('/', function (req, res) {
  res.json({ foo: "bar" });
});

app.listen(3000);
