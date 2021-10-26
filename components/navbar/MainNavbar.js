import React from 'react'

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
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
                    <div className="h-11 w-11 rounded-full bg-primary-base"></div>
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
                            <div className="h-11 w-11 rounded-full relative bg-gray-100 dark:text-indigo-100 dark:bg-gray-700 cursor-pointer flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700 shadow-sm">
                                <img src="/images/avatar2.jpg" className="shadow-sm object-cover h-11 w-11 rounded-full" alt="" />
                            </div> 
                        </li>
                        <li className="flex justify-center">
                            <div className="h-11 w-11 rounded-full relative bg-gray-100 dark:text-indigo-100 dark:bg-gray-700 cursor-pointer flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700 shadow-sm">
                                <AddRoundedIcon style={{fontSize:23}} />
                            </div> 
                        </li>
                    </ul>
                </nav>
                
                <section className="flex justify-center">
                    <div className="h-11 w-11 bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-900 shadow-sm rounded-full relative cursor-pointer">
                        <div className="p-2">
                            <img src="./images/blank-avatar.png" alt="" />
                        </div>
                        <OnlineComponent isOnlineState={true} />
                    </div>
                </section>
            </div>
        </aside>
    )
}

export default MainNavbar
