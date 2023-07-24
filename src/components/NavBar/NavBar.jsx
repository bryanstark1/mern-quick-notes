import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser, setNotes }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
    setNotes([]);
  }

  return (
    <header>
      <div className='welcome'>
        <span>Welcome, {user.name}!</span>
        <Link to="" onClick={handleLogOut}>Log Out</Link>
      </div>
      <nav>
        <Link to='/notes'>Notes</Link>
      </nav>
    </header>
  );
}