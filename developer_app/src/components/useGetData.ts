// useGetData.js
import { useState, useEffect } from 'react';
import api from '../api/config'; // Importe a instância do Axios configurada

const useGetData = () => {
  const [data, setData] = useState([]);
  const [loadingGet, setLoadingGet] = useState(false);

  const fetchData = async () => {
    setLoadingGet(true);
    try {
      const response = await api.get('/chamado');
      setData(response.data);
    } catch (error) {
      console.error('Erro ao fazer requisição:', error);
    } finally {
      setLoadingGet(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loadingGet,
    refetchData: fetchData, // Exponha a função fetchData como refetchData
  };
};

export default useGetData;
