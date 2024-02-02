import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { users } from '../mockApi';

type UserInfo = {
  data: {
    id: number;
    userInfos: {
      firstName: string;
      lastName: string;
      age: number;
    };
    score?: number,
    keyData: {
      calorieCount: number;
      proteinCount: number;
      carbohydrateCount: number;
      lipidCount: number;
    };
  };
} | null;

const UserMock = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const { id } = useParams();

  useEffect(() => {
    // Simulation de l'appel à une API avec des données statiques
    const user = users.find(user => user.data.id.toString() === id);

    if (user) {
      setUserInfo(user);
    } else {
      console.error("Utilisateur non trouvé");
    }
  }, [id]);

  return userInfo || null;
};

export default UserMock
