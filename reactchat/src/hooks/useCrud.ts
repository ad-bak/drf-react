import { useState } from "react";
import { BASE_URL } from "../../config";
import useAxiosWithInterceptor from "../helpers/jwtinterceptor";
import axios from "axios";

interface IUseCrud<T> {
  dataCrud: T[];
  fetchData: () => Promise<void>;
  error: Error | null;
  isLoading: boolean;
}

const useCrud = <T>(initialData: T[], apiURL: string): IUseCrud<T> => {
  const jwtAxios = useAxiosWithInterceptor();
  const [dataCrud, setDataCrud] = useState<T[]>(initialData);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await jwtAxios.get(`${BASE_URL}${apiURL}`, {});
      const data = response.data;
      setDataCrud(data);
      setError(null);
    } catch (error: unknown) {
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.status === 400
      ) {
        setError(new Error("400"));
        throw error;
      } else {
        // Handle other types of errors or rethrow the error
        setError(new Error("An unexpected error occurred"));
      }
    }
  };
  return { fetchData, dataCrud, error, isLoading };
};

export default useCrud;
