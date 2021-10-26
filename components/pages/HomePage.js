import React from 'react'
import UsersChatBar from '../chatBar/UsersChatBar'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ReplyAllRoundedIcon from '@material-ui/icons/ReplyAllRounded';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import Link from 'next/link'
import WhoToFollow from '../rightBar/WhoToFollow';
import SubNavbar from '../navbar/SubNavbar';

const companies = [
    {
        id:1,
        logo:"fnb.jpg",
        name:"fnb zambia"
    },
    {
        id:2,
        logo:"airtel.jpg",
        name:"airtel zambia"
    },
    {
        id:3,
        logo:"ra.png",
        name:"Radian stores"
    },
    {
        id:4,
        logo:"un.png",
        name:"United Nations"
    },
    {
        id:5,
        logo:"game.png",
        name:"Game stores Zambia"
    },
    {
        id:6,
        logo:"mlife.jpg",
        name:"MLife Insurance"
    },
]

const HomePage = () => {
    return (
        <main className="flex flex-row w-full">
            <UsersChatBar />
            <section className="flex-1 flex flex-col">

                <header className="flex w-full top-0 sticky z-10 bg-white dark:bg-gray-900 px-6 py-2">
                    <div className="flex-1 relative">
                        <form className="relative">
                            <span className="w-12 h-full absolute flex justify-center items-center">
                                <SearchRoundedIcon style={{fontSize:22}} className="text-gray-400" />
                            </span>
                            <input className="pl-10 input--control input--control-noerr" placeholder="Search for FAQs..." />
                        </form>
                      
                    </div>
                    <div className="flex-none w-64">
                       
                    </div>
                </header>

                <section className="flex px-6 w-full">
                    <main className="w-full 2xl:w-2/3">
                        {/* <div className="mt-2 py-4 bg-white rounded-lg border border-gray-100">
                            <ul className="flex flex-row space-x-4 ">
                                {companies.map(item => 
                                    <li key={item.id} className="w-1/6 flex justify-center ">
                                        <Link href="/">
                                            <a className="flex flex-col justify-center items-center">
                                                <div className="h-16 w-16 rounded-full">
                                                    <img src={`./logos/${item.logo}`} className="h-16 w-16 object-cover rounded-full shadow-sm" alt="" />
                                                </div>
                                                <div className="mt-1">
                                                    <div className="text-sm font-semibold truncate-1-lines capitalize">{item.name}</div>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                )}
                                
                            </ul>
                        </div> */}

                        <div className="mt-2">
                            <header className="py-3">
                                <div className="dark:text-gray-300">Frequently Asked Questions! (FAQ)</div>
                            </header>

                            {companies.map(item => 
                                <div key={item.id} className="mb-7">
                                    <div className="">
                                        <div className="flex flex-row space-x-2">
                                            
                                            <div className="w-12 flex-none">
                                                <img src={`./logos/${item.logo}`} className="h-12 w-12 object-cover rounded-full shadow-sm" alt="" />
                                            </div>

                                            <div className="flex-1 px-3">
                                                <div className="flex items-center justify-between pb-2">
                                                    <div className="flex items-start space-x-1">
                                                        <div className="capitalize text-gray-800 dark:text-white font-semibold">
                                                            {item.name}
                                                        </div>
                                                        <span className="text-yellow-500 bg-yellow-100 font-semibold text-xxxs rounded-lg px-1 mt-1 uppercase">premium</span>
                                                    </div>
                                                    <span className="text-xs dark:text-gray-200">1 month ago</span>
                                                </div>
                                                <div className="flex flex-col justify-between bg-gray-50 dark:bg-gray-800 shadow-sm rounded-lg py-2 px-4">
                                                    
                                                    <div className="flex-1 flex flex-col mt-1">
                                                        <div className="font-semibold text-xl text-gray-400 ">
                                                            Why you should make an FAQ page?
                                                        </div>
                                                        <div className="mt-1 text-sm h-16 relative overflow-hidden dark:text-gray-50">
                                                            An FAQ page is a time-saving customer service tactic that provides the most commonly asked questions and answers for current or potential customers. 

                                                            Before diving into how to make an FAQ page, you need to know why having one is so important. There are so many reasons beyond improving the customer experience for perfecting your FAQ page. Keep in mind the importance of an FAQ page when developing your own e-commerce website so you can make sure it increases sales and not the other way around.
                                                            <div className="bg-gradient-to-t from-gray-50 dark:from-gray-800 h-1/2 absolute bottom-0 right-0 left-0"></div>
                                                        </div>
                                                    </div>


                                                </div>
                                                <div className="flex items-center px-2 mt-3">
                                                        <ul className="pr-4 flex w-1/2">
                                                            <li className="h-9 w-9 -ml-2">
                                                                <img src="./images/avatar2.jpg" className="h-9 w-9 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                                            </li>
                                                            <li className="h-9 w-9 -ml-2">
                                                                <img src="./images/avatar3.jpg" className="h-9 w-9 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                                            </li>
                                                            <li className="h-9 w-9 -ml-2">
                                                                <img src="./images/avatar2.jpg" className="h-9 w-9 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                                            </li>
                                                            <li className="h-9 w-9 -ml-2">
                                                                <img src="./images/avatar1.jpg" className="h-9 w-9 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                                            </li>
                                                            <li className="h-9 w-9 -ml-2">
                                                                <img src="./images/avatar4.jpg" className="h-9 w-9 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
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
                            )}
                            

                        </div>
                    </main>
                </section>

            </section>
            <WhoToFollow />
        </main>
    )
}

export default HomePage
