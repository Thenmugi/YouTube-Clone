import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { MdVerified } from "react-icons/md";
import Moment from "react-moment";


const Videocard = ({category}) => {
    const [data,setData]=useState([])
    const api_key='AIzaSyCzc7u2HtQapsIVOFWsEJ-xP7rm9fRaB-8'
    const fetchdata=async ()=>{
        const response =await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=80&regionCode=IN&videoCategoryId=${category}&key=${api_key}`)
        const result=await response.json()
        if(result.items){
            setData(result.items)
        }
        else{
            setData([])
        }
    }
    useEffect(()=>{
        fetchdata()
    },[category])
    const views_convertor=(value)=>{
        if(value>1000000){
            return Math.floor(value/1000000)+"M"
        }
        else if(value>10000){
            return Math.floor(value/10000)+"K"
        }
        else{
            return value;
        }
    }
  return (
    <div className='grid grid-cols-4 gap-4 w-full overflow-y-auto'>
        {
            data.map((item,index)=>(
                <Link key={index} className='flex flex-col  gap-1 ' style={{width:350,height:320,fontFamily:'sans-serif'}} to={`/player/${category}/${item.id}`}>
                    <img src={item.snippet.thumbnails.medium.url}  className='rounded-xl w-full h-3/5' alt={item.snippet.channelTitle}></img>
                    <div className='text-left '>
                        <p >{item.snippet.title}</p>
                    </div>
                    <div className='flex text-left text-gray-500 text-sm'>
                        <p>{item.snippet.channelTitle}</p>
                        <MdVerified  className='text-gray-500 relative top-1' />
                    </div>
                    <div className='flex gap-3 text-gray-500 text-sm'>
                        <p>{views_convertor(item.statistics.viewCount)} views</p>
                        <p>
                            <Moment fromNow>{item.snippet.publishedAt}</Moment>
                        </p>
                    </div>
                </Link>
            ))
        }
    </div>
  )
}

export default Videocard