import { useState, useEffect } from 'react';
import api from '../api/config';

const usePutStatus = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const putStatus = async (_id: string, newStatus: boolean) => {
    setLoading(true);
    try {
      await api.put(`/chamado/${_id}`, { status: newStatus });
      setError(undefined);
    } catch (err: any) {
      setError(err.message || 'Ocorreu um erro ao atualizar o status do item.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      const _id = 'exemplo_id';
      const newStatus = true;
      putStatus(_id, newStatus);
  }, []);

  return { loading, error, putStatus };
};

export default usePutStatus;
