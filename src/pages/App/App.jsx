import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { getNotes, createNote } from '../../utilities/notes-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import NotesPage from '../NotesPage/NotesPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);

  async function addNote(note) {
    createNote(note);
    // console.log(getNotes());
    const response = await getNotes();
    setNotes(response);
    getNote();
  };

  const getNote = async () => {
    const response = await getNotes();
    console.log(response)
    setNotes(response);
  }
  
  useEffect(() => {
    // getNote();
    if (user) {
      getNote();
    }
  }, []);

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} setNotes={setNotes} />
            <Routes>
              {/* Route components in here */}
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route path="/notes" element={<NotesPage notes={notes} setNotes={setNotes} addNotes={addNote} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} getNote={getNote} />
      }
    </main>
  );
}
