import React from 'react'

import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import AttachmentIcon from '@material-ui/icons/Attachment';
import ImageIcon from '@material-ui/icons/Image';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import OnlineComponent from '../common/OnlineComponent';

const SidebarComponent = () => {
    const nowDate = new Date().getFullYear()
    return (
        <aside className="w-64 h-screen flex flex-col">
                <section className="flex-1">
                    <div className="border-b border-gray-100 dark:border-gray-800 py-6 px-3">
                        <div className="flex justify-center">
                            <div className="h-16 w-16  relative rounded-full">
                                <img src="/images/avatar2.jpg" className="h-16 w-16 object-cover rounded-full" alt="" />
                                <OnlineComponent isOnlineState={false} />
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <div className="capitalize text-gray-800 font-semibold dark:text-indigo-50">Peter chibwe</div>
                            <div className="text-sm text-gray-500 dark:text-indigo-200">Airtel Zambia</div>
                            {/* <span className="text-xxs uppercase">Sales</span> */}
                        </div>
                    </div>

                    <div className="px-3">
                        <header className="py-3">
                            <div className="text-purple-50">Attachments</div>
                        </header>
                        <div>
                            <ul className="flex flex-col space-y-2">

                                <li className="flex flex-row items-center justify-between">
                                    <div className="flex flex-row items-center space-x-2">
                                        <div className="h-8 w-8 flex items-center justify-center bg-indigo-100 text-sm rounded-lg text-indigo-400">
                                            <KeyboardVoiceIcon style={{fontSize:24}} />
                                        </div>
                                        <div className="text-sm dark:text-indigo-50">
                                            Voice Notes
                                        </div>
                                    </div>
                                    <button className="h-8 w-8 flex items-center justify-center rounded-lg text-sm text-gray-600">
                                        <KeyboardArrowRightIcon style={{fontSize:24}} />
                                    </button>
                                </li>

                                <li className="flex flex-row items-center justify-between">
                                    <div className="flex flex-row items-center space-x-2">
                                        <div className="h-8 w-8 flex items-center justify-center bg-indigo-100 text-sm rounded-lg text-indigo-400">
                                            <AttachmentIcon style={{fontSize:24}} />
                                        </div>
                                        <div className="text-sm dark:text-indigo-50">
                                            Documents
                                        </div>
                                    </div>
                                    <button className="h-8 w-8 flex items-center justify-center  rounded-lg text-sm text-gray-600">
                                        <KeyboardArrowRightIcon style={{fontSize:24}} />
                                    </button>
                                </li>

                                <li className="flex flex-row items-center justify-between">
                                    <div className="flex flex-row items-center space-x-2">
                                        <div className="h-8 w-8 flex items-center justify-center bg-indigo-100 text-sm rounded-lg text-indigo-400">
                                            <ImageIcon style={{fontSize:24}} />
                                        </div>
                                        <div className="text-sm dark:text-indigo-50">
                                            Images
                                        </div>
                                    </div>
                                    <button className="h-8 w-8 flex items-center justify-center  rounded-lg text-sm text-gray-600">
                                        <KeyboardArrowRightIcon style={{fontSize:24}} />
                                    </button>
                                </li>

                            
                            </ul>
                        </div>
                    </div>
                </section>

               <section className="pb-3 px-3 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between pt-2">
                        <a href="" className="text-sm hover:underline dark:text-indigo-100">Terms of Use</a>
                        <a href="" className="text-sm hover:underline dark:text-indigo-100">Pricing</a>
                        <a href="" className="text-sm hover:underline dark:text-indigo-100">Contact</a>
                    </div>
                    <div className="text-xs mt-1 dark:text-indigo-100">Yaapr &copy; {nowDate}. Yaapr Technologies Ltd</div>
               </section>

            </aside>
    )
}

export default SidebarComponent
