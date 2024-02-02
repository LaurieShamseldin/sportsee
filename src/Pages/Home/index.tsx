import ButtonUser from '../../components/ButtonUser';

import './style.css';
/**
 * Composant représentant la page d'accueil de l'application.
 * @component
 * @returns {JSX.Element} Élément JSX représentant le composant Home.
 */

const Home = (): JSX.Element => (
  <div className="home">
    <h1 className="home__title">Sélectionnez l'utilisateur souhaité</h1>
    <ButtonUser userId={12}/>
    <ButtonUser userId={18}/>
  </div>
);

export default Home;