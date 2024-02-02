
import './style.css';
/**
 * Composant message bienvenue.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.userName - Le nom de l'utilisateur.
 * @returns {JSX.Element} Élément JSX représentant le composant HelloUser.
 */


type textUserName = {
  userName: string;
}


const HelloUser = ({ userName } : textUserName) => { 
    return (
    <div className="hello__user">
      <h1>Bonjour <span className="hello__user-name">{userName}</span></h1>
      <span className="hello__applause">Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
    </div>
  );
};

export default HelloUser;


