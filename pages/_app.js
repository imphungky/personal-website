import '../styles/globals.css'
import {ChakraProvider, CSSReset, VStack, HStack, Flex, Link, Icon} from "@chakra-ui/react";
import Nav from "../Components/Nav";
function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider>
    <CSSReset />
    <HStack as="main" h="100vh" w="100vw" alignItems="flex-start" bg="gray.800">
    <Nav />
    <Component {...pageProps} />
    </HStack>
  </ChakraProvider>
  )
}

export default MyApp
