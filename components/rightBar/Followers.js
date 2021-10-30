import React from 'react'
import Link from 'next/link'


import CopyRightFooter from '../common/CopyRightFooter'

const followers = [
    {
        id:1,
        avatar:"avatar3.jpg",
        name:"Nickson Phiri"
    },
    {
        id:2,
        avatar:"avatar1.jpg",
        name:"Rosie Banda"
    },
    {
        id:3,
        avatar:"",
        name:"Samuel Snapper"
    },
    {
        id:4,
        avatar:"avatar4.jpg",
        name:"Kemuel Lottan"
    },
    {
        id:5,
        avatar:"avatar2.jpg",
        name:"Naile Mutale"
    },
    {
        id:6,
        avatar:"",
        name:"Moses Mumba"
    },
    {
        id:7,
        avatar:"avatar5.jpg",
        name:"Nawa Sipalo"
    },
    {
        id:1,
        avatar:"avatar3.jpg",
        name:"Nickson Phiri"
    },
    {
        id:2,
        avatar:"avatar1.jpg",
        name:"Rosie Banda"
    },
    {
        id:3,
        avatar:"",
        name:"Samuel Snapper"
    },
    {
        id:4,
        avatar:"avatar4.jpg",
        name:"Kemuel Lottan"
    },
    {
        id:5,
        avatar:"avatar2.jpg",
        name:"Naile Mutale"
    },
    {
        id:6,
        avatar:"",
        name:"Moses Mumba"
    },
    {
        id:7,
        avatar:"avatar5.jpg",
        name:"Nawa Sipalo"
    },
]

const Followers = () => {
    return (
        <aside className="w-64 flex-none h-screen top-0 sticky bg-white dark:bg-gray-900 py-2 overflow-hidden">
            <div className="bg-white dark:bg-gray-900 rounded-lg relative flex flex-col h-screen overflow-y-auto">
                <div className="h-16 flex-none py-2">
                    <div className="px-3 flex flex-col">
                        <span className="font-semibold text-gray-700 dark:text-gray-200">List of Followers</span>
                        <div className="flex space-x-2 items-center">
                            <span className="text-sm dark:text-gray-300">Total:</span>
                            <span className="bg-gray-100 dark:bg-indigo-600 dark:text-indigo-100 text-gray-600 text-xxs rounded font-semibold p-[2px]">23</span>
                        </div>
                    </div>
                </div>
               
                    <ul className="flex-1 relative h-full overflow-y-auto">
                        {followers.map(item => 
                            <li key={item} className="">
                                <div className="flex space-x-2 p-2 mx-2 mb-1 rounded-lg bg-gray-50 dark:bg-gray-800 cursor-pointer hover:bg-indigo-50">
                                    <div className="h-9 w-9 bg-white items-center rounded-full flex-none relative">
                                        {item.avatar ?
                                            <img src={`/images/${item.avatar}`} className="flex-none h-9 w-9 rounded-full shadow-sm object-cover" alt="" />
                                            :
                                            <div className="flex-none h-9 w-9 rounded-full shadow-sm bg-indigo-100 text-indigo-600 flex justify-center items-center font-bold">
                                                {item.name.substr(0,1)}
                                            </div>
                                        }
                                    
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex space-x-1 items-center justify-between">
                                        
                                            <div className="text-gray-800 dark:text-gray-50 text-sm capitalize font-semibold truncate-1-lines">
                                                {item.name}
                                            </div>  
                                            
                                            <button className="hover:underline text-xs px-1 rounded-lg text-indigo-500 dark:text-indigo-100 capitalize font-semibold">Message</button>
                                        </div>
                                        
                                    <div className="flex flex-col justify-between">
                                        <div className="text-xxs flex justify-between">
                                            <span className="dark:text-gray-100">
                                                Fnb Zambia
                                                </span>
                                            </div>
                                    </div>
                                        
                                        
                                    </div>
                                </div>
                            </li>
                        )}
                        
                        <div className="bg-gradient-to-t from-white dark:from-gray-900 h-12 sticky bottom-0 right-0 left-0"></div>  
                    </ul> 
                    
               
                <CopyRightFooter />
            </div>            
        </aside>
    )
}

export default Followers
