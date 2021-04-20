//component & Method
import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Hello } from '../../component/GlobalComponent'
import { ListGameItem, NewGameList } from './GDBComp'
import { useTracker } from 'meteor/react-meteor-data'
import { Games } from '../../../db/game'

//chakraUi
import { 
  Box,
  VStack,
  Spinner,
  Heading,
} from '@chakra-ui/react'

export default function GameDb(){
  const {listLoading, listGame} = useTracker(() =>{
    const sub = Meteor.subscribe('listGame')
    if (!sub.ready()){
      return {listLoading: true, listGame: null}
    }
    const listGame = Games.find({},{sort: {createdAt:-1}}).fetch()
    return {listLoading: false, listGame}
  })

  return(
    <>
    <VStack w='80%' mx='auto'>
      <NewGameList />
      {listLoading && 
        <Box>
          <Spinner size='xl'/>
          <Heading>Menunggu loading data</Heading>
        </Box>
      }
      {listGame &&
        listGame.map(aGame => 
          <ListGameItem gameData={aGame} key={aGame._id} /> ) 
      }
    </VStack>
    </>
  )
}