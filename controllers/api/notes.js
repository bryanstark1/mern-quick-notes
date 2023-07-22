const Note = require('../../models/note');

const index = async (req, res) => {
  // const notes = await Note.find({});
  const notes = await Note.find({ user: req.user._id }).exec();
  console.log(notes)
  res.json(notes)
}

const create = async (req, res) => {
  req.body.user=req.user;
  const notes = await Note.create(req.body);
  console.log(req.body.user);
}

module.exports = {
  index,
  create
}