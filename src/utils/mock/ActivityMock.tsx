import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { userActivity } from '../mockApi';


type Session = {
  day: string,
  kilogram: number,
  calories: number,
} 


const ActivityMock = () => {
  const [data, setData] =  useState<Session[]>([]);
  const { id } = useParams();

  useEffect(() => {
    // Simulation de l'appel à une API avec des données statiques
    const user = userActivity.find(user => user.data.userId.toString() === id);

    if (user) {
      console.log(user.data);
      setData(user.data.sessions);
    } else {
      console.error("Utilisateur non trouvé");
    }
  }, [id]);

  return data || null;
};

export default ActivityMock;
