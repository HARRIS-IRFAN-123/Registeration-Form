import React, { useState } from 'react'
import {toast} from 'react-toastify'
import { login } from './actions/auth'
import LoginForm from './components/LoginForm'
const Login = () => {
const [email,setEmail] = useState("")
const [password,setPassword] = useState("");
const handleSubmit = async(e) =>{
  e.preventDefault();
  console.log("Send Login Data",{email,password})
  try {
  let res =  await login({email,password})
  console.log('LOGIN RESPONSE',res)
  if(res.data){
    console.log('Save User res in redux and local storage then redirect ===> ')
  }
  } catch (error) {
    console.log(error)
    if (error.response && error.response.status === 400) {
      toast.error(error.response.data);
    }
  }
}
  return (
    <>
    <div className='container-fluid p-5 text-center'>
      <h1>This Is Login Page</h1>
    </div>
    <div className='container'>
    <div className='row'>
    <div className='col-md-6 offset-md-3'></div>
    <LoginForm
    handleSubmit = {handleSubmit}
    email = {email}
    setEmail = {setEmail}
    password = {password}
    setPassword = {setPassword}
    />
    
    </div>
    </div>
    </>
  )
}

export default Login
