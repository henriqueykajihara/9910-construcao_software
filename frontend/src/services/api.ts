/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios, { Method } from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/"
});

const useAxios = <T>(
  path: string,
  method: Method,
  body: any
): {loading: boolean, error: string | null, data: T} => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await api({
          url: path,
          method: method,
          data: body,
        });
        const data = response?.data;
        setData(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData().then((r) => r);
  }, [path]);

  return {loading, error, data};
};

export { useAxios, api };