const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const items = require("./routes/items");

const app = express();

app.use(bodyParser.json());
app.use(cors());

//getting the URI of DB
const db = require("./config/keys").mongoURI;

//Connect with DB
mongoose
  .connect("mongodb://localhost/mern_shopping", { useNewUrlParser: true })
  .then(() => console.log("DB Coonected"))
  .catch((err) => console.log(err));

//Routes

app.use("/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("running"));
