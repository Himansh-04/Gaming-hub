import {
  Box,
  Flex,
  Grid,
  GridItem,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/UseGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/UsePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={`nav`}>
        <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
      </GridItem>

      <Show above="lg">
        <GridItem area={`aside`} paddingX={5} width="200px">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area={`main`}>
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery}/>
          <Flex  marginBottom={5}>
      
          <Box marginRight={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
          </Box>
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
            
        </Flex>
        </Box>  
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
