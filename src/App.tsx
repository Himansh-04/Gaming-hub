import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/UseGenre";
const App = () => {
  const [selectedGenre, setSelectedGenere]=useState<Genre|null>(null);
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
     <GamesGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default App;
