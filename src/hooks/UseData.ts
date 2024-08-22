import { useEffect, useState} from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
 
export interface FetchResponse<T>{
    count:number;
    results:T[];
}


const UseData=<T>(endpoint:string, requestConfig?:AxiosRequestConfig,deps?:any[] )=>{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
        .then((res) => {
          setData(res.data.results);
          setLoading(false); // Set loading to false after successful fetch
        })
        .catch((err) => {
          if (err instanceof CanceledError) return; // Do nothing if request is canceled
          setError(err.message);
          setLoading(false); // Set loading to false in case of error
        });
  
      return () => controller.abort(); // Cleanup function to cancel the request if the component unmounts
    }, deps? [...deps]:[]);
  
    return { data, error, isLoading };
  };

export default UseData