import { Box, Text, Container, Flex, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import Nav from '../comps/Nav'
import Signup from '../comps/Signup'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Box color="black" backgroundColor="white">
    <Container backgroundColor="white" maxW="container.xl" p={0}>
      <Nav />
      <Flex h="100vh" alignItems="center" justifyContent="center">
        <Box
          pos="absolute" w="100%" zIndex={0}
          backgroundImage="url('./image.png')"
          backgroundPosition="center"
          background-size="cover"
          backgroundRepeat="no-repeat"
          height="100vh"
        />
        <Signup         
          zIndex={1} />


      </Flex>
    </Container>
    </Box>
  )
}
