import React from 'react'
import BusinessWrapper from '../wrappers/BusinessWrapper'

const BusinessSubscriptionsPage = () => {
    return (
        <BusinessWrapper showSearch={true} showRightBar={true}>
            <div className="mt-2 w-full 2xl:w-3/4 ">
                <section className="pt-2 pb-4">
                    <div className="dark:text-gray-50">All Subscriptions</div>

                    <main className="w-full mt-4">
                        <header className="w-full sticky top-0">
                            <div className="grid grid-cols-6 px-2">
                                <div className="col-span-2">
                                    <span className="text-gray-400 dark:text-gray-200 font-semibold py-2 block">Package</span>
                                </div>
                                <div className="col-span-1">
                                    <span className="text-gray-400 dark:text-gray-200 font-semibold py-2 block">Duration</span>
                                </div>
                                <div className="col-span-1">
                                    <span className="text-gray-400 dark:text-gray-200 font-semibold py-2 block">Price</span>
                                </div>
                                <div className="col-span-1">
                                    <span className="text-gray-400 dark:text-gray-200 font-semibold py-2 block">Status</span>
                                </div>
                                <div className="col-span-1">
                                    <span className="text-gray-400 dark:text-gray-200 font-semibold py-2 block">Expires At</span>
                                </div>
                            </div>
                        </header>
                        <ul>
                            <li className="w-full dark:bg-gray-800 bg-gray-100 rounded-lg mb-2">
                                <div className="grid grid-cols-6 px-2">
                                    <div className="col-span-2">
                                        <span className="text-gray-700 dark:text-gray-200 py-3 block text-sm ">Standard</span>
                                    </div>
                                    <div className="col-span-1">
                                        <span className="text-gray-700 dark:text-gray-200 py-3 block text-sm ">Annual</span>
                                    </div>
                                    <div className="col-span-1 flex space-x-1">
                                        <span className="text-gray-700 dark:text-gray-200 py-3 block text-sm  font-semibold">K799</span>
                                        <span className="text-gray-200 py-3 block line-through text-sm">K399</span>
                                    </div>
                                    <div className="col-span-1 flex flex-col justify-center">
                                        <div>
                                            <span className="text-xxs uppercase font-semibold bg-indigo-100 text-indigo-500 rounded-lg px-1">active</span>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <span className="text-gray-700 dark:text-gray-200 py-3 block text-sm ">13/12/21</span>
                                    </div>
                                </div>
                            </li>
                            <li className="w-full dark:bg-gray-800 bg-gray-100 rounded-lg mb-2">
                                <div className="grid grid-cols-6 px-2">
                                    <div className="col-span-2">
                                        <span className="text-gray-700 dark:text-gray-200 py-3 block text-sm ">Enterprise</span>
                                    </div>
                                    <div className="col-span-1">
                                        <span className="text-gray-700 dark:text-gray-200 py-3 block text-sm ">Annually</span>
                                    </div>
                                    <div className="col-span-1 flex space-x-1">
                                        <span className="text-gray-700 dark:text-gray-200 py-3 block text-sm  font-semibold">K12,999</span>
                                        <span className="text-gray-200 py-3 block line-through text-sm">K399</span>
                                    </div>
                                    <div className="col-span-1 flex flex-col justify-center">
                                        <div>
                                            <span className="text-xxs uppercase font-semibold bg-red-100 text-red-500 rounded-lg px-1">not active</span>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <span className="text-gray-700 dark:text-gray-200 py-3 block text-sm ">13/12/21</span>
                                    </div>
                                </div>
                            </li>
                            <li className="w-full dark:bg-gray-800 bg-gray-100 rounded-lg mb-2">
                                <div className="grid grid-cols-6 px-2">
                                    <div className="col-span-2">
                                        <span className="text-gray-700 dark:text-gray-200 py-3 block text-sm ">Basic</span>
                                    </div>
                                    <div className="col-span-1">
                                        <span className="text-gray-700 dark:text-gray-200 py-3 block text-sm ">Monthly</span>
                                    </div>
                                    <div className="col-span-1 flex space-x-1">
                                        <span className="text-gray-700 dark:text-gray-200 py-3 block text-sm  font-semibold">K399</span>
                                        <span className="text-gray-200 py-3 block line-through text-sm">K399</span>
                                    </div>
                                    <div className="col-span-1 flex flex-col justify-center">
                                        <div>
                                            <span className="text-xxs uppercase font-semibold bg-red-100 text-red-500 rounded-lg px-1">not active</span>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <span className="text-gray-700 dark:text-gray-200 py-3 block text-sm ">13/12/21</span>
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                        
                    </main>
                </section>
            </div>
        </BusinessWrapper>
    )
}

export default BusinessSubscriptionsPage
