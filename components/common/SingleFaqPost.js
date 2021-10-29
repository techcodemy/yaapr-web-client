import React from 'react'
import Link from 'next/link'

import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ReplyAllRoundedIcon from '@material-ui/icons/ReplyAllRounded';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const SingleFaqPost = ({item,isOwner}) => {
    return (
        <div className="mb-9">
            <div className="">
                <div className="flex flex-row space-x-2">
                    
                    <div className="w-12 flex-none">
                        <img src={`/logos/${item.logo}`} className="h-12 w-12 object-cover rounded-full shadow-sm" alt="" />
                    </div>

                    <div className="flex-1 px-3 mt-1">
                        <div className="flex items-center justify-between ">
                            
                            <Link href={`/${item.name}`}>
                                <a className="flex items-start space-x-1">
                                    <div className="capitalize text-gray-700 dark:text-white font-semibold">
                                        {item.name}
                                    </div>
                                    <span className="text-yellow-500 bg-yellow-100 font-semibold text-xxxs rounded-lg px-1 mt-1 uppercase">premium</span>
                                </a>
                            </Link>
                            
                            <div className="flex space-x-2 items-center">
                                <span className="text-xs dark:text-gray-200">1 month ago</span>
                                <button className="text-sm dark:text-gray-200 hover:underline">Read More</button>
                                {isOwner &&
                                     <button className="text-sm dark:text-gray-200 hover:underline">
                                        <MoreHorizIcon style={{fontSize:22}} />
                                     </button>
                                }
                               
                            </div>
                           
                        </div>
                        <div className="flex flex-col justify-between rounded-lg">
                            
                            <div className="flex-1 flex flex-col mt-1">
                                <div className="text-xl text-gray-700 dark:text-indigo-50 ">
                                    Why you should make an FAQ page?
                                </div>
                                <div className="mt-1 text-black text-sm h-16 relative overflow-hidden dark:text-gray-50">
                                    An FAQ page is a time-saving customer service tactic that provides the most commonly asked questions and answers for current or potential customers. 

                                    Before diving into how to make an FAQ page, you need to know why having one is so important. There are so many reasons beyond improving the customer experience for perfecting your FAQ page. Keep in mind the importance of an FAQ page when developing your own e-commerce website so you can make sure it increases sales and not the other way around.
                                    <div className="bg-gradient-to-t from-white dark:from-gray-900 h-1/2 absolute bottom-0 right-0 left-0"></div>
                                </div>
                                
                            </div>
                            {item.banner !== "" &&
                                <div className="rounded-xl aspect-w-6 aspect-h-2 mt-3">
                                    <img src={`/images/ads/${item.banner}`} className="w-full h-full rounded-xl object-cover" alt="" />
                                </div>
                            }

                        </div>
                        <div className="flex items-center px-2 mt-2">
                                <ul className="pr-4 flex w-1/2">
                                    <li className="h-8 w-8 -ml-2">
                                        <img src="/images/avatar2.jpg" className="h-8 w-8 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                    </li>
                                    <li className="h-8 w-8 -ml-2">
                                        <img src="/images/avatar3.jpg" className="h-8 w-8 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                    </li>
                                    <li className="h-8 w-8 -ml-2">
                                        <img src="/images/avatar2.jpg" className="h-8 w-8 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                    </li>
                                    <li className="h-8 w-8 -ml-2">
                                        <img src="/images/avatar1.jpg" className="h-8 w-8 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                    </li>
                                    <li className="h-8 w-8 -ml-2">
                                        <img src="/images/avatar4.jpg" className="h-8 w-8 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                    </li>
                                </ul>
                                <div className="flex justify-between py-2 w-1/2">
                                    <div className="flex space-x-1 items-center">
                                        <span className="text-sm dark:text-gray-200">23</span>
                                        <FavoriteBorderIcon style={{fontSize:20}} className="text-red-400" />
                                    </div>
                                    <div className="flex space-x-1 items-center">
                                        <span className="text-sm dark:text-gray-200">23</span>
                                        <ThumbDownAltOutlinedIcon style={{fontSize:20}} className="text-gray-400" />
                                    </div>
                                    <div className="flex space-x-1 items-center">
                                        <span className="text-sm dark:text-gray-200">23</span>
                                        <ReplyAllRoundedIcon style={{fontSize:22}} className="text-indigo-400" />
                                    </div>
                                    <div className="flex space-x-1 items-center">
                                        <span className="text-sm dark:text-gray-200">Add Reply</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SingleFaqPost
