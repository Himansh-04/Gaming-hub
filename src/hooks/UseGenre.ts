import { useQuery } from "@tanstack/react-query";
import genres from "../data/genre";
import apiClient from "../services/api-client";
import { FetchResponse } from "./UseData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 100, //24h
    initialData: { count: genres.length, results: genres }
  });

export default useGenres;
