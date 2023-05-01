import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Info from "@/components/Info";
import Separator from "@/components/Separator";
import Slider from "@/components/Slider";
import { Flex, Heading } from "@chakra-ui/react";


export default function Home() {
  return (
   <Flex direction="column">
     <Header />
     <Banner />
     <Info />
     <Separator />

     <Heading
      textAlign="center"
      fontWeight="500"
      mb={["5", "14"]}
      fontSize={["lg", "3xl", "4xl"]}
     >
       Vamos nessa?
       <br />
       Então escolha seu continente
     </Heading>

     <Slider />
   </Flex>
  )
}