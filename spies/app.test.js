const expect = require('expect');
const rewire = require('rewire');

var app  =  rewire('./app');    // rewire load your app file and with two function __get__and __set__
describe('App',()=>{
  var db = {
     saveuser:expect.createSpy()} ;

app.__set__('db',db); // set db object in app.js to db var in our file

  it('should call the spy correctly',() =>{
     var spy = expect.createSpy();
     spy('andrew');
    // expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("andrew"); //to check whether spy is called with an arguement or not
   });
  it("save user called",()=>{
      var email = "ankitshr8@gmail.com";
      var password = "123acarv";
      app.handleSignup(email,password);
      expect(db.saveuser).toHaveBeenCalledWith({email,password}); //db.saveuser in this is our spy which is called just to check fi function is been called or not 
  });
});
