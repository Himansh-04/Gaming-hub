import { useQuery } from "@tanstack/react-query";
import UseData, { FetchResponse } from "./UseData";
import apiClient from "../services/api-client";
import platform from "../data/platform";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
    useQuery<FetchResponse<Platform>>({
      queryKey: ["platforms"],
      queryFn: () =>
        apiClient
          .get<FetchResponse<Platform>>("/platforms/lists/parents")
          .then((res) => res.data),
      staleTime: 24 * 60 * 60 * 1000, // 24 hours
      initialData: { count: platform.length, results: platform }, 
    });

export default usePlatforms;
