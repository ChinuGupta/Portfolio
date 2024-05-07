const connectToMongo = require("./dbConnection");
const express = require("express");
const cors = require('cors');

connectToMongo();
const app = express();
const port = 9000;

app.use(cors());

app.use(express.json());

app.use("/auth/contact",require('./routes/auth'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
