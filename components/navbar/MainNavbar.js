import React from 'react'
import Link from 'next/link'
import { Popover,Transition  } from '@headlessui/react'

import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import ForumIcon from '@material-ui/icons/Forum';
import ReplyAllIcon from '@material-ui/icons/ReplyAll';


import OnlineComponent from '../common/OnlineComponent';


import { useTheme } from '../../providers/ThemeProvider';



const MainNavbar = () => {
    const {theme,setActiveTheme} = useTheme()

    return (
        <aside className="h-screen w-[76px] flex-none top-0 sticky">
            <div className="flex flex-col justify-between h-full py-2 bg-white dark:bg-gray-900">
                <div className="flex justify-center">
                    <Link href={`/`}>
                        <a className="h-11 w-11 rounded-full">
                            {/* <Logo styles={'h-11 w-11'} color={'#6A4CFF'} /> */}
                            <img src="/yaapr-chat-icon.svg" className="h-11 w-11" alt="/" />
                        </a>
                    </Link>
                </div>
            
                <nav className="flex-1 w-full mt-3">
                    <ul className="flex flex-col space-y-2 justify-center">
                        <li className="flex justify-center">
                            <div className="h-11 w-11 rounded-full relative bg-gray-100 dark:text-indigo-100 dark:bg-gray-700 cursor-pointer flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700 shadow-sm">
                                <ForumIcon style={{fontSize:24}} />
                            </div> 
                        </li>
                        <li className="flex justify-center">
                            <div className="h-11 w-11 rounded-full relative bg-gray-100 dark:text-indigo-100 dark:bg-gray-700 cursor-pointer flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700 shadow-sm">
                                <ReplyAllIcon style={{fontSize:24}} />
                            </div> 
                        </li>
                        <li className="flex justify-center">
                            <div onClick={()=>setActiveTheme()} className="h-11 w-11 rounded-full relative bg-gray-100 dark:text-indigo-100 dark:bg-gray-700 cursor-pointer flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700 shadow-sm">
                                {theme == 'dark' ?
                                    <Brightness2Icon style={{fontSize:24}} />
                                    :
                                    <WbSunnyIcon style={{fontSize:24}} />
                                }
                                
                            </div> 
                        </li>
                        
                        <li className="border-t-[0.5px] border-gray-100 dark:border-gray-800"></li>

                        <li className="flex justify-center">
                            <Link href={`/airtel-zambia/dash`}>
                                <a className="h-11 w-11 rounded-full relative bg-gray-100 dark:text-indigo-100 dark:bg-gray-700 cursor-pointer flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700 shadow-sm">
                                    <img src="/logos/fnb.jpg" className="shadow-sm object-cover h-11 w-11 rounded-full" alt="" />
                                </a> 
                            </Link>
                        </li>
                        <li className="flex justify-center">
                            <div className="h-11 w-11 rounded-full relative bg-gray-100 dark:text-indigo-100 dark:bg-gray-700 cursor-pointer flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700 shadow-sm">
                                <AddRoundedIcon style={{fontSize:23}} />
                            </div> 
                        </li>
                    </ul>
                </nav>
                
                <section className="flex justify-center">
                    <Popover className="h-11 w-11 bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-900 shadow-sm rounded-full relative cursor-pointer">
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            {/* <Popover.Panel className="absolute z-10 w-44 h-44 -mt-12">
                                <div className="grid grid-cols-2 bg-white ">
                                    <a href="/analytics">Analytics</a>
                                    <a href="/engagement">Engagement</a>
                                    <a href="/security">Security</a>
                                    <a href="/integrations">Integrations</a>
                                </div>
                            </Popover.Panel> */}
                            
                        </Transition>
                        <Popover.Button className="p-2">
                            <img src="/images/blank-avatar.png" alt="" />
                        </Popover.Button>
                        <OnlineComponent isOnlineState={true} />
                        
                    </Popover>
                </section>
            </div>
        </aside>
    )
}

export default MainNavbar
