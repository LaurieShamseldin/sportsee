import HelloUser from '../../components/HelloUser';
import KeyData from '../../components/KeyData';
import Activity from '../../components/Activity';
import Session from '../../components/Session';
import Performance from '../../components/Performance';
import Score from '../../components/Score';

import caloriesIcon from "../../assets/calorie.svg";
import proteineIcon from "../../assets/protein.svg";
import glucideIcon from "../../assets/glucid.svg";
import lipideIcon from "../../assets/lipid.svg";

import UserApi from "../../utils/UserApi";
//import UserMock from '../../utils/mock/UserMock';

import './style.css';

/**
 * Composant représentant la page d'un utilisateur.
 * @component
 * @returns {JSX.Element} Élément JSX représentant le composant User.
 */
const User = (): JSX.Element => { 
  // Récupération des informations de l'utilisateur
  const userInfo = UserApi();
  // const userInfo = UserMock();

  return (
    <main className="user">
      {/* Vérification de l'existence de données utilisateur */}
      {userInfo ? (
        <div className="user__info">
          {/* Composant d'accueil avec le nom de l'utilisateur */}
          <HelloUser userName={userInfo.data.userInfos.firstName} />

          <div className="user__info-activity">
            {/* Section d'activité de l'utilisateur */}
            <div className="user__activity">
              <Activity />
              <div className="user__graph">
                <Session />
                <Performance />
                <Score />
              </div>
            </div> 

            {/* Section des données clés */}
            <aside className="user__sports">
              <KeyData icon={caloriesIcon} info={`${userInfo.data.keyData.calorieCount}kCal`} text="Calories"/>
              <KeyData icon={proteineIcon} info={`${userInfo.data.keyData.proteinCount}g`} text="Proteines"/>
              <KeyData icon={glucideIcon} info={`${userInfo.data.keyData.carbohydrateCount}g`} text="Glucides"/>
              <KeyData icon={lipideIcon} info={`${userInfo.data.keyData.lipidCount}g`} text="Lipides"/>
            </aside>
            </div>
        </div>
      ) : (
        // Message affiché si l'utilisateur n'existe pas
        <p>Utilisateur inexistant</p>
      )}
    </main>
  );
};

export default User;
