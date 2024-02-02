import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { userPerformance } from '../mockApi';

interface KindMapping {
  [key: number]: string;
}

interface Datas {
  value: number;
  kind: number;
}

interface ApiResponse {
  data: {
    userId: number;
    kind: KindMapping;
    data: Datas[];
  };
}

const PerformanceMock = () => {
  const [userPerformanceData, setUserPerformanceData] = useState<ApiResponse | null>(null);
  const { id } = useParams();

  useEffect(() => {
    // Simulation de l'appel à une API avec des données statiques
    const user = userPerformance.find(user => user.data.userId.toString() === id);

    if (user) {
      setUserPerformanceData({ data: user.data }); 
    } else {
      console.error("Utilisateur non trouvé");
    }
  }, [id]);

  return userPerformanceData || null;
}

export default PerformanceMock;
