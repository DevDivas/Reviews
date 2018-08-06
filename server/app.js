const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/index.js');

const app = express();

app.use('/rooms/:room_id', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/rooms/:room_id/reviews', (req, res) => {
  db.getReviews(req.params.room_id, (err, results) => {
    if (err) res.status(500).send();
    res.status(201).send(results);
  });
});

module.exports = app;
