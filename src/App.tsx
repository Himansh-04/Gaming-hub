import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={`nav`} bg={`blue`}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area={`aside`} bg={`coral`}>
          ASide
        </GridItem>
      </Show>
      <GridItem area={`main`} bg={`pink`}>
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
