// console.log("hello world")
// const date=Date();
// console.log(date);
var timestamp = Date.now();
// console.log(timestamp);
const data={timestamp};
const fs=require("fs")
const path=require("path")
console.log(data);
const { isUtf8 } = require('buffer');
const http=require('http')
const PORT= process.env.PORT||7000
let server= http.createServer((req,res)=>{
console.log("hello")
    try{

        let filepath=path.join(__dirname+"/timestamp.txt")
        let data=fs.writeFileSync(filepath,"hello")
        // res.WriteHead(200,{'Content-Type':'application/json'})
        res.end("successfully created") 
    }catch(error){
        console.log(error)
    }

})
server.listen(PORT,()=>console.log("server listening to"+PORT))
