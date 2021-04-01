const express = require("express");
const db = require("../database-mysql");
const bodyparser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyparser.json());

app.get("/api/experiments", (req, res) => {
  console.log('hi from api/experiments');
  db.getExperiments((error, results) => {
    if (error) {
      console.log('error getting experimentsfrom database', error);
    } else {
      res.json(results);
      res.end();
    }
  });
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
