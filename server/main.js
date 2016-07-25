import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

  Accounts.loginServiceConfiguration.remove({
        service : 'twitter'
      });
 
      Accounts.loginServiceConfiguration.insert({
        service     : 'twitter',
        consumerKey : '	u8wIgZJPMYh05pYEQwaBN1DFs',
        secret      : '	oOkqJe6qeMJHYBhR3QgBl0oUmoD59llaYQcUwLnTwvlv8R3x44'
      });


});
