import { Mongo } from 'meteor/mongo'
import {Class} from 'meteor/jagi:astronomy'
import {Meteor} from 'meteor/meteor'

const UserProfile = Class.create({
  name: 'UserProfile',
  fields: {
    avatar: String,
  }
})

const User = Class.create({
  name: 'User',
  collection: Meteor.users,
  fields: {
    username: String,
    emails: {
      type: [Object],
      default: function() {
        return [];
      }
    },
    profile: {
      type: UserProfile,
      default: function() {
        return {};
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

if (Meteor.isServer) {
  User.extend({
    fields: {
      services: Object
    }
  });
}