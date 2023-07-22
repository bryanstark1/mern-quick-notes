export default function NoteCard({ note }) {
  note.createdAt = new Date(note.createdAt);
  return (
    <>
      <h3>{note.text}</h3>
      <h4>Created at: {note.createdAt.toLocaleString()}</h4>
    </>
  );
}