import express from 'express'
import {User} from '../models/userModels.js';

import createSecretToken from '../util/SecretToken.js';

import 'dotenv/config'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';




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
            return response.json("Email already exists");
        } 
        const hashedPassword = bcrypt.hashSync(password, 8);

        const user = await User.create({ name, email, password:hashedPassword });
        response.status(201).json({message: "User signed in successfully", success: true, user});
    }
    
    catch (error) {
        console.log(error)
        response.status(400)
      
    }
});




// Ini Masih Salah
router.post("/login", async (request, response)=>{
   
    try {
        const {email, password} = request.body;
        const user = await User.findOne({email})
        
        if (!user) {
            return response.status(404).json("User not registered").status(404);
        }

        // const passwordMatch = bcrypt.compareSync(password, user.password).then(function(result) {
        //     result == true
        // });
        const passwordMatch = bcrypt.compareSync(password, user.password);

        console.log(password)
        console.log(user.password)
        console.log(passwordMatch)

    
        if (passwordMatch) {
            const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
            const token = jwt.sign({sub: user._id, exp: exp}, process.env.SECRET)

            response.cookie("Authorization", token, {
                expires: new Date (exp),
                httpOnly: true,
                sameSite: 'lax',
                // secure: process.env.NODE_ENV === "production",
            })
            response.json("Success").status(201)

            } 
        else {
            response.json("Wrong Password").status(402)
                
        }

        
    } catch (error) {
        // console.log(error)
        // console.log("error undifined")
        response.status(400).send({message: error.message})
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