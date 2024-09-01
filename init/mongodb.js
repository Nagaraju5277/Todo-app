const mongoose =require("mongoose");



const connectMongodb =async () =>{
    try{
await mongoose.connect(process.env.CONNECTION_Url);
console.log("Database connection succesful")
    }catch(error){
        console.log(error.message)
        process.exit(1)
    }
}

module.exports =connectMongodb;