import { Grid, GridItem } from "@chakra-ui/react";
import Template from "./Template";

export default function Info() {
  return (
    <Grid
     templateColumns={['1fr 1fr','1fr 1fr','1fr 1fr', 'repeat(5,1fr)']}
     w="100%"
     justifyContent="space-between"
     mt={["10", "32"]}
     mx="auto"
     maxW="1160px"
     gap={[1,5]}
    >
      <GridItem>
        <Template icon="cocktail" text="vida noturna"/>
      </GridItem>
      <GridItem>
        <Template icon="surf" text="praia"/>
      </GridItem>
      <GridItem>
        <Template icon="building" text="moderno"/>
      </GridItem>
      <GridItem>
        <Template icon="museum" text="clássico"/>
      </GridItem>
      <GridItem colSpan={[2,2,2,1]}>
        <Template icon="earth" text="e mais..."/>
      </GridItem>
    </Grid>
  )
}