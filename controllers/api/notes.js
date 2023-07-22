const Note = require('../../models/note');

const index = async (req, res) => {
  const notes = await Note.find({});
  res.render('')
}