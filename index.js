const express = require("express");
const app = express();
const port = 3002;

//extraemos el json de nuestra DB
const books = require("./books.json");

//metodo para que el server interprete el archivo json
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    id: "123456",
    isCompleted: false,
    description: "Walk the dog",
  });
});


app.listen(port, () => {
  console.log("online" + port);
});
