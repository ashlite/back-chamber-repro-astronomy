import {Meteor} from 'meteor/meteor'
import {Game, DbGameItem, DbGameScene} from '../db/game'
// const ImageKit = require ('imagekit')

Game.extend({
  meteorMethods: {
    DeleteGame(){
      return this.remove()
    },
    PublishGame(){
      oldData = this.isPublished
      this.isPublished = !oldData
      if (this.isPublished){
        this.publishedAt = new Date()
      }
      return this.save()
    }
  }
})

Meteor.methods({
  'IkDelPurge'(gambarObject){
    // Method for removing image in CDN sever
  }
});