import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router";



// Création d'une instance Axios avec une base URL
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
});

// Définition du type des informations de l'utilisateur
type UserInfoType = {
  data: {
    userInfos: {
      firstName: string;
    };
    keyData: {
      calorieCount: number,
      proteinCount:  number,
      carbohydrateCount:  number,
      lipidCount:  number,
    };
    score : number,
    todayScore : number,
  }
} | null;

/**
 * Composant React pour récupérer les informations d'un utilisateur depuis une API.
 * @returns Les informations de l'utilisateur ou null si l'utilisateur n'est pas trouvé.
 */
const UserApi = () => {
  // État local pour stocker les informations de l'utilisateur
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);
  
  // Utilisation du hook useParams pour obtenir l'ID de l'utilisateur depuis les paramètres de l'URL
  const { id } = useParams();

  // Utilisation du hook useEffect pour effectuer la requête API lors du montage du composant
  useEffect(() => {
    // Fonction asynchrone pour effectuer la requête API
    const fetchData = async () => {
      try {
        // Appel à l'API pour obtenir les informations de l'utilisateur avec l'ID spécifié
        const res = await axiosInstance.get(`user/${id}`);
        // Mise à jour de l'état local avec les données reçues de l'API
        setUserInfo(res.data);
      } catch (error) {
        // Gestion des erreurs en cas d'échec de la requête
        console.error(error);
        throw new Error("Une erreur s'est produite lors de la récupération des données de l'utilisateur.");
      }
    };

    // Appel de la fonction fetchData lors du montage du composant
    fetchData(); 

  }, [id]); // Dépendance du hook useEffect sur l'ID de l'utilisateur

  // Retourne les informations de l'utilisateur ou null si non trouvé
  return userInfo || null;
};

// Exporte le composant UserApi
export default UserApi;
