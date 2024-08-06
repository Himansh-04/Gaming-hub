import { Button, ButtonGroup, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/UseGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery{
  genre:Genre|null;
  platform:Platform|null;
  sortOrder:string;
}

const App = () => {
 const [gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery)
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      
      <GridItem area={`nav`} >
      <Navbar/>
      </GridItem>
      
      <Show above="lg">
        <GridItem area={`aside`} paddingX={5} width='200px'>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery({...gameQuery , genre})}/>
        </GridItem>
      </Show>
      <GridItem area={`main`}> 
     <HStack spacing={5} paddingLeft={2}marginBottom={5}>
     <PlatformSelector  selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
     <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})}/>
     </HStack>
     <GamesGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
};

export default App;
