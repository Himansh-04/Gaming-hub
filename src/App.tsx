import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/UseGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
const App = () => {
  const [selectedGenre, setSelectedGenere]=useState<Genre|null>(null);
  const[selectedPlatform,setSelectedPlatform]=useState<Platform|null>(null);
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
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=>setSelectedGenere(genre)}/>
        </GridItem>
      </Show>
      <GridItem area={`main`}> 
        <PlatformSelector  selectedPlatform={selectedPlatform} onSelectPlatform={(platform)=>setSelectedPlatform(platform)}/> 
     <GamesGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default App;
