import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
const App = () => {
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
          <GenreList/>
        </GridItem>
      </Show>
      <GridItem area={`main`}>
     <GamesGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
