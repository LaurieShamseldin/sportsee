import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
});

type Session = {
  kilogram: number;
  calories: number;
  payload: Array<{ pv: number; uv: number }>;
} 

type ApiResponse = {
  data : {
    sessions: Session[];
  }
}

const UserApi = () => {
  const [data, setData] = useState<Session[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = (await axiosInstance.get<ApiResponse>(`user/${id}/activity`)).data;
        setData(res.data.sessions);
      } catch (error) {
        console.error(error);
        throw new Error("Une erreur s'est produite lors de la récupération des données de l'utilisateur.");
      }
    };

    fetchData(); 

  }, [id]); 

  return data;
};


export default UserApi;

