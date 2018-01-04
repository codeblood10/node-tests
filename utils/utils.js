module.exports.add  = (a,b) => a+b+22;

module.exports.asyncadd = (a,b,callback) =>  {
  setTimeout(()=>{
   callback(a+b);
 },1000);
};
module.exports.asyncsq =(a,callback) => {
  setTimeout(()=>{
     callback(a*a); 
   },1000);
};
module.exports.square = (a) => a*a;
module.exports.setname = (user,fullname) => {
 var names = fullname.split(" ");
 user.firstname = names[0];
 user.lastname  = names[1];
 return user;
};
