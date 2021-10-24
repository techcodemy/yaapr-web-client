import React from 'react'

import AttachmentIcon from '@material-ui/icons/Attachment';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';

const MainChatComponent = () => {
    return (
      
            <ul className="flex-1 bg-gray-50 dark:bg-gray-800 p-3 overflow-y-auto">
                <li className="flex justify-start mt-3">
                    <section className="w-[80%] flex space-x-2">
                        <div className="h-10 w-10 rounded-full">
                            <img src="/images/avatar4.jpg" className="h-10 w-10 border-2 border-white dark:border-gray-800 object-cover rounded-full" alt="" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className="flex flex-row space-x-2">
                                <span className="text-xs capitalize dark:text-gray-200">Peter chibwe:</span>
                                <span className="text-xs dark:text-gray-200">1 hour ago</span>
                            </div>
                            <div className="bg-white dark:text-indigo-50 dark:bg-gray-900 rounded-lg rounded-bl-none text-sm p-2 shadow-md">
                                hello buudy, how are you today
                            </div>
                        </div>
                    </section>
                </li>
                <li className="flex justify-end mt-3">
                    <section className="w-[80%] flex justify-end space-x-2">
                        <div className="flex flex-col space-y-2">
                            <div className="flex flex-row justify-end space-x-2">
                                <span className="text-xs dark:text-gray-200">1 hour ago</span>
                            </div>
                            <div className="bg-primary-base text-white rounded-lg rounded-br-none text-sm p-2 shadow-md">
                                hello buudy, how are you today
                            </div>
                        </div>
                    </section>
                </li>

                <li className="flex justify-end mt-3">
                    <section className="w-[80%] flex justify-end space-x-2">
                        <div className="flex flex-col space-y-2">
                            <div className="flex flex-row justify-end space-x-2">
                                <span className="text-xs dark:text-gray-200">1 hour ago</span>
                            </div>
                            <div className="bg-primary-base text-white rounded-lg rounded-br-none text-sm p-2 shadow-md">
                            The Lean Startup isn’t just about how to create a more successful
                            entrepreneurial business; it’s about what we can learn from those
                            businesses to improve virtually everything we do. I imagine Lean
                            Startup principles applied
                            </div>
                        </div>
                    </section>
                </li>

                <li className="flex justify-start mt-3">
                    <section className="w-[80%] flex space-x-2">
                        <div className="h-10 w-10 rounded-full">
                            <img src="/images/avatar4.jpg" className="h-10 w-10 border-2 border-white dark:border-gray-800 object-cover rounded-full" alt="" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className="flex flex-row space-x-2">
                                <span className="text-xs capitalize dark:text-gray-200">Peter chibwe:</span>
                                <span className="text-xs dark:text-gray-200">1 hour ago</span>
                            </div>
                            <div className="bg-white dark:text-indigo-50 dark:bg-gray-900 rounded-lg rounded-bl-none text-sm p-2 shadow-md">
                                —Tim O’Reilly, CEO, O’Reilly Media
                            </div>
                        </div>
                    </section>
                </li>

                <li className="flex justify-end mt-3">
                    <section className="w-[80%] flex justify-end space-x-2">
                        <div className="flex flex-col space-y-2">
                            <div className="flex flex-row justify-end space-x-2">
                                <span className="text-xs dark:text-gray-200">1 hour ago</span>
                            </div>
                            {/* <div className="bg-primary-base text-white rounded-lg rounded-br-none text-sm p-2 shadow-md"> */}
                           
                            <div className="flex justify-end ">
                                <div className="w-1/2 grid grid-cols-2 gap-1 bg-primary-base text-white rounded-lg rounded-br-none text-sm p-2 shadow-md">
                                    <img src="/images/avatar1.jpg" className="col-span-1 shadow-md object-cover rounded-lg" />
                                    <img src="/images/avatar1.jpg" className="col-span-1 shadow-md object-cover rounded-lg" />
                                    <img src="/images/avatar1.jpg" className="col-span-1 shadow-md object-cover rounded-lg" />
                                    <img src="/images/avatar1.jpg" className="col-span-1 shadow-md object-cover rounded-lg" />
                                </div>
                            </div>
                        </div>
                    </section>
                </li>

                <li className="flex justify-start mt-3">
                    <section className="w-[80%] flex space-x-2">
                        <div className="h-10 w-10 rounded-full">
                            <img src="/images/avatar4.jpg" className="h-10 w-10 border-2 border-white dark:border-gray-800 object-cover rounded-full" alt="" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className="flex flex-row space-x-2">
                                <span className="text-xs capitalize dark:text-gray-200">Peter chibwe:</span>
                                <span className="text-xs dark:text-gray-200">1 hour ago</span>
                            </div>
                            <div className="bg-white dark:text-indigo-50 dark:bg-gray-900 rounded-lg rounded-bl-none text-sm p-2 shadow-md">
                                <a href="/the-lean-startup.pdf" className="hover:text-indigo-600 flex space-x-1">
                                  <AttachmentIcon style={{fontSize:22}} /> 
                                  <span>the lean startup.pdf</span>
                                </a>
                            </div>
                        </div>
                    </section>
                </li>

                <li className="flex justify-end mt-3">
                    <section className="w-[80%] flex justify-end space-x-2">
                        <div className="flex flex-col space-y-2">
                            <div className="flex flex-row justify-end space-x-2">
                                <span className="text-xs dark:text-gray-200">1 hour ago</span>
                            </div>
                            <div className="bg-primary-base text-white rounded-lg rounded-br-none text-sm p-2 shadow-md flex flex-row space-x-2">
                                <div className="text-white">
                                    <KeyboardVoiceIcon style={{fontSize:22}} />
                                </div>
                                <div className="text-white">
                                    0.30 secs
                                </div>
                            </div>
                        </div>
                    </section>
                </li>
            </ul>
    )
}

export default MainChatComponent
