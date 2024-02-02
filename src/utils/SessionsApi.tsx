import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router";

// Création d'une instance Axios avec une base URL
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
});

// Interface représentant une session
interface Session {
  day: string;
  sessionLength: number;
}

// Interface représentant la structure de la réponse de l'API
interface ApiResponse {
  data: {
    sessions: Session[];
  };
}

/**
 * Composant React pour récupérer les sessions moyennes d'un utilisateur depuis une API.
 * @returns Un tableau de sessions moyennes ou un tableau vide si l'utilisateur n'est pas trouvé.
 */
const SessionsApi = () => {
  // État local pour stocker les sessions moyennes de l'utilisateur
  const [userSession, setUserSession] = useState<Session[]>([]);
  
  // Utilisation du hook useParams pour obtenir l'ID de l'utilisateur depuis les paramètres de l'URL
  const { id } = useParams();

  // Utilisation du hook useEffect pour effectuer la requête API lors du montage du composant
  useEffect(() => {
    // Fonction asynchrone pour effectuer la requête API
    const fetchData = async () => {
      try {
        // Appel à l'API pour obtenir les sessions moyennes de l'utilisateur avec l'ID spécifié
        const res = await axiosInstance.get<ApiResponse>(`user/${id}/average-sessions`);
        
        // Mise à jour de l'état local avec les données reçues de l'API
        setUserSession(res.data.data.sessions);
      
      } catch (error) {
        // Gestion des erreurs en cas d'échec de la requête
        console.error(error);
        throw new Error("Une erreur s'est produite lors de la récupération des données de l'utilisateur.");
      }
    };

    // Appel de la fonction fetchData lors du montage du composant
    fetchData(); 

  }, [id]); // Dépendance du hook useEffect sur l'ID de l'utilisateur

  // Retourne le tableau de sessions moyennes de l'utilisateur ou un tableau vide si non trouvé
  return userSession;
};

// Exporte le composant SessionsApi
export default SessionsApi;
