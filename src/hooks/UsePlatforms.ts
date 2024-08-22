import { useQuery } from "@tanstack/react-query";
import platform from "../data/platform";
import APIClient, {  FetchResponse } from "../services/api-client";

const apiClient=new APIClient<Platform>('/Platform/lists/parents');

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: platform.length, results: platform },
  });

export default usePlatforms;
