import axios from 'axios';
import React, { useState } from 'react'
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const {enqueueSnackbar} = useSnackbar()

  const handleLoginUser =  (e) => {
    e.preventDefault()
    const data = {
      email,
      password
    }

    axios
      .post('http://localhost:3000/users/login', data)
      .then((result) => {
          console.log(result)
          if(result.data === "Success"){
            setLoading(false);
            enqueueSnackbar('Login Successfully', {variant: 'success'})
            navigate('/home')
          }
          else if(result.data= "Wrong Password")
          {
            setLoading(false);
            enqueueSnackbar('Login Error Incorrect, Please Try Again', {variant: 'error'})
          }
          else {
            setLoading(false);
            enqueueSnackbar('Login Error Incorrect, Please Try Again', {variant: 'error'})
          }

        
      })
      .catch((error) => {
        // setLoading(false)
        // enqueueSnackbar('Login Error', {variant: 'error'})
        console.log(error)
      })
  }



  return (
    <div className='bg-backgroundputih'>
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
   <div className="md:w-1/3 max-w-sm">
     <div className="text-center">
       <label className="mr-1 font-semi-bold">Login</label>
       {loading ? <Spinner/> : ''}
     </div>
     <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
     </div>
    
     <input
       className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
       type="text"
       placeholder="Email Address"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
     />
     <input
       className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
       type="password"
       placeholder="Password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
     />

     <div className="mt-4 flex justify-between font-semibold text-sm">         
     </div>
     <div className="text-center">
       <button
         className="mt-4 bg-blue-600 hover:bg-primary px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
         type="submit"
         onClick={handleLoginUser}
       >
         Login
       </button>
     </div>
     <div className="mt-4 font-semibold text-sm text-slate-500 text-center">
        don't have an account?{" "}
       <a
         className="text-red-600 hover:underline hover:underline-offset-4"
         href="/signup"
       >
         Sign up
       </a>
     </div>
   </div>
 </section>

 </div>
  )
}

export default Login
