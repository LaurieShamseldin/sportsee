// == Import modules
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './Pages/Home';
import User from './Pages/User';

/**
 * Composant principal de l'application.
 * @component
 * @returns {JSX.Element} Élément JSX représentant l'application.
 */
const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      {/* En-tête de l'application */}
      <Header />
      {/* Contenu principal de l'application */}
      <main className="main">
        {/* Barre latérale de l'application */}
        <Sidebar />
        {/* Configuration des routes */}
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route path="/" element={<Home />} />
          {/* Route pour la page utilisateur */}
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

// == Export
export default App;
