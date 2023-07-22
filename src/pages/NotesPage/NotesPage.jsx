import NoteCard from '../../components/NoteCard/NoteCard';
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm.jsx';
import './NotesPage.css';

export default function NotesPage({ notes, setNotes, addNotes }) {
  const noteListItems = notes.map((n) => {
    return <NoteCard note={n} />;
  });

  return (
    <>
      <h1>NotesPage</h1>
      {(notes.length !== 0) ? <ul>{noteListItems}</ul> : <h2>No Notes Yet!</h2>}
      {console.log(notes)}
      <NewNoteForm addNotes={addNotes} />
    </>
  );
}