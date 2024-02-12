import 'dotenv/config';
import mongoose from 'mongoose'

async function connectToDb(){
    try{
    await mongoose
        .set("strictQuery", false)
        .connect(process.env.mongoDBURL, {useNewUrlParser: true, useUnifiedTopology: true,})
            console.log(`App connected to database ${process.env.NameDB}`);    
    } catch(error){
        console.log(error)
    }
}

export default connectToDb