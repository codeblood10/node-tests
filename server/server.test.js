const request = require("supertest");
const expect  =  require('expect');
var  app = require('./server').app;
describe("server",()=>{
  describe("root",()=>{ it("should return some reponse",(done) =>{
    request(app)
     .get('/')
     .expect(200)
    //.expect({error:"page not found"})
     .expect((res)=>{
       expect(res.body).toInclude({error :"page not found"});  // excpect from the expect library
     })
     .end(done);
  });});
  describe("/user",()=>{it("should return a user array",(done)=>{
    request(app)
     .get('/user')
     .expect(200)
     .expect((res)=>{
       expect(res.body).toInclude({name:"ankit",age:20});
     })
     .end(done);
  });});
});
