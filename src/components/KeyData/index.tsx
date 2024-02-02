import './style.css';

type userInfoSport = {
  icon : string,
  info : string, 
  text : string,
}

/**
 * Composant fonctionnel représentant une section d'informations sportives.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.icon - L'URL de l'icône sportive.
 * @param {string} props.info - Les informations sportives.
 * @param {string} props.text - Le texte associé à l'information sportive.
 * @returns {JSX.Element} - Élément JSX représentant la section d'informations sportives.
 */
const KeyData = ({ icon, info, text } : userInfoSport ): JSX.Element => {
  return (
    <div className="user__sport">
      <div className={text.toLowerCase()}>
        <img src={icon} alt="icon sport"/>
      </div>
      <div className="user__sport-info">
        <span className="user__sport-data">{info}</span>
        <span className="user__sport-name">{text}</span>
      </div>
    </div>
  );
};

export default KeyData;
