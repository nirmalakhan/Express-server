const { application, request, response } = require("express");

const notesRouter = require("express").Router();

let notes = [
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

notesRouter.get("/", (request, response) => {
  response.json(notes);
});

notesRouter.post("/", (request, response) => {
  console.log(request);
  const data = request.body;
  response.json(data);
  notes.push(data);
});

notesRouter.put("/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((note) => note.id === id);
  console.log(note);
  note.sub = request.body.sub;
  response.send(note);
});

notesRouter.delete("/:id", (request, response) => {
  const id = Number(request.params.id);

  notes = notes.filter((note) => {
    return note.id !== id;
  });
  console.log(notes);

  response.json(notes);
});

module.exports = notesRouter;
