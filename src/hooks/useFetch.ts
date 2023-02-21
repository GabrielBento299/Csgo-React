import { useState, useEffect } from 'react';
import { api } from '../services/api';

export default function useFetch(endPoint: string) {
  const [itemsApi, setItemsApi] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const itemPerPage = 12;

  async function loadData() {
    setLoading(true);
    try {
      const response = await api.get(`/${endPoint}?_page=${page}&_limit=${itemPerPage}`);
      setTotalPage(Number(response.headers['x-total-count'] / itemPerPage));
      setItemsApi(response.data);
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return {
    loading,
    page,
    itemsApi,
    totalPage,
  };
}
