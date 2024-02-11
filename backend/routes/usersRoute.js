import express from 'express'
import {User} from '../models/userModels.js';
// import { createSecretToken } from '../util/SecretToken.js'
import bcrypt from 'bcryptjs'



const router = express.Router();


router.post('/signup', async (request, response) => {
    try{
        if(
            !request.body.name ||
            !request.body.email ||
            !request.body.password
        ) {
            return response.status(400).send({
                message: 'Send all required fields: name, email, password'
            });
        }

        // const newUser = {
        //     name: request.body.name,
        //     email: request.body.email,
        //     password: request.body.password,
        // };
        const { name, email, password } = request.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            response.json("Email already exists");
        } 
        
        const user = await User.create({ name, email, password });
        // const token = createSecretToken(user._id)
        // response.cookie("token", token, {
        //     withCredentials: true,
        //     httpOnly: false,
        //   });

        response.status(201).json({message: "User signed in successfully", success: true, user});
        
    }
    
    catch (error) {
        console.log(error)
        response.status(500)
      
    }
});




// Ini Masih Salah
router.post("/login", async (request, response)=>{
    const {email,password} = request.body;
    try {
        const user = await User.findOne({email:email})
        if (user) {
            if (password === user.password) {
                response.json("Success").status(201)
            } else {
                response.json("Wrong Password").status(402)
             
            }
          } else {
            response.json("not registered").status(404)
        }
    } catch (error) {
        console.log(error)
        response.status(500).send({message: error.message})
    }
});


router.get('/', async (request, response) => {
    try {
        const users = await User.find({});
        return response.status(200).json({
            count: users.length,
            data: users
        })
    }
    catch (error) {
        console.log(error.message)
       
    }
})


export default router;