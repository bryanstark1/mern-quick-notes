import { useState } from 'react';
import './NewNoteForm.css';

export default function NewNoteForm({ addNotes }) {
  const [newNote, setNewNote] = useState({
    text: ''
  });

  function handleChange(e) {
    const noteData = { ...newNote, [e.target.name]: e.target.value };
    setNewNote(noteData);
  };

  function handleAddNote(e) {
    e.preventDefault();
    addNotes(newNote);
    setNewNote({
      text: ''
    });
  };

  return (
    <form onSubmit={handleAddNote} className='new-note'>
      <textarea name='text' value={newNote.text} onChange={handleChange} cols="30" rows="10" placeholder='Add new note here...'></textarea>
      <button type='submit'>Submit</button>
    </form>
  )
}