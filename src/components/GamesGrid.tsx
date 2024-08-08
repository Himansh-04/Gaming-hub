import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/UseGenre";
import { GameQuery } from "../App";

 interface Props {
  gameQuery:GameQuery;
}

const GamesGrid = ({ gameQuery}: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = Array.from({ length: 15 }, (_, index) => index);

  if (error) return <Text>{error}</Text>

  return (
    
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((_, index) => (
            <GameCardContainer key={index}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
   
  );
};

export default GamesGrid;
