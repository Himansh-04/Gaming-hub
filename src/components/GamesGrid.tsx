import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/UseGenre";

interface Props{
  selectedGenre: Genre|null
}

const GamesGrid = ({selectedGenre}:Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding="10px"
      >
        {isLoading &&
          Skeletons.map((Skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton  />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id} >
            <GameCard  game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
