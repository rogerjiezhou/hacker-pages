if(Meteor.isServer){
  Meteor.method({
    'hackers.insert'(newHackerObject){
      Hackers.insert(newHackerObject);
    }
  });
}



