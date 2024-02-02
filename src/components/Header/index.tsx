import Navigation from '../Navigation';
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom';

import './style.css';

/**
 * Composant représentant l'en-tête de l'application.
 * @component
 * @returns {JSX.Element} Élément JSX représentant le composant Header.
 */
const Header = () => (
  <header className="header">
    <div className="header__info">
      <NavLink to="/">
        <img src={logo} alt="Logo Sport See"/> 
      </NavLink>
      <div className="header__links">
        <Navigation />
      </div>
    </div>
  </header>
);

export default Header; 
