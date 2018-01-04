const expect = require("expect");
 const utils = require("./utils");
// desscibe do logical groupings
 describe('utils',()=>{
     describe("#asyncadd",()=>{
       it("should add two numbers async",(done)=>{
       utils.asyncadd(4,3,(sum)=>{
          expect(sum).toBe(7).toBeA("number");
        done();
        });

       });
     });


   it("shoud be async sq",(done)=>{
     utils.asyncsq(3,(sq)=>{
       expect(sq).toBe(9).toBeA("number");
       done();
     });
   });

 });

 it("should add two numbers",()=>{
    var res = utils.add(33,11);
    expect(res).toBe(66).toBeA("number"); //chaining assertion
    //try{
 /*     if(res !== 44)
 throw new Error(`excepted 44 but got ${res}`);}
   catch(e)
   {
      console.log("add failed");
   }
 */
});
it("should square two numbers",() => {
var res = utils.square(3);
/* try{if(res !== 9)
   throw new Error(`excepted value was 9 but we got ${res}`);
 }
 catch(e)
 {
   console.log("you just messed your code buddy");
 }
*/
expect(res).toBe(9).toBeA("number");
});
it("should expect some value",()=>{
 //  expect(12).toNotBe(12); checking only primitve
  //expect({name:"ankit"}).toBe({name:"ankit"}); will not work for  objects
 expect({name:"ankit"}).toEqual({name:"ankit"}); //can also toNotEqual
 expect([1,3,4]).toExclude(5);// can use  toInclude
 expect({
   name :"ankit",
   age :21,
   location :"jhansi"
}).toInclude({age:21});
});
it("should be a object",()=>{
    var user = {location:"jhansi",age:32};
   var res = utils.setname(user,"ankit sharma");
   expect(res).toBeA("object").toInclude({firstname:"ankit",lastname:"sharma"}); // dont use toEqual it maches every property of a object  
    //use toInclude
});
// if we dont use done callback fuction will be fired a  bit late so it has been executed and test is passed
