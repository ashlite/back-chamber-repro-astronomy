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
      <Image src={gameData.coverGame.thumbnailUrl} fallbackSrc='https://ik.imagekit.io/tabletoys/fallback__Uak9Pgc7.png' w='20%' h='full' objectFit='cover'/>
      <Box mx={4} w='60%'>
        <Heading textAlign='left' size='2xl' isTruncated>{gameData.namaGame}</Heading>
        <Heading textAlign='left' size='lg' isTruncated>by {gameData.creator}</Heading>
        <Text textAlign='left' color='gray.500'>Dibuat pada: {useFormatTanggal(gameData.createdAt, 'full')}</Text>
        <Text textAlign='left' color='gray.500'>Update terakhir: {useFormatTanggal(gameData.updatedAt, 'full')}</Text>
        {gameData.isPublished ? 
          <Text textAlign='left' color='green.500'>Sudah publish dan aktif</Text>
        :
          <Text textAlign='left' color='yellow.500'>Belum di publish</Text>
        }
      </Box>
      <Box w='20%' mr={4} my='auto'>
      {gameData.isPublished ? 
        <>
        <Button size='lg' colorScheme='green' w='full' isDisabled>Edit</Button>
        <Button size='lg' colorScheme='red' my={2} w='full' isDisabled>Delete</Button>
        <Button size='lg' colorScheme='blue' w='full' onClick={HandlePublish}>Unpublish Game</Button>
        </>
      :
        <>
        <Button size='lg' colorScheme='green' w='full' isDisabled>Edit</Button>
        <Button size='lg' colorScheme='red' my={2} w='full' isDisabled>Delete</Button>
        <Button size='lg' colorScheme='blue' w='full' onClick={HandlePublish}>Publish Game</Button>
        </>
      }
        
      </Box>
    </Flex>

    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
    <AlertDialogOverlay>
      <AlertDialogContent>
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          Hapus Game {gameData.namaGame}
        </AlertDialogHeader>

        <AlertDialogBody>
          Apakah kamu yakin mau menghapus game {gameData.namaGame} ? Sekali dihapus, semua data game akan hilang.
        </AlertDialogBody>

        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="red" ml={3} onClick={HandleDeleteGame}>
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogOverlay>
    </AlertDialog>
    </>
  )
}

export function NewGameList(){
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [judul, setJudul] = useState('')
  const [hasil, setHasil] = useState(null)
  const addGame = new Game()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    addGame.callMethod('AddNewGame', judul, Meteor.user().username, (err, result) => {
      result ? setHasil('Game '+ judul+' berhasil ditambahkan') : setHasil(err.message) 
    })
  }

  const onCancel = () => {
    onClose()
    setJudul('')
    setHasil(null)
  }

  return(
    <>
    <Flex w='full' borderRadius='lg' h={100} as='button' my={4} bgColor='green.400' justifyContent='center' alignItems='center' _hover={{bgColor:'green.700'}} onClick={onOpen}>
      <Heading>Tambah Game Baru</Heading>
    </Flex>

    <Modal isOpen={isOpen} onClose={onCancel}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Tambah Game Baru</ModalHeader>
      <ModalCloseButton onClick={onCancel} />
      {hasil ?
        <>
        <ModalBody my={4}>
          <Text>{hasil}</Text>
        </ModalBody>
        </>
        :
        <form onSubmit={handleSubmit}>
        <ModalBody>
          <FormControl isRequired>
            <FormLabel>Nama Game</FormLabel>
            <Input type='text' value={judul} onChange={(e) => setJudul(e.target.value)}/>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='green' type='submit'>Submit</Button>
        </ModalFooter>
        </form>
      }
    </ModalContent>
    </Modal>
    </>
  )
}