import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

import OnlineComponent from '../common/OnlineComponent'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';


const BusinessChatBar = ({showChatBar}) => {

    const router = useRouter()

    return (
        <section className={`${showChatBar ? 'flex' : 'hidden 2xl:flex'}  w-[286px] flex-none h-screen top-0 sticky bg-white dark:bg-gray-900 py-2 overflow-hidden`}>
            <div className="bg-white dark:bg-gray-900 rounded-lg relative flex flex-col h-screen overflow-y-auto">
                <div className="h-[86px] flex-col flex-none bg-white dark:bg-gray-900 ">
                   
                    <div className="px-2">
                        <div className="relative">
                            <span className="w-12 h-full absolute flex justify-center items-center">
                                <SearchRoundedIcon style={{fontSize:22}} className="text-gray-400" />
                            </span>
                            <input placeholder="Search my chat?" className="pl-10 input--control input--control-noerr " />
                        </div>
                    </div>
                    <div className="p-3 text-gray-700 dark:text-gray-200 capitalize">
                        All Conversations
                    </div>
                </div>
          
                <ul className="h-full overflow-y-auto pb-4 px-2">

                    <li className="transition duration-500 hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-900  cursor-pointer rounded-lg mb-2 bg-gray-50">
                        <Link href={`/bus/${router.query.bus_slug}/messenger/dkhskfhsjsfjshhd`}>
                        {/* <Link href={`/bus/${router.query.bus_slug}/chats/`}> */}
                            <a className="flex space-x-2 p-2">
                                <div className="h-10 w-10 bg-white dark:bg-gray-900 items-center rounded-full flex-none relative">
                                    <img src="/images/avatar4.jpg" className="h-10 w-10 rounded-full shadow-sm" alt="" />
                                    <OnlineComponent isOnlineState={true} />
                                </div>

                                <div className="">
                                    <div className="flex items-center justify-between">
                                            <div className="flex space-x-1 items-center">
                                                <div className="text-gray-800 dark:text-gray-50 text-sm font-semibold">Naoh Tembo</div>  
                                                
                                            </div>
                                            <span className="bg-red-600 px-1 text-xs rounded text-white">
                                                2
                                            </span>
                                    </div>
                                    <div className="truncate-1-lines leading-tight text-sm tracking-tight dark:text-white">
                                        hey, how do i change my fnb atm card pin
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-xs text-gray-500 dark:text-gray-300">1hr ago</span>
                                        </div>
                                        <span className="text-xs capitalize text-gray-500 dark:text-gray-300">sales team</span>
                                    </div>
                                </div>

                            </a>
                        </Link>

                    </li>

                    <li className="transition duration-500 hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-900  cursor-pointer rounded-lg mb-2 bg-gray-50">
                        <Link href={`/bus/${router.query.bus_slug}/messenger/dkhskfhsjsfjshhd`}>
                        {/* <Link href={`/bus/${router.query.bus_slug}/chats/`}> */}
                            <a className="flex space-x-2 p-2">
                            <div className="h-10 w-10 bg-white items-center rounded-full flex-none relative">
                                <img src="/images/avatar1.jpg" className="h-10 w-10 rounded-full shadow-sm" alt="" />
                                <OnlineComponent isOnlineState={true} />
                            </div>
                            <div className="">
                                <div className="flex space-x-1 items-center">
                                    <div className="text-gray-800 dark:text-gray-50 text-sm font-semibold">Naoh Tembo</div> 
                                </div>
                                <div className="truncate-1-lines leading-tight text-sm tracking-tight dark:text-white">
                                    hey, how do i change my fnb atm card pin
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-xs text-gray-500 dark:text-gray-300">1hr ago</span>
                                    </div>
                                    <span className="text-xs capitalize text-gray-500 dark:text-gray-300">sales team</span>
                                </div>
                            </div>
                            </a>
                        </Link>

                    </li>

                    <li className="transition duration-500 hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-900  cursor-pointer rounded-lg mb-2 bg-gray-50">
                        <Link href={`/bus/${router.query.bus_slug}/messenger/dkhskfhsjsfjshhd`}>
                        {/* <Link href={`/bus/${router.query.bus_slug}/chats/`}> */}
                            <a className="flex space-x-2 p-2">
                            <div className="h-10 w-10 bg-white items-center rounded-full flex-none relative">
                                <img src="/images/avatar5.jpg" className="h-10 w-10 rounded-full shadow-sm" alt="" />
                                <OnlineComponent isOnlineState={true} />
                            </div>
                            <div className="">
                                <div className="flex space-x-1 items-center">
                                    <div className="text-gray-800 dark:text-gray-50 text-sm font-semibold">Naoh Tembo</div>  
                                </div>
                                <div className="truncate-1-lines leading-tight text-sm tracking-tight dark:text-white">
                                    hey, how do i change my fnb atm card pin
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-xs text-gray-500 dark:text-gray-300">1hr ago</span>
                                    </div>
                                    <span className="text-xs capitalize text-gray-500 dark:text-gray-300">sales team</span>
                                </div>
                            </div>
                            </a>
                        </Link>

                    </li>

                    <li className="transition duration-500 hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-900  cursor-pointer rounded-lg mb-2 bg-gray-50">
                        <Link href={`/bus/${router.query.bus_slug}/messenger/dkhskfhsjsfjshhd`}>
                        {/* <Link href={`/bus/${router.query.bus_slug}/chats/`}> */}
                            <a className="flex space-x-2 p-2">
                            <div className="h-10 w-10 bg-white items-center rounded-full flex-none relative">
                                <img src="/images/avatar4.jpg" className="h-10 w-10 rounded-full shadow-sm" alt="" />
                                <OnlineComponent isOnlineState={true} />
                            </div>
                            <div className="">
                                <div className="flex space-x-1 items-center">
                                    <div className="text-gray-800 dark:text-gray-50 text-sm font-semibold">Naoh Tembo</div>  
                                </div>
                                <div className="truncate-1-lines leading-tight text-sm tracking-tight dark:text-white">
                                    hey, how do i change my fnb atm card pin
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-xs text-gray-500 dark:text-gray-300">1hr ago</span>
                                    </div>
                                    <span className="text-xs capitalize text-gray-500 dark:text-gray-300">sales team</span>
                                </div>
                            </div>
                            </a>
                        </Link>

                    </li>

                    <li className="transition duration-500 hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-900  cursor-pointer rounded-lg mb-2 bg-gray-50">
                        <Link href={`/bus/${router.query.bus_slug}/messenger/dkhskfhsjsfjshhd`}>
                        {/* <Link href={`/bus/${router.query.bus_slug}/chats/`}> */}
                            <a className="flex space-x-2 p-2">
                            <div className="h-10 w-10 bg-white items-center rounded-full flex-none relative">
                                <img src="/images/avatar1.jpg" className="h-10 w-10 rounded-full shadow-sm" alt="" />
                                <OnlineComponent isOnlineState={true} />
                            </div>
                            <div className="">
                                <div className="flex space-x-1 items-center">
                                    <div className="text-gray-800 dark:text-gray-50 text-sm font-semibold">Naoh Tembo</div> 
                                    
                                </div>
                                <div className="truncate-1-lines leading-tight text-sm tracking-tight dark:text-white">
                                    hey, how do i change my fnb atm card pin
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-xs text-gray-500 dark:text-gray-300">1hr ago</span>
                                    </div>
                                    <span className="text-xs capitalize text-gray-500 dark:text-gray-300">sales team</span>
                                </div>
                            </div>
                            </a>
                        </Link>

                    </li>
                    {[1,2,3,5,6,7,8].map(item => 
                        <li key={item} className="transition duration-500 hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-900  cursor-pointer rounded-lg mb-2 bg-gray-50">
                            <Link href={`/bus/${router.query.bus_slug}/messenger/dkhskfhsjsfjshhd`}>
                        {/* <Link href={`/bus/${router.query.bus_slug}/chats/`}> */}
                            <a className="flex space-x-2 p-2">
                                <div className="h-10 w-10 bg-white items-center rounded-full flex-none relative">
                                    <img src="/images/avatar5.jpg" className="h-10 w-10 rounded-full shadow-sm" alt="" />
                                    <OnlineComponent isOnlineState={true}  />
                                </div>
                                <div className="">
                                    <div className="flex space-x-1 items-center">
                                        <div className="text-gray-800 dark:text-gray-50 text-sm font-semibold">Naoh Tembo</div>  
                                        
                                    </div>
                                    <div className="truncate-1-lines leading-tight text-sm tracking-tight dark:text-white">
                                        hey, how do i change my fnb atm card pin
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-xs text-gray-500 dark:text-gray-300">1hr ago</span>
                                        </div>
                                        <span className="text-xs capitalize text-gray-500 dark:text-gray-300">sales team</span>
                                    </div>
                                </div>
                                </a>
                                </Link>
        
                        </li>
                    )}
                   
                </ul> 
                <div className="bg-gradient-to-t from-white dark:from-gray-900 h-12 absolute bottom-0 right-0 left-0"></div>  
            </div>
        </section> 
    )
}

export default BusinessChatBar
