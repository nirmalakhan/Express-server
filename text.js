const express = require("express");
const app = express();
const notesRouter = require("./routes/notes");
const port = 5000;
app.use(express.json());

const notes = [
  {
    id: 1,
    sub: "maths",
  },
  {
    id: 2,
    sub: "science",
  },
  {
    id: 3,
    sub: "Hindi",
  },
];

app.use("/notes", notesRouter);

app.listen(port, () => {
  console.log("Server is starting");
});
