import React ,{useState} from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiFire } from "react-icons/pi";
import { AiOutlineShopping } from "react-icons/ai";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { PiFilmSlateLight } from "react-icons/pi";
import { TbLivePhotoFilled } from "react-icons/tb";
import { IoGameControllerOutline } from "react-icons/io5";
import { TiNews } from "react-icons/ti";
import { MdOutlineSportsFootball } from "react-icons/md";
import { PiLightbulbLight } from "react-icons/pi";
import { PiDress } from "react-icons/pi";
import { MdPodcasts } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Sidebar = ({hidenav,category,setCategory}) => {

  return (
    <div className='hidden lg:block md:block'>
      {hidenav===false?(
        <div className={`h-auto flex flex-col gap-4 ml-6 cursor-pointer`}  >
          <div className='flex flex-col hover:bg-slate-300 rounded-md' onClick={()=>setCategory(0)}  style={{backgroundColor:category===0?"grey":"white"}} >
              <IoMdHome className='h-7 w-7'/>
              <p className='font-light'>Home</p>
          </div>
          <div className='flex flex-col  hover:bg-slate-300 rounded-md' onClick={()=>setCategory(17)}  style={{backgroundColor:category===17?"grey":"white"}}>
              <SiYoutubeshorts className='h-7 w-7'/>
              <p className='font-light'>Shorts</p>
          </div>
          <div className='flex flex-col w-24 hover:bg-slate-300 rounded-md' >
              < MdOutlineSubscriptions className='h-7 w-7'/>
              <p className='font-light '>Subscriptions</p>
          </div>
          <div className='flex flex-col  hover:bg-slate-300 rounded-md'>
              < CgProfile className='h-7 w-7'/>
              <p className='font-light'>You</p>
          </div>
      </div>
      ):(
        <div className={`h-auto cursor-pointer flex flex-col gap-2 ml-6 `} >
            <div className='flex gap-2 h-auto w-full p-2  hover:bg-slate-300 rounded-md ' onClick={()=>setCategory(0)}  style={{backgroundColor:category===0?"grey":"white"}}>
                <IoMdHome className='h-7 w-7' />
                <p className='font-light flex justify-center items-center' >Home</p>
            </div>
            <div className='flex gap-2 h-auto w-full p-2  hover:bg-slate-300 rounded-md ' onClick={()=>setCategory(17)} style={{backgroundColor:category===18?"grey":"white"}}>
                <SiYoutubeshorts className='h-7 w-7'/>
                <p className='font-light flex justify-center items-center' >Shorts</p>
            </div>
            <div className='flex gap-2 h-auto w-full p-2  hover:bg-slate-300 rounded-md' >
                <MdOutlineSubscriptions className='h-7 w-7'/>
                <p className='font-light flex justify-center items-center' >Subscriptions</p>
            </div>
            <hr className='w-5/6 bg-slate-400'></hr>
            <h1>Explore</h1>
            <div className='flex gap-2 h-auto w-full p-2  hover:bg-slate-300 rounded-md' onClick={()=>setCategory(24)} style={{backgroundColor:category===24?"grey":"white"}}>
                < PiFire className='h-7 w-7'/>
                <p className='font-light flex justify-center items-center' >Trending</p>
            </div>
            <div className='flex gap-2 h-auto w-full p-2  hover:bg-slate-300 rounded-md' onClick={()=>setCategory(2)} style={{backgroundColor:category===2?"grey":"white"}}>
                <AiOutlineShopping className='h-7 w-7'/>
                <p className='font-light flex justify-center items-center' >Shopping</p>
            </div>
            <div className='flex gap-2 h-auto w-full p-2  hover:bg-slate-300 rounded-md ' onClick={()=>setCategory(10)} style={{backgroundColor:category===10?"grey":"white"}}>
                <IoMusicalNotesOutline className='h-7 w-7'/>
                <p className='font-light flex justify-center items-center' >Music</p>
            </div>
            <div className='flex gap-2 h-auto w-full p-2  hover:bg-slate-300 rounded-md ' onClick={()=>setCategory(23)} style={{backgroundColor:category===23?"grey":"white"}}>
                <PiFilmSlateLight className='h-7 w-7'/>
                <p className='font-light flex justify-center items-center' >Films</p>
            </div>
            <div className='flex gap-2 h-auto w-full p-2  hover:bg-slate-300 rounded-md ' onClick={()=>setCategory(30)} style={{backgroundColor:category===30?"grey":"white"}}>
                <TbLivePhotoFilled className='h-7 w-7'/>
                <p className='font-light flex justify-center items-center' >Live</p>
            </div>
            <div className='flex gap-2 h-auto w-full p-2  hover:bg-slate-300 rounded-md ' onClick={()=>setCategory(1)} style={{backgroundColor:category===1?"grey":"white"}}>
                <IoGameControllerOutline className='h-7 w-7'/>
                <p className='font-light flex justify-center items-center' >Gaming</p>
            </div>
            <div className='flex gap-2 h-auto w-full p-2  hover:bg-slate-300 rounded-md ' onClick={()=>setCategory(25)} style={{backgroundColor:category===25?"grey":"white"}}>
                <TiNews className='h-7 w-7'/>
                <p className='font-light flex justify-center items-center' >News</p>
            </div>
            <div className='flex gap-2 h-auto w-full p-2  hover:bg-slate-300 rounded-md ' onClick={()=>setCategory(17)} style={{backgroundColor:category===17?"grey":"white"}}>
                <MdOutlineSportsFootball className='h-7 w-7'/>
                <p className='font-light flex justify-center items-center' >Sports</p>
            </div>
            <div className='flex gap-2 h-auto w-full p-2  hover:bg-slate-300 rounded-md ' onClick={()=>setCategory(28)} style={{backgroundColor:category===28?"grey":"white"}}>
                <PiLightbulbLight  className='h-7 w-7'/>
                <p className='font-light flex justify-center items-center' >Courses</p>
            </div>
            <div className='flex gap-2 h-auto w-full p-2  hover:bg-slate-300 rounded-md ' onClick={()=>setCategory(26)} style={{backgroundColor:category===26?"grey":"white"}}>
                <PiDress className='h-7 w-7'/>
                <p className='font-light flex justify-center items-center' >Fashion & Style</p>
            </div>
            <div className='flex gap-2 h-auto w-full p-2  hover:bg-slate-300 rounded-md ' onClick={()=>setCategory(22)} style={{backgroundColor:category===22?"grey":"white"}}>
                <MdPodcasts className='h-7 w-7'/>
                <p className='font-light flex justify-center items-center' >Podcasts</p>
            </div>
        </div>
      )

      }
    </div>
  )
}

export default Sidebar