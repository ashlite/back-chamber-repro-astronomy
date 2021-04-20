import {Meteor} from 'meteor/meteor'
import {Games, Game, DbGameItems, DbGameItem, DbGameScene, DbGameScenes} from '../db/game'

Meteor.publish('listGame', function(gameId){
  
  if (!this.userId){
    return this.ready()
  }
  
  if (gameId != null) {
    return Game.find({_id: gameId})
  } else {
    return Games.find({}, {
      fields: {
        namaGame: 1, 
        creator: 1, 
        coverGame: 1, 
        createdAt: 1,
        isPublished: 1,
        updatedAt: 1
      }
    })
  }
})

Meteor.publish('listItem', function(gameId){
  if (!this.userId){
    return this.ready()
  }
  return DbGameItems.find({gameId: gameId}, {
    fields: {
      _id: 1,
      gameId: 1
    }
  })
})

Meteor.publish('singleItem', function(itemId){
  if (!this.userId){
    return this.ready()
  }
  return DbGameItem.find({_id: itemId})
})

Meteor.publish('listScene', function(gameId){
  if (!this.userId){
    return this.ready()
  }
  return DbGameScenes.find({gameId: gameId}, {
    fields: {
      _id: 1,
      gameId: 1,
      nama: 1,
      gambarScene: 1,
      updatedAt: 1,
      urutan: 1
    },
    sort: {
      urutan: 1
    }
  })
})

Meteor.publish('singleScene', function(sceneId){
  if (!this.userId){
    return this.ready()
  }
  return DbGameScene.find({_id: sceneId}, { })
})