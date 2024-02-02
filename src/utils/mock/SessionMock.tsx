import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { userSessions } from '../mockApi';


// Interface représentant une session
interface Session {
  day: number,
  sessionLength: number,
}

const SessionMock = () => {
  const [userSession, setUserSession] = useState<Session[]>([]);
  const { id } = useParams();

  useEffect(() => {
    // Simulation de l'appel à une API avec des données statiques
    const user = userSessions.find(user => user.data.userId.toString() === id);

    if (user) {
      setUserSession(user.data.sessions);
    } else {
      console.error("Utilisateur non trouvé");
    }
  }, [id]);

  return userSession || null;
};

export default SessionMock;
