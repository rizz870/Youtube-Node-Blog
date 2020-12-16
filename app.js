// const name="rizwan yousaf";
// console.log(name);



//1-----------------------

// const fs = require("fs");
// fs.readFile("app.txt",(error,data) =>{
//    if(!error){
//             console.log(data.toString());
//    }
// })



//2-----------------------

// const fs = require("fs");
// const names='ali,imran,kamran';

// fs.writeFile("names.txt",names,(error) =>{
//    if(!error){
//         console.log("your file has been created");
//    }
// })


//3-----------------------

// const fs = require("fs");
// const names='ali,imran,kamran';

// const info=[
//     {id:1,name:'ali',email:'rizz@gmail.com'},
//     {id:2,name:'imran',email:'rizz@gmail.com'},
//     {id:3,name:'fizan',email:'rizz@gmail.com'}
// ]

// fs.writeFile('info.json',JSON.stringify(info),(error) =>{
//    if(!error){
//         console.log("your json file has been created");
//    }
// })


//4-----------------------

// const fs = require("fs");
// fs.unlink("app.txt",(error) => {
//     if(!error){
//         console.log("your file has been delete");
//     }
// });


//5-----------------------

// const fs = require("fs");
// const http = require("http");

// const server =http.createServer(function(req,res){

//     //console.log(req);
//     res.setHeader("content-Type","application/json");
//     const data={id:1,name:'bilal',address:'lahore'}

//     res.write(JSON.stringify(data));

//     res.write('<h1>Welcome node JS app</h1>');
//     res.end();


// })
// server.listen(5000,function(){
//     console.log('server is running on port number 5000');
// });




//6-----------------------


const http = require("http");


//const Routing=require("./routing");



const {Routing,showName} = require("./routing");

const PORT = process.env.PORT || 5000;

console.log(showName());

const server =http.createServer((req,res)=>{
    Routing(req,res);

})

server.listen(PORT, () => {
    console.log('server is running on port number:'+ PORT );
});




// server.listen(5000,function(){
//     console.log('server is running on port number 5000');
// });



////// extra code

/*

 res.setHeader('Content-Type','text/html');

 let page="";

  if(req.url ==="/"){
    page="./index.html";
  }
  else if(req.url==="/about"){
    page="./about.html";
  }
  else if(req.url==="/register"){
    page="./register.html";
  }
  else{
    page="./index.html";
  }
  fs.readFile(page,(error,data)=>{

    if(!error){
        res.write(data);
        res.end();
    }
  });


*/