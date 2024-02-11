import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Spinner from '../components/Spinner';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar()
  const handleSaveUser = (e) => {
    e.preventDefault()
    const data = {
      name, 
      email,
      password,
    }
    
    axios
      .post('http://localhost:5555/users/signup', data)
      .then((result) => {
        console.log(result)
        if(result.data == "Email already exists"){
          setLoading(false)
          enqueueSnackbar('Email Already Taken', {variant: 'error'})
        }
        else{
          setLoading(false)
          enqueueSnackbar('Sign Up Success, Please Login', {variant: 'Success'})
          navigate('/login')

        }
      })
      .catch((error) => {
        setLoading(false)
        enqueueSnackbar('Sign Up Error', {variant: 'error'})
        console.log(error)
      });

  }

  return (
    <div className='bg-backgroundputih'>
       <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center">
          <label className="mr-1 ">Sign Up</label>
          {loading ? <Spinner/> : ''}
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        </div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
            onClick={handleSaveUser}
          >
            Sign Up
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center">
           have an account?{" "}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="/login"
          >
            Login
          </a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Signup
