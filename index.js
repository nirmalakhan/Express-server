const express = require("express");
const { response, request } = require("express");

const express = require("express");

const app = express();
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

app.get("/notes", (request, response) => {
  response.send(notes);
});

app.post("/notes", (request, response) => {
  console.log(request);
  const data = request.body;
  response.json(data);
  notes.push(data);
});

app.put("/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((note) => note.id === id);
  console.log(note);
  note.sub = request.body.sub;
  response.send(note);
});

app.delete("n/:id", (request, response) => {
  const id = Number(request.params.id);

  const note = notes.filter((note) => note.id !== id);
  console.log(note);

  response.json(note);
});

app.listen(port, () => {
  console.log("Server is starting");
});
