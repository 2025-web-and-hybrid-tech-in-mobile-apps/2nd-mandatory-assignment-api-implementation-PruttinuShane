const express = require("express");
const jwt = require ("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
const port = process.env.PORT || 3000;

const SECRET_KEY = "1234";
const user = [];
const Highscore = [];



app.use(express.json()); // for parsing application/json

// ------ WRITE YOUR SOLUTION HERE BELOW ------//

app.post('/signup', async (req, res ) => {
  const {email, password } = req.body;
  const userExist = users.find(user => user.email ===email)
  if (userExist) {
    return res.status(400).json({message: 'User already exist'})
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {email, password: hashedPassword };
})

//------ WRITE YOUR SOLUTION ABOVE THIS LINE ------//

let serverInstance = null;
module.exports = {
  start: function () {
    serverInstance = app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  },
  close: function () {
    serverInstance.close();
  },
};
