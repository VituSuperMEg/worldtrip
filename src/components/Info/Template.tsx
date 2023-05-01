import { Flex, useBreakpointValue, Image, Text } from "@chakra-ui/react";

interface Props {
  icon : string;
  text : string;
}
export default function Template({icon,text}:Props) {
  const isMobile =  useBreakpointValue({
    base : false,
    sm : true
  })
  return(
    <Flex
     direction={['row', 'column']}
     align="center"
     justify="center"
    >
     {isMobile ? 
      <Image src={`/icons/${icon}`} w="85px" mb="6" />
      :
      <Text color="yellow" fontSize="4xl" m="6">°</Text>
     }
     <Text fontWeight="600" color="gray.700" fontSize={['md', 'xl', '2xl']}>{text}</Text>
    </Flex>
  )
}