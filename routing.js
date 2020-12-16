
const fs = require("fs");

const Routing=(req,res) =>{

    if(req.url ==="/"){
        page="./home.html";
      }
      else if(req.url==="/about"){
        page="./about.html";
      }
      else if(req.url==="/register"){
        page="./register.html";
      }
      else{
        page="./home.html";
      }
      
      fs.readFile(page,(error,data)=>{
    
        if(!error){
            res.write(data);
            res.end();
        }
      });

}

const showName =()=>{
    console.log("Hello World");
}

//module.exports=Routing;

module.exports ={
    Routing,
    showName
};

