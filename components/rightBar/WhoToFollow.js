import React from 'react'
import Link from 'next/link'

import CopyRightFooter from '../common/CopyRightFooter'

const companies = [
    {
        id:1,
        logo:"fnb.jpg",
        banner:"fnb-add.jpg",
        name:"fnb zambia"
    },
    {
        id:2,
        logo:"airtel.jpg",
        banner:"airtel-ads.jpg",
        name:"airtel zambia"
    },
    {
        id:3,
        logo:"ra.png",
        banner:"ads-dir.png",
        name:"Radian stores"
    },
    {
        id:4,
        logo:"un.png",
        banner:"",
        name:"United Nations"
    },
    {
        id:5,
        logo:"game.png",
        banner:"ads-anonoe.png",
        name:"Game stores Zambia"
    },
    {
        id:6,
        logo:"mlife.jpg",
        banner:"advertising.jpg",
        name:"MLife Insurance"
    },
]

const WhoToFollow = () => {
    return (
       
        <aside className="w-64 flex-none h-screen top-0 sticky bg-white dark:bg-gray-900 py-2 overflow-hidden">
            <div className="bg-white dark:bg-gray-900 rounded-lg relative flex flex-col h-screen overflow-y-auto">
                <div className="h-16 flex-none py-2">
                    <div className="px-3 flex flex-col">
                        <span className="font-semibold text-gray-700 dark:text-gray-200">Popular Providers</span>
                        <span className="text-sm dark:text-gray-300">Start Following</span>
                    </div>
                </div>
          
                <ul className="h-full overflow-y-auto pb-4 relative">
                    {companies.map(item => 
                        <li key={item} className="">
                            <div className="flex space-x-2 p-2">
                                <div className="h-10 w-10 bg-white items-center rounded-full flex-none relative">
                                    <img src={`/logos/${item.logo}`} className="h-10 w-10 rounded-full shadow-sm object-cover" alt="" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex space-x-1 items-center justify-between">
                                        <Link href={`/${item.name}`}>
                                            <a className="text-gray-800 dark:text-gray-50 font-semibold capitalize truncate-1-lines">
                                                {item.name}
                                            </a>  
                                        </Link>
                                        <button className="hover:underline text-xs px-1 rounded-lg text-indigo-500 dark:text-indigo-100 capitalize font-semibold">Follow</button>
                                    </div>
                                    
                                   <div className="flex flex-col justify-between">
                                       <div className="text-xs flex justify-between">
                                           <span className="dark:text-gray-100">Support team</span>
                                           
                                        </div>
                                        <ul className="pl-1 flex mt-1 relative">
                                            <li className="h-7 w-7 -ml-2 relative">
                                                <img src="/images/avatar2.jpg" className="h-7 w-7 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                               
                                            </li>
                                            <li className="h-7 w-7 -ml-2 relative">
                                                <img src="/images/avatar3.jpg" className="h-7 w-7 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                            </li>
                                            <li className="h-7 w-7 -ml-2 relative">
                                                <img src="/images/avatar2.jpg" className="h-7 w-7 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                               
                                            </li>
                                            <li className="h-7 w-7 -ml-2 relative">
                                                <img src="/images/avatar1.jpg" className="h-7 w-7 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                                
                                            </li>
                                            <li className="h-7 w-7 -ml-2 relative">
                                                <img src="/images/avatar4.jpg" className="h-7 w-7 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                            </li>

                                            <span className="text-xs absolute right-0 mt-[2px] mr-[2px] bg-indigo-100 dark:bg-gray-800 dark:text-indigo-100 px-1 text-indigo-600 rounded font-semibold">12</span>
                                        </ul>
                                   </div>
                                    
                                    
                                </div>
                            </div>
                        </li>
                    )}
                    <li className="bg-gradient-to-t from-white dark:from-gray-900 h-12 absolute bottom-0 right-0 left-0"></li>  
                </ul> 
                <CopyRightFooter />
            </div>            
        </aside>
       
    )
}

export default WhoToFollow
