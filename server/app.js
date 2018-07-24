const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../public'));

app.get('/rooms/:room_id/reviews', (req, res) => {
  db.getReviews(req.params.room_id, (err, results) => {
    if (err) console.error(err);
    res.status(201).send(results);
  });
});

module.exports = app;
