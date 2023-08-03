import React from 'react'
import {useSelector,useStore} from "react-redux"

const Home = () => {
    const state = useSelector((state)=> state);
  return (
    <div className='container-fluid p-5 text-center h1' >This Is Home Page{JSON.stringify(state)}</div>
  )
}

export default Home
