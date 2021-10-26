import React from 'react'
import CopyRightFooter from '../common/CopyRightFooter'
import OnlineComponent from '../common/OnlineComponent'

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
                    {[1,2,3,5,6,7,8].map(item => 
                        <li key={item} className="">
                            <div className="flex space-x-2 p-2">
                                <div className="h-10 w-10 bg-white items-center rounded-full flex-none relative">
                                    <img src="/logos/fnb.jpg" className="h-10 w-10 rounded-full shadow-sm object-cover" alt="" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex space-x-1 items-center justify-between">
                                        <div className="text-gray-800 dark:text-gray-50 font-semibold">Fnb Zambia</div>  
                                        <button className="hover:underline text-xs px-1 rounded-lg text-indigo-500 dark:text-indigo-100 capitalize font-semibold">Follow</button>
                                    </div>
                                    
                                   <div className="flex flex-col justify-between">
                                       <div className="text-xs flex justify-between">
                                           <span className="dark:text-gray-100">Support team</span>
                                           <span className="bg-indigo-100 px-1 text-indigo-600 rounded font-semibold">12</span>
                                        </div>
                                    <ul className="pl-1 flex mt-1">
                                            <li className="h-7 w-7 -ml-2 relative">
                                                <img src="./images/avatar2.jpg" className="h-7 w-7 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                                <OnlineComponent isOnlineState={true} />
                                            </li>
                                            <li className="h-7 w-7 -ml-2 relative">
                                                <img src="./images/avatar3.jpg" className="h-7 w-7 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                            </li>
                                            <li className="h-7 w-7 -ml-2 relative">
                                                <img src="./images/avatar2.jpg" className="h-7 w-7 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                                <OnlineComponent isOnlineState={true} />
                                            </li>
                                            <li className="h-7 w-7 -ml-2 relative">
                                                <img src="./images/avatar1.jpg" className="h-7 w-7 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                                <OnlineComponent isOnlineState={true} />
                                            </li>
                                            <li className="h-7 w-7 -ml-2 relative">
                                                <img src="./images/avatar4.jpg" className="h-7 w-7 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                            </li>
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
