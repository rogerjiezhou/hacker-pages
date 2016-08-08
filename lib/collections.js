Hackers = new Mongo.Collection('Hackers');

if(Meteor.isServer){
  Meteor.publish('Hackers', function hackersPublication(){
    return Hackers.find({'alligiance' : 'White Hat'});
  });
}
