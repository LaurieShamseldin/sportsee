import { NavLink } from 'react-router-dom';

type ButtonUserId = {
  userId: number;
}

/**
 * Composant représentant un bouton lié à un utilisateur.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.userId - L'identifiant de l'utilisateur.
 * @returns {JSX.Element} Élément JSX représentant le composant ButtonUser.
 */
const ButtonUser = ({ userId }  : ButtonUserId) => {
  return (
    <div className="button__user">
      <NavLink to={`/user/${userId}`}>
        Utilisateur n°{userId}
      </NavLink>
    </div>
  );
}

export default ButtonUser;
