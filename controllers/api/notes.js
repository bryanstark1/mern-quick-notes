const Note = require('../../models/note');

const index = async (req, res) => {
  const notes = await Note.find({});
  console.log(notes)
  res.json(notes)
}

const create = async (req, res) => {
  const notes = await Note.create(req.body);
}

module.exports = {
  index,
  create
}