// module.exports={
//     MONGOURI:"mongodb+srv://VidushiGandhi:YhbuK3ov4gZHlJxG@cluster0.x9v8k85.mongodb.net/?retryWrites=true&w=majority",
//     JWT_SECRET:"gdjhvvdhjddhdbhdbjhonsbdvuhbqwnkqxsab"
// }



const { default: mongoose } = require('mongoose');
 
 
 const moongoose=require('mongoose');
 
 
//  const mongoURI ="mongodb://localhost:27017/inotebook"
 const mongoURI ="mongodb+srv://VidushiGandhi:YhbuK3ov4gZHlJxG@cluster0.x9v8k85.mongodb.net/?retryWrites=true&w=majority"
  

 const connectToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo Successfully");
    })
 }

 module.exports = connectToMongo;