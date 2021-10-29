import React from 'react'
import BusinessWrapper from '../wrappers/BusinessWrapper'

import AddCircleIcon from '@material-ui/icons/AddCircle';

const BusinessMembersPage = () => {
    return (
        <BusinessWrapper showSearch={true} showRightBar={true}>
            <div className="mt-2 w-full 2xl:w-3/4">
            <section className="pt-2 pb-4">
                    <div className="dark:text-gray-50">Customer Support Team</div>
                    <div className="mt-4 grid grid-cols-3 gap-4">

                        <div className="col-span-1">
                            <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-2">
                                <p className="px-1 flex space-x-1">
                                    <span className="dark:text-indigo-50">Sales Team</span>
                                    <span className="text-xs mt-[2px] mr-[2px] bg-indigo-100 dark:bg-gray-700 dark:text-indigo-100 px-1 text-indigo-600 rounded font-semibold">12</span>
                                </p>
                                <ul className="pl-3 flex mt-2">
                                    <li className="h-10 w-10 -ml-2">
                                        <img src="/images/avatar2.jpg" className="h-10 w-10 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                    </li>
                                    <li className="h-10 w-10 -ml-2">
                                        <img src="/images/avatar3.jpg" className="h-10 w-10 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                    </li>
                                    <li className="h-10 w-10 -ml-2">
                                        <img src="/images/avatar2.jpg" className="h-10 w-10 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                    </li>
                                    <li className="h-10 w-10 -ml-2">
                                        <img src="/images/avatar1.jpg" className="h-10 w-10 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                    </li>
                                    <li className="h-10 w-10 -ml-2">
                                        <img src="/images/avatar4.jpg" className="h-10 w-10 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                    </li>
                                </ul>
                                <div className="p-2">
                                    <a href="" className="hover:underline dark:text-indigo-100 text-sm">View Team</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-2">
                                <p className="px-1 flex space-x-1">
                                    <span className="dark:text-indigo-50">Accounting Team</span>
                                    <span className="text-xs mt-[2px] mr-[2px] bg-indigo-100 dark:bg-gray-700 dark:text-indigo-100 px-1 text-indigo-600 rounded font-semibold">12</span>
                                </p>
                                <ul className="pl-3 flex mt-2">
                                    <li className="h-10 w-10 -ml-2">
                                        <img src="/images/avatar2.jpg" className="h-10 w-10 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                    </li>
                                    <li className="h-10 w-10 -ml-2">
                                        <img src="/images/avatar3.jpg" className="h-10 w-10 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                    </li>
                                    <li className="h-10 w-10 -ml-2">
                                        <img src="/images/avatar2.jpg" className="h-10 w-10 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                    </li>
                                    <li className="h-10 w-10 -ml-2">
                                        <img src="/images/avatar1.jpg" className="h-10 w-10 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                    </li>
                                    <li className="h-10 w-10 -ml-2">
                                        <img src="/images/avatar4.jpg" className="h-10 w-10 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                    </li>
                                </ul>
                                <div className="p-2">
                                    <a href="" className="hover:underline dark:text-indigo-100 text-sm">View Team</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-2">
                                <p className="px-1 flex space-x-1">
                                    <span className="dark:text-indigo-50">Technical Team</span>
                                    <span className="text-xs mt-[2px] mr-[2px] bg-indigo-100 dark:bg-gray-700 dark:text-indigo-100 px-1 text-indigo-600 rounded font-semibold">12</span>
                                </p>
                                <ul className="pl-3 flex mt-2">
                                    <li className="h-10 w-10 -ml-2">
                                        <img src="/images/avatar2.jpg" className="h-10 w-10 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                    </li>
                                    <li className="h-10 w-10 -ml-2">
                                        <img src="/images/avatar3.jpg" className="h-10 w-10 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                    </li>
                                    <li className="h-10 w-10 -ml-2">
                                        <img src="/images/avatar2.jpg" className="h-10 w-10 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                    </li>
                                    <li className="h-10 w-10 -ml-2">
                                        <img src="/images/avatar1.jpg" className="h-10 w-10 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                    </li>
                                    <li className="h-10 w-10 -ml-2">
                                        <img src="/images/avatar4.jpg" className="h-10 w-10 rounded-full object-cover border-2 border-gray-50 dark:border-gray-800" alt="" />
                                    </li>
                                </ul>
                                <div className="p-2">
                                    <a href="" className="hover:underline dark:text-indigo-100 text-sm">View Team</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex flex-col space-y-3 rounded-lg bg-gray-50 dark:bg-gray-800 p-6 text-center">
                                <span className="text-indigo-600 dark:text-indigo-50">
                                    <AddCircleIcon style={{fontSize:28}} /> 
                                </span>
                                <span className="text-gray-800 dark:text-gray-50">Add a New Team</span>
                            </div>
                        </div>

                        
                    </div>
                </section>
            </div>
        </BusinessWrapper>
    )
}

export default BusinessMembersPage
