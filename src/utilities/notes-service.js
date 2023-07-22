import * as notesAPI from './notes-api';

export async function createNote(noteData) {
  const token = await notesAPI.createNote(noteData);
}

export async function getNotes() {
  const token = await notesAPI.getNotes();
  return token;
}