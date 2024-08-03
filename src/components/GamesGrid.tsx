import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { px } from "framer-motion";
import GameCardSkeleton from "./GameCardSkeleton";

const GamesGrid = () => {
  const { games, error ,isLoading} = useGames();
  const Skeletons=[1,2,3,4,5,6,7,8,9,10];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {isLoading && Skeletons.map(Skeleton=><GameCardSkeleton key={Skeleton}/>)}
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
