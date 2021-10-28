import React from 'react'
import UserWrapper from '../wrappers/UserWrapper'

import Image from 'next/image'

const CompanyViewPage = () => {

    return (
        <UserWrapper>
            <main className="w-full 2xl:w-3/4 mt-4">
                <section className="flex flex-col pb-4">
                    <div className="rounded-lg bg-gray-100 dark:bg-gray-800  aspect-w-4 aspect-h-1"></div>
                    <div className="flex flex-col justify-center">
                        <div className="-mt-16 flex justify-center">
                            <Image src="/logos/airtel.jpg" height={130} width={130} className="object-cover rounded-full" alt="" />
                        </div>
                        <div className="text-center py-2">
                            <p className="text-2xl font-bold text-gray-700 dark:text-gray-50">Airtel Zambia</p>
                            <div className="flex justify-center space-x-1">
                                <div className="text-gray-600 dark:text-gray-400">Followers: 24k</div>
                                <span className="text-indigo-200 dark:text-gray-700">-</span>
                                <div className="text-gray-600 dark:text-gray-400">FAQs: 24</div>
                                <span className="text-indigo-200 dark:text-gray-700">-</span>
                                <div className="text-gray-600 dark:text-gray-400">Team: 24</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="border-t border-gray-50 dark:border-gray-800 py-4">
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

                        
                    </div>
                </section>
            </main>
        </UserWrapper>
    )
}

export default CompanyViewPage
