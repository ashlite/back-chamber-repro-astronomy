import React from "react"
import {Meteor} from'meteor/meteor'

//Chakra-ui
import {
  Text,
  Flex,
  VStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
  Box,
  Spacer,
  IconButton,
  useColorMode,
  Icon,
} from "@chakra-ui/react"
import { HiSun, HiMoon, HiHome} from 'react-icons/hi'

//Component
import { Link, useHistory } from 'react-router-dom'

export function Footer(){
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Flex align="center" justify="center" bgGradient="linear(to-br, blue.600, blue.400)" py="6">
      <footer>
      <VStack>
        <Text>Aplikasi Online Experience v0.1.0</Text>
        <Text color="white">© 2020 - {new Date().getFullYear()} by Tabletoys</Text>
        <Button variant='link' onClick={onOpen} colorScheme='yellow'>Credits</Button>
      </VStack>
      </footer>
    </Flex>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Credits</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text as="em" color="white">Create by 
          <a href="https://instagram.com/david.sun2so">
            <Text color='blue.400'>David Santoso</Text>
          </a></Text>
        </ModalBody>
      </ModalContent>
    </Modal>
    </>
  )
}

export function Hello(props){
  const { colorMode, toggleColorMode } = useColorMode()
  const history = useHistory()

  function handleLogOut(){
    Meteor.logout()
    history.push('/login')
  }

  return (
    <>
    <Flex w='full' py={2} px={4} bgGradient='linear(to-r, blue.600, blue.400)'>
      <Box>
        <Heading as='h1' size='xl' textAlign='left'>
          {props.teks ? props.teks : "HOST : " + Meteor.user().username}
        </Heading>
      </Box>
      <Spacer />
      <Box>
        {props.backhome ? <Link to='/dashboard'><IconButton 
          aria-label='back to home'
          size='lg'
          colorScheme='green'
          icon={<Icon as={HiHome}/>}
        /></Link> : null}

        {props.page != 'host' ?
          <Button onClick={handleLogOut} colorScheme='red' size='lg' ml={4}>
            Logout
          </Button>
        : null }

        <IconButton 
          ml={4}
          onClick={toggleColorMode}
          aria-label='toogle dark mode'
          size='lg'
          colorScheme='yellow'
          icon={colorMode === "light" ?  <Icon as={HiSun}/> : <Icon as={HiMoon}/>}
        />        
      </Box>
    </Flex>
    </>
  )
}
