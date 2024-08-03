import { useEffect, useState} from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
interface Genre{
    id:number;
    name:string;
}
interface FetchGenresResponse{
    count:number;
    result:Genre[];
}

const UseGenre=()=>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchGenresResponse>("/genres", { signal: controller.signal })
        .then((res) => {
          setGenres(res.data.results);
          setLoading(false); // Set loading to false after successful fetch
        })
        .catch((err) => {
          if (err instanceof CanceledError) return; // Do nothing if request is canceled
          setError(err.message);
          setLoading(false); // Set loading to false in case of error
        });
  
      return () => controller.abort(); // Cleanup function to cancel the request if the component unmounts
    }, []);
  
    return { genres, error, isLoading };
  };

export default UseGenre