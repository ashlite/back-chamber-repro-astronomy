import React, {useState, useRef} from 'react'

// method & component
import { Game } from '../../../db/game'
import { Meteor } from 'meteor/meteor'
import { useHistory } from 'react-router-dom' 
import { useFormatTanggal } from '../../component/CustomHooks'

// Chakra ui
import {
  Flex,
  Image,
  Heading,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'



export function ListGameItem({gameData}){
  //Meteor.subscribe('listGame', props.gameId)
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = useRef()
  const game = Game.findOne({_id:gameData._id})
  const history = useHistory()
  
  function HandlePublish(){
    console.log(game)
    game.callMethod('PublishGame', (err,result) => {
      err && alert(err.message)
      res && console.log(result)
    })
  }

  function HandleDeleteGame(){
    game.callMethod('DeleteGame', (err, result) => {})
    onClose()
  }

  function HandleEditor(id){
    history.push({
      pathname: '/editor',
      state: id
    })
  }


  return(
    <>
    <Flex w='full' borderRadius='lg' h='23vh' border='2px'>
      <Box mx={4} w='60%'>
        <Heading textAlign='left' size='2xl' isTruncated>{gameData.namaGame}</Heading>
        {gameData.isPublished ? 
          <Text textAlign='left' color='green.500'>Sudah publish dan aktif</Text>
        :
          <Text textAlign='left' color='yellow.500'>Belum di publish</Text>
        }
      </Box>
      <Box w='20%' mr={4} my='auto'>
      {gameData.isPublished ? 
        <>
        <Button size='lg' colorScheme='blue' w='full' onClick={HandlePublish}>Unpublish Game</Button>
        </>
      :
        <>
        <Button size='lg' colorScheme='blue' w='full' onClick={HandlePublish}>Publish Game</Button>
        </>
      }
        
      </Box>
    </Flex>
    </>
  )
}