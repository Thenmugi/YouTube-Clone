import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Videocard from '../Components/Videocard'

const Home = ({hidenav}) => {
  const [category,setCategory]=useState(0)
  return (
    <div style={{width:"100%"}} className='flex gap-7'>
        <Sidebar style={{width:"20%"}} hidenav={hidenav} category={category} setCategory={setCategory}/>
        <Videocard category={category} setCategory={setCategory}/> 
    </div>
  )
}

export default Home