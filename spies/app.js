 var db = require('./db.js')
  module.exports.handleSignup =(email,password) =>{

    db.saveuser({email,password});

};
