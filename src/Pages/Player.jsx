import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MdVerified } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { GoDownload } from "react-icons/go";
import { IoBookmarkOutline } from "react-icons/io5";
import { PiDotsThreeOutline } from "react-icons/pi";

const Player = () => {
    const api_key = 'AIzaSyCzc7u2HtQapsIVOFWsEJ-xP7rm9fRaB-8';
    const { categoryId, videoId } = useParams();
    const [apidata, setApidata] = useState([]);
    
    const datafetch = async () => {
        await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&maxResults=60&regionCode=IN&videoCategoryId=${categoryId}&key=${api_key}`)
            .then(res => res.json())
            .then(res => setApidata(res.items));
    };

    useEffect(() => {
        datafetch();
    }, [categoryId, videoId]);

    // Check if apidata has at least one item and assign it to videoData if it does
    const videoData = apidata.length > 0 ? apidata[0] : null;

    const views_convertor = (value) => {
        if (value > 1000000) {
            return Math.floor(value / 1000000) + "M";
        } else if (value > 10000) {
            return Math.floor(value / 1000) + "K";
        } else {
            return value;
        }
    };

    return (
        <div className="w-full h-full flex">
            <div className="video-play w-5/6 flex-col ">
                <div className="w-full ml-12 flex flex-col gap-2">
                    {videoData ? (
                        <>
                            <iframe
                                width="1180"
                                height="620"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                className="rounded-lg"
                                title={videoData.snippet?.title || 'Video Player'}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                            <h1 className="font-semibold text-lg">
                                {videoData.snippet?.title || 'Video Title'}
                            </h1>
                            <div className="flex justify-between">
                                <div className="flex gap-3" >
                                    <div className="text-sm flex flex-col">
                                        <div className="flex">
                                            <div className="font-semibold text-black">
                                                {videoData.snippet?.channelTitle || 'Channel Name'}
                                            </div>
                                            <MdVerified className="relative top-1" />
                                        </div>
                                        <p>{views_convertor(videoData.statistics?.viewCount) || '0'} views</p>
                                    </div>
                                    <div className="bg-black text-white p-1 w-24 h-10 rounded-2xl flex justify-center items-center cursor-pointer text-sm">
                                        Subscribe
                                    </div>
                                </div>
                                <div className="flex gap-3 ">
                                    <div className="w-auto h-auto p-2 flex bg-gray-300 rounded-xl justify-center items-center ">
                                        <AiOutlineLike className='text-lg'/>
                                        <div>{views_convertor(videoData.statistics?.likeCount) || '0'}</div>
                                    </div>
                                    <div className="w-auto h-auto p-2 flex bg-gray-300 rounded-xl justify-center items-center ">
                                        <AiOutlineDislike className='text-lg'/>
                                        <div>{views_convertor(videoData.statistics?.favoriteCount) || '0'}</div>
                                    </div>
                                    <div className="w-auto h-auto p-2 flex bg-gray-300 rounded-xl justify-center items-center ">
                                        <RiShareForwardLine className='text-lg'/>
                                        <div>share</div>
                                    </div>
                                    <div className="w-auto h-auto p-2 flex bg-gray-300 rounded-xl justify-center items-center ">
                                        <GoDownload className='text-lg'/>
                                        <div>Download</div>
                                    </div>
                                    <div className="w-auto h-auto p-2 flex bg-gray-300 rounded-xl justify-center items-center ">
                                        <IoBookmarkOutline className='text-lg'/>
                                        <div>save</div>
                                    </div>
                                    <div className="w-auto h-auto p-2 flex bg-gray-300 rounded-xl justify-center items-center ">
                                        <PiDotsThreeOutline className='text-lg'/>
                                       
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Player;
