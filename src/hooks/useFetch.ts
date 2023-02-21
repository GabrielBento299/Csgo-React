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
      setItemsApi((prevState) => [...prevState, ...response.data]);
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  }

  // eslint-disable-next-line consistent-return
  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop
         < document.documentElement.offsetHeight || page === totalPage) {
      return;
    }

    setPage((state) => state + 1);
  }

  useEffect(() => {
    loadData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return {
    loading,
    page,
    itemsApi,
    totalPage,
  };
}
