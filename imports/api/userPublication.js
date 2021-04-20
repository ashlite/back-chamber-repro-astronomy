import {Meteor} from 'meteor/meteor'
import '../db/user'

Meteor.publish('listUser', function(){
  return Meteor.users.find({}, {fields:
    {username:1, createdAt:1, emails:1}
  })
})

Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  } else {
    this.ready()
  }
})