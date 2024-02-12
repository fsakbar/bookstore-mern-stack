import jwt from 'jsonwebtoken'
import {User} from '../models/userModels.js'


async function requireAuth(request, response, next){
    try{
        const token = request.cookies.Authorization;
        const decoded = jwt.verify(token, process.env.SECRET);



        if (Date.now() > decoded.app)return response.sendStatus(401)


        const user = await User.findById(decoded.sub)
        if(!user) return response.sendStatus(401)


        request.user = user;
        console.log("In Middleware")
        next();
    } catch (error) {
        console.log(error)
        return response.sendStatus(401)
    }
}

export default requireAuth;