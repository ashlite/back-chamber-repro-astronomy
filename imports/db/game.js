import { Mongo } from 'meteor/mongo'
import { Class } from 'meteor/jagi:astronomy'

export const Games = new Mongo.Collection('games');
export const Game = Class.create({
  name: 'Game',
  collection: Games,
  fields: {
    namaGame: {
      type: String,
      default:'untitled game'
    },
    creator: String,
    coverGame: {
      type: Object,
      optional: true,
      default: function() {
        return {}
      }
    },
    publishedAt: {
      type: Date,
      optional: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    paramCounters: {
      type: [Object],
      optional: true,
      default: function() {
        return {
          nama: String,
          nilaiDefault: Number,
          nilaiBatas: Number,
          sistem: String,
          durasi: Number,
          scene: String,
          paramIsActive:false
        }
      }
    },
  },
  behaviors: {
    timestamp: {
      hasCreatedField: true,
      createdFieldName: 'createdAt',
      hasUpdatedField: true,
      updatedFieldName: 'updatedAt'
    }
  },
  
})

export const DbGameItems = new Mongo.Collection('items')
export const DbGameItem = Class.create({
  name: 'DbGameItem',
  collection: DbGameItems,
  fields:{
    namaItem: {
      type: String,
      optional: true
    },
    gameId: {
      type: String
    },
    gambarItem: {
      type: Object,
      optional: true,
      default: function() {
        return {}
      }
    },
    textHelperFront: {
      type: String,
      optional: true
    },
    textHelperBack: {
      type: String,
      optional: true
    },
    helperImage: {
      type: Object,
      optional: true,
      default: function() {
        return {}
      }
    },
    state:{
      type: String,
      default: 'visible'
    },
    posX:{
      type: Number,
      optional: true
    },
    posY:{
      type: Number,
      optional: true
    },
    rotation:{
      type: Number,
      optional: true
    },
    scaleX:{
      type: Number,
      optional: true
    },
    scaleY:{
      type: Number,
      optional: true
    },
    anchor:{
      type: Number,
      optional: true
    },
    sceneId:{
      type: String,
      optional: true
    }
  },
  behaviors: {
    timestamp: {
      hasCreatedField: true,
      createdFieldName: 'createdAt',
      hasUpdatedField: true,
      updatedFieldName: 'updatedAt'
    }
  },
})

export const DbGameScenes = new Mongo.Collection('scenes')
export const DbGameScene = Class.create({
  name: 'DbGameScene',
  collection: DbGameScenes,
  fields:{
    nama: {
      type: String,
      optional: true
    },
    gameId: {
      type: String
    },
    gambarScene: {
      type: Object,
      optional: true,
      default: function() {
        return {}
      }
    },
    helperText: {
      type: String,
      optional: true
    },
    urutan: {
      type: Number,
    },
    jumpScene:{
      type: [Object],
      optional: true,
      default: function() {
        return {}
      }
    }
  },
  behaviors: {
    timestamp: {
      hasCreatedField: true,
      createdFieldName: 'createdAt',
      hasUpdatedField: true,
      updatedFieldName: 'updatedAt'
    }
  },
})