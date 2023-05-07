const express = require('express');
const cors = require('cors');
const users = require('./user.json');
const bodyParser = require("body-parser"); 

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/api', (req, res) => {
  // res.setHeader('Content-Type', 'application/json');
  res.json(users);
  console.log(users, "USERS");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
