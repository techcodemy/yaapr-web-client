import React from 'react'
import OnlineComponent from '../common/OnlineComponent'

const UsersChatBar = () => {
    return (
        <section className="w-[286px] flex-none h-screen top-0 sticky bg-white dark:bg-gray-900 py-2 overflow-hidden">
            <div className="bg-white dark:bg-gray-900 rounded-lg relative flex flex-col h-screen overflow-y-auto">
                <div className="h-[98px] flex-none bg-white dark:bg-gray-900 ">
                   
                    <div className="px-2 pb-1">
                        <input placeholder="Search my chat?" className="xp-3 input--control input--control-noerr" />
                    </div>
                    <div className="px-3 py-2 font-semibold  text-gray-700 dark:text-gray-200">
                        All Chats
                    </div>
                </div>
          
                <ul className="h-full overflow-y-auto pb-4 px-2">

                    <li className="transition duration-500 hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-900  cursor-pointer rounded-lg mb-2 bg-gray-50">
                        <div className="flex space-x-2 p-2">
                            <div className="h-10 w-10 bg-white dark:bg-gray-900 items-center rounded-full flex-none relative">
                                <img src="/images/avatar4.jpg" className="h-10 w-10 rounded-full shadow-sm" alt="" />
                                <OnlineComponent isOnlineState={true} />
                            </div>

                            <div className="">
                                <div className="flex items-center justify-between">
                                        <div className="flex space-x-1 items-center">
                                            <div className="text-gray-800 dark:text-gray-50 text-sm font-semibold">Naoh Tembo</div>  
                                            <span className="text-xxxs bg-yellow-50 dark:bg-indigo-700 px-1 rounded-lg text-yellow-500  dark:text-white capitalize font-semibold">Fnb Zambia</span>
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
                            
                        </div>
                    </li>

                    <li className="transition duration-500 hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-900  cursor-pointer rounded-lg mb-2 bg-gray-50">
                        <div className="flex space-x-2 p-2">
                            <div className="h-10 w-10 bg-white items-center rounded-full flex-none relative">
                                <img src="/images/avatar1.jpg" className="h-10 w-10 rounded-full shadow-sm" alt="" />
                                <OnlineComponent isOnlineState={true} />
                            </div>
                            <div className="">
                                <div className="flex space-x-1 items-center">
                                    <div className="text-gray-800 dark:text-gray-50 text-sm font-semibold">Naoh Tembo</div> <span className="text-xxxs bg-indigo-100 dark:bg-indigo-700 px-1 rounded-lg text-indigo-500 dark:text-white capitalize font-semibold">Fnb Zambia</span>
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
                        </div>
                    </li>

                    <li className="transition duration-500 hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-900  cursor-pointer rounded-lg mb-2 bg-gray-50">
                        <div className="flex space-x-2 p-2">
                            <div className="h-10 w-10 bg-white items-center rounded-full flex-none relative">
                                <img src="/images/avatar5.jpg" className="h-10 w-10 rounded-full shadow-sm" alt="" />
                                <OnlineComponent isOnlineState={true} />
                            </div>
                            <div className="">
                                <div className="flex space-x-1 items-center">
                                    <div className="text-gray-800 dark:text-gray-50 text-sm font-semibold">Naoh Tembo</div>  <span className="text-xxxs bg-indigo-100 dark:bg-indigo-700 px-1 rounded-lg text-indigo-500 dark:text-white capitalize font-semibold">Fnb Zambia</span>
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
                        </div>
                    </li>

                    <li className="transition duration-500 hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-900  cursor-pointer rounded-lg mb-2 bg-gray-50">
                        <div className="flex space-x-2 p-2">
                            <div className="h-10 w-10 bg-white items-center rounded-full flex-none relative">
                                <img src="/images/avatar4.jpg" className="h-10 w-10 rounded-full shadow-sm" alt="" />
                                <OnlineComponent isOnlineState={true} />
                            </div>
                            <div className="">
                                <div className="flex space-x-1 items-center">
                                    <div className="text-gray-800 dark:text-gray-50 text-sm font-semibold">Naoh Tembo</div>  <span className="text-xxxs bg-indigo-100 dark:bg-indigo-700 px-1 rounded-lg text-indigo-500 dark:text-white capitalize font-semibold">Fnb Zambia</span>
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
                        </div>
                    </li>

                    <li className="transition duration-500 hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-900  cursor-pointer rounded-lg mb-2 bg-gray-50">
                        <div className="flex space-x-2 p-2">
                            <div className="h-10 w-10 bg-white items-center rounded-full flex-none relative">
                                <img src="/images/avatar1.jpg" className="h-10 w-10 rounded-full shadow-sm" alt="" />
                                <OnlineComponent isOnlineState={true} />
                            </div>
                            <div className="">
                                <div className="flex space-x-1 items-center">
                                    <div className="text-gray-800 dark:text-gray-50 text-sm font-semibold">Naoh Tembo</div> 
                                    <span className="text-xxxs bg-indigo-100 dark:bg-indigo-700 px-1 rounded-lg text-indigo-500 dark:text-white capitalize font-semibold">Fnb Zambia</span>
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
                        </div>
                    </li>
                    {[1,2,3,5,6,7,8].map(item => 
                        <li key={item} className="transition duration-500 hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-900  cursor-pointer rounded-lg mb-2 bg-gray-50">
                            <div className="flex space-x-2 p-2">
                                <div className="h-10 w-10 bg-white items-center rounded-full flex-none relative">
                                    <img src="/images/avatar5.jpg" className="h-10 w-10 rounded-full shadow-sm" alt="" />
                                    <OnlineComponent isOnlineState={true}  />
                                </div>
                                <div className="">
                                    <div className="flex space-x-1 items-center">
                                        <div className="text-gray-800 dark:text-gray-50 text-sm font-semibold">Naoh Tembo</div>  
                                        <span className="text-xxxs bg-indigo-100 dark:bg-indigo-700 px-1 rounded-lg text-indigo-500 dark:text-white capitalize font-semibold">Fnb Zambia</span>
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
                            </div>
                        </li>
                    )}
                    <li className="">
                            <div className="flex space-x-2 p-2">
                                <div className="h-10 w-10 bg-white dark:bg-gray-900 items-center rounded-full flex-none relative">
                                    <img src="/images/avatar5.jpg" className="h-10 w-10 rounded-full shadow-sm" alt="" />
                                    <OnlineComponent isOnlineState={true}  />
                                </div>
                                <div className="">
                                    <div className="flex space-x-1 items-center">
                                        <div className="text-gray-800 dark:text-gray-50 text-sm font-semibold">Naoh Tembo</div>  
                                        <span className="text-xxxs bg-indigo-100 dark:bg-indigo-700 px-1 rounded-lg text-indigo-500 dark:text-white capitalize font-semibold">Fnb Zambia</span>
                                    </div>
                                    <div className="truncate-1-lines leading-tight text-sm tracking-tight dark:text-white">
                                        hey,
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-xs text-gray-500">1hr ago</span>
                                        </div>
                                        <span className="text-xs capitalize text-gray-500">sales team</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                </ul> 
                <div className="bg-gradient-to-t from-white dark:from-gray-800 h-12 absolute bottom-0 right-0 left-0"></div>  
            </div>
        </section> 
    )
}

export default UsersChatBar
