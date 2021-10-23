import React from 'react'

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import OnlineComponent from '../common/OnlineComponent';

const MainNavbar = () => {
    return (
        <aside className="h-screen w-[76px] flex-none py-2 top-0 sticky">
            <div className="flex flex-col justify-between h-full bg-white border border-gray-50 rounded-lg py-2">
            
                <nav className="flex-1 w-full">
                    <ul className="flex flex-col space-y-2 justify-center">
                        <li className="flex justify-center">
                            <div className="h-11 w-11 bg-gray-100 rounded-full relative cursor-pointer flex flex-col items-center justify-center">
                                <HomeRoundedIcon style={{fontSize:24}} />
                            </div> 
                        </li>
                        <li className="flex justify-center">
                            <div className="h-11 w-11 bg-gray-100 rounded-full relative cursor-pointer flex flex-col items-center justify-center">
                                <img src="./images/avatar2.jpg" className="shadow-sm object-cover h-11 w-11 rounded-full" alt="" />
                            </div> 
                        </li>
                        <li className="border-[0.5px] border-gray-50"></li>
                        <li className="flex justify-center">
                            <div className="h-11 w-11 bg-gray-100 rounded-full relative cursor-pointer flex flex-col items-center justify-center">
                                <AddRoundedIcon style={{fontSize:23}} />
                            </div> 
                        </li>
                    </ul>
                </nav>
                
                <section className="flex justify-center">
                    <div className="h-11 w-11 bg-gray-100 rounded-full relative cursor-pointer">
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
