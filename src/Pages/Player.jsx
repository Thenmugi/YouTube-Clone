import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import { MdVerified } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { GoDownload } from "react-icons/go";
import { IoBookmarkOutline } from "react-icons/io5";
import { PiDotsThreeOutline } from "react-icons/pi";
import moment from 'moment';
import Profile from '../Assets/Profile.jpg'

import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const Player = () => {
    const api_key = 'AIzaSyCzc7u2HtQapsIVOFWsEJ-xP7rm9fRaB-8';
    const [data,setData]=useState([])
    const { categoryId, videoId } = useParams();
    const [apidata, setApidata] = useState([]);
    const [subCount,setSubCount]=useState({})
    const [comment_cat,setComment_cat]=useState([])
    //category & videoid
    const fetch_ran=async()=>{
        const response =await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=80&regionCode=IN&videoCategoryId=${categoryId}&key=${api_key}`)
        const result=await response.json()
        if(result.items){
            setData(result.items)
        }
        else{
            setData([])
        }
    }
    //videos
    const datafetch = async () => {
        await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&maxResults=30&regionCode=IN&videoCategoryId=${categoryId}&relevanceLanguage=ta&key=${api_key}`)
            .then(res => res.json())
            .then(res => setApidata(res.items));
    };
    const videoData = apidata.length > 0 ? apidata[0] : null;
    //subscribers
    const fetch_sub = async () => {
        if (videoData && videoData.snippet.channelId) {  // Check if videoData and channelId exist
            await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoData.snippet.channelId}&relevanceLanguage=ta&key=${api_key}`)
                .then(res => res.json())
                .then(data => setSubCount(data.items ? data.items[0] : null)); // Ensure data is set correctly
        }
    }

    //comments:
    const fetch_comment=async()=>{
        await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&relevanceLanguage=ta&key=${api_key}`)
        .then(res=>res.json())
        .then(res=>setComment_cat(res.items ))
    }
    useEffect(()=>{
        fetch_ran()
    },[categoryId])
    useEffect(() => {
        datafetch();
        
    }, [categoryId, videoId]);

    useEffect(() => {
        if (videoData) {
            fetch_sub();
        }
    }, [videoData]);

    useEffect(()=>{
        fetch_comment()
    },[videoId])
    const views_convertor = (value) => {
        if (value > 1000000) {
            return Math.floor(value / 1000000) + "M";
        } else if (value > 10000) {
            return Math.floor(value / 1000) + "K";
        } else {
            return value;
        }
    };
    const format_text=(text)=>{
        return text.split(/(\s+)/).map((word, index) => {

            if (word.startsWith("#")) {
              return (
                <span key={index} style={{ color: 'blue' }}>
                  {word}
                </span>
              );
            }
            return word;
          });
    }

    return (
        <div className="w-full  flex">
            <div className="video-play w-5/6 flex-col gap-8">
                <div className="w-full ml-12 flex flex-col">
                    {videoData ? (
                        <>
                            <iframe
                                width="1180"
                                height="620"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                className="rounded-lg hidden md:block"
                                title={videoData.snippet?.title || 'Video Player'}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}`}
                                className="w-full h-2/3 rounded-lg md:hidden"
                                title={videoData.snippet?.title || 'Video Player'}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"

                            ></iframe>
                            <h1 className="font-semibold text-lg">
                                {format_text(videoData.snippet?.title || 'Video Title')}
                            </h1>
                            <div className="flex justify-between">
                                <div className="flex gap-3" >
                                   <div className='flex gap-2'>
                                    <div className='h-12 w-12'>
                                        {subCount?.snippet?.thumbnails?.default?.url ? (
                                            <img 
                                                src={subCount.snippet.thumbnails.medium.url} 
                                                className='rounded-full' 
                                                alt="Channel Thumbnail"
                                            />
                                        ) : (
                                            <div className='bg-gray-200 h-full w-full rounded-full flex items-center justify-center'>
                                                {/* Placeholder content if image is not available */}
                                                <span>Loading...</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-sm flex flex-col">
                                        <div className="flex">
                                            <div className="font-semibold text-black">
                                                {videoData.snippet?.channelTitle || 'Channel Name'}
                                            </div>
                                            <MdVerified className="relative top-1" />
                                        </div>
                                        <div>
                                        {subCount?.statistics?.subscriberCount ? (
                                                <p>{views_convertor(subCount.statistics.subscriberCount)} subscribers</p>
                                            ) : (
                                                <p>Loading subscribers...</p>
                                            )}
                                        </div>
                                    </div>
                                   </div>
                                    <div className="bg-black text-white p-1 w-24 h-10 rounded-2xl flex justify-center items-center cursor-pointer text-sm">
                                        Subscribe
                                    </div>
                                </div>
                                <div className="flex gap-3 relative md:right-56">
                                    <div className="w-auto h-auto p-0 flex bg-white rounded-xl justify-center items-center md:p-2 md:bg-gray-300 ">
                                        <AiOutlineLike className='text-lg'/>
                                        <div>{views_convertor(videoData.statistics?.likeCount) || '0'}</div>
                                    </div>
                                    <div className="w-auto h-auto p-0 flex bg-white rounded-xl justify-center items-center md:p-2 md:bg-gray-300 ">
                                        <AiOutlineDislike className='text-lg'/>
                                        <div>{views_convertor(videoData.statistics?.favoriteCount) || '0'}</div>
                                    </div>
                                    <div className="w-auto h-auto p-2 flex bg-gray-300 rounded-xl justify-center items-center hidden md:block">
                                        <RiShareForwardLine className='text-lg'/>
                                        <div>share</div>
                                    </div>
                                    <div className="w-auto h-auto p-2 flex bg-gray-300 rounded-xl justify-center items-center hidden md:block">
                                        <GoDownload className='text-lg'/>
                                        <div>Download</div>
                                    </div>
                                    <div className="w-auto h-auto p-2 flex bg-gray-300 rounded-xl justify-center items-center hidden md:block">
                                        <IoBookmarkOutline className='text-lg'/>
                                        <div>save</div>
                                    </div>
                                    <div className="w-auto h-auto p-2 flex bg-gray-300 rounded-xl justify-center items-center hidden md:block">
                                        <PiDotsThreeOutline className='text-lg'/> 
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                {
                    videoData?
                    (   <div className='flex flex-col ml-12 gap-7'>
                            <div className='bg-slate-200 rounded-md w-96 h-auto relative top-3 md:w-5/6'>
                                    <div className='flex gap-3 font-medium text-sm' >
                                        <p>{views_convertor(videoData.statistics.viewCount)} views</p>
                                        <p>{moment(videoData.snippet.publishedAt).format('MMM DD, YYYY')}</p>
                                    </div>
                                    <div className='text-sm text-slate-600'>
                                        {format_text(videoData.snippet.description)}
                                    </div>
                            </div>
                            <div className='w-5/6 h-auto flex flex-col gap-1'>
                                <h1 className='text-xl font-semibold'>{videoData.statistics.commentCount} comments</h1>
                                <div>
                                    <div className='h-9 w-9 flex gap-2'>
                                        <img src={Profile} className='rounded-full' alt='profile'></img>
                                        <input placeholder='Add a comment' className='border border-transparent'></input>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                {
                                    comment_cat.map((item,index)=>(
                                        <div key={index} className='w-full flex gap-3 text-sm md:w-4/5'>
                                            <div className='h-8 w-8'>
                                                <img src={item.snippet?.topLevelComment?.snippet?.authorProfileImageUrl || Profile} alt='profile' className='rounded-full'></img>
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                <div className='flex gap-1'>
                                                <p className='font-semibold'>{item.snippet?.topLevelComment?.snippet?.authorDisplayName || "Unknown"}</p>
                                                    <p className='text-slate-500'>{item.time}</p>
                                                </div>
                                                <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
                                                <div className='flex gap-4'>
                                                    <div className='flex justify-center items-center'>
                                                        <AiOutlineLike />
                                                        <p className='text-slate-500'>{views_convertor(item.snippet.topLevelComment.snippet.likeCount)}</p>
                                                    </div>
                                                    <div className='flex justify-center items-center'>
                                                        <AiOutlineDislike />
                                                    </div>
                                                    <p className='text-sm font-semibold cursor-pointer'>Reply</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                        
                    ):
                    (
                        <p>LOading</p>
                    )
                }
            </div>
            <div className='w-1/5 relative right-10  h-full flex flex-col gap-3 hidden lg:block'>
               {
                    data.map((item,index)=>(
                        <Link className='flex gap-1 w-full min-h-36 max-h-auto' key={index} to={`/player/${categoryId}/${item.id}`} style={{fontFamily:'sans-serif'}}>
                            <img className='w-6/12 rounded-lg h-full ' src={item.snippet.thumbnails.medium.url} alt={item.snippet.channelTitle}></img>
                            <div className='max-w-7/12 h-full flex flex-col'>
                                <p className='text-sm'>{item.snippet.title}</p>
                                <div className='flex gap-1 text-sm text-neutral-600'>
                                    <p>{item.snippet.channelTitle}</p>
                                    <MdVerified />
                                </div>
                                <div className='flex gap-2 text-sm text-neutral-600'>
                                    <p>{views_convertor(item.statistics.viewCount)} views</p>
                                    <p>{moment(item.snippet.publishedAt).fromNow}</p>
                                </div>
                            </div>
                            <div className='w-1/12 h-full '>
                                <PiDotsThreeOutlineVerticalFill  />
                            </div>
                        </Link>
                    ))
               }
            </div>
        </div>
    );
};

export default Player;


