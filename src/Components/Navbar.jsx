import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";
import { FiVideo } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import Youtube from '../Assets/youtube.png'

const Navbar = ({className,setHidenav}) => {
  return (
    <div className={`${className}`} >
        <div className="nav-left flex  flexgap-1 justify-center items-center">
            <FiMenu className='h-8 w-8 cursor-pointer' onClick={()=>setHidenav((prev)=>!prev)}/>
            <img src={Youtube} alt='youtube icon ' className='h-20 w-32' ></img>
        </div>
        <div className="nav-middle flex items-center justify-center flex-1">
            <input placeholder='Search'  type='text' className='h-12 w-3/6 border border-slate-400 rounded-r-none rounded-l-full pl-2'></input>
            <div className='h-12 w-12 border border-slate-400 rounded-l-none rounded-r-full flex items-center justify-center bg-slate-200'  >
                <IoIosSearch className='h-7 w-7'/>
            </div>
        </div>
        <div className="nav-right flex gap-6">
            <FiVideo className='h-7 w-7 cursor-pointer'/>
            <FaRegBell className='h-7 w-7 cursor-pointer'/>
            <CgProfile className='h-7 w-7 cursor-pointer'/>
        </div>
    </div>
  )
}

export default Navbar