// require("dotenv").config();
// const jwt = require("jsonwebtoken");

// export default createSecretToken = (id) => {
//   return jwt.sign({ id }, process.env.TOKEN_KEY, {
//     expiresIn: 3 * 24 * 60 * 60,
//   });
// };


import 'dotenv/config'
import jwt from 'jsonwebtoken';


const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn:  3 * 24 * 60 * 60,
  })
}

export default createSecretToken;
