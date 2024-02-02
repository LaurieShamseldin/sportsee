import { NavLink } from 'react-router-dom';

import './style.css';

/**
 * Composant fonctionnel représentant la barre de navigation.
 * @component
 * @returns {JSX.Element} - Élément JSX représentant la barre de navigation.
 */
const Navigation = (): JSX.Element => (
  <nav className="navigation">
    <ul className="navigation__links">
      <NavLink to="/">
        <li className="navigation__link">Accueil</li>
      </NavLink>
      <li className="navigation__link">Profil</li>
      <li className="navigation__link">Réglages</li>
      <li className="navigation__link">Communauté</li>
    </ul>
  </nav>
);

export default Navigation;
