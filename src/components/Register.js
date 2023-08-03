import React, { useState } from 'react'
import RegisterationForm from '../components/RegisterationForm'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { register } from '../actions/auth';
import axios from 'axios'
const Register = () => {
  const navigate = useNavigate();
const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('');
const [address,setAddress] = useState('')
const [smaster,setSmaster] = useState('')
const [program,setProgram] = useState('')
const [course,setCourse] = useState('')
const [phonenumber,setPhoneNumber] = useState('')
const [college,setCollege] = useState('')
const [university,setUniversity] = useState('')

    const handleSubmit = async(e) => {
    e.preventDefault();
    try {
    const res = await register({
      name,
      email,
      password,
      address,
      smaster,
      program,
      course,
      phonenumber,
      college,
      university
    })
      console.log("REGISTER USER ===>",res);
      toast.success("User Register Successfully")
      setTimeout(() => {    
        navigate('/login');
      }, 5000); 
    } catch (error) {
      console.log(error);
      if(error.response.status===400){
        return(
          toast.error(error.response.data)
        )
      }
    }
  }

  return (
    <>
    <div className='container-fluid p-7 text-center'>
      <h1>This Is Register Page</h1>
    </div>
    <ToastContainer/>
    <div className='container'>
    <div className='row'>
    <div className='col-md-6 offset-md-3'>
    <RegisterationForm
    handleSubmit = {handleSubmit}
    name = {name}
    setName = {setName}
    email = {email}
    setEmail = {setEmail}
    password={password}
    setPassword={setPassword}
    address = {address}
    setAddress = {setAddress}
    smaster = {smaster}
    setSmaster = {setSmaster}
    program = {program}
    setProgram = {setProgram}
    course = {course}
    setCourse = {setCourse}
    phonenumber = {phonenumber}
    setPhoneNumber = {setPhoneNumber}
    college = {college}
    setCollege = {setCollege}
    university = {university}
    setUniversity = {setUniversity}
    />
    </div>
    </div>
    </div>
   </> 
  )
}

export default Register
