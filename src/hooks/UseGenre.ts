import genres from '../data/genre';

export interface Genre {
  id: number;
  name: string;
  background_image: string;
}

const useGenres = () => {
  return { data: genres, isLoading: false, error: null };
};

export default useGenres;
