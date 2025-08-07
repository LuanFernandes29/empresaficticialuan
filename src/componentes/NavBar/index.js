import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">Início</Link>
      <Link to="/Sobre">Sobre</Link>
      <Link to="/Contato">Contato</Link>
    </div>
  );
}

export default NavBar;
