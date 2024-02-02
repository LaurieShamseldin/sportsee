import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
});

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
  }
}

const PerformanceApi = () => {
  const [userPerformance, setUserPerformance] = useState<ApiResponse| null>(null); // Changez ici pour un tableau d'ApiResponse
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`user/${id}/performance`);

        // Si vous souhaitez ajouter la nouvelle réponse à l'état, utilisez la fonction de mise à jour de l'état
        setUserPerformance(res.data);

        // Si vous souhaitez simplement remplacer l'état, utilisez setUserPerformance(res.data);
      } catch (error) {
        console.error(error);
        throw new Error("Une erreur s'est produite lors de la récupération des données de l'utilisateur.");
      }
    };

    fetchData();

  }, [id]); 
  return userPerformance;
};

export default PerformanceApi;
