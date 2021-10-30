import React from 'react'

import Link from 'next/link'

const AboutFooter = () => {
    const nowDate = new Date().getFullYear()
    return (
        <div className="bg-gray-50 dark:bg-gray-800 pt-6">
            <div className="grid grid-cols-3 pb-12">
                <div className="col-span-2 flex flex-col justify-between">
                    <div className="flex-1 py-2">
                        <div className="flex items-center space-x-2">
                            <div>
                                <img src="/yaapr-chat-icon.svg" className="h-10 w-10" alt="yaapr logo" />
                            </div>
                            <span className="text-2xl font-bold dark:text-indigo-50">yaapr</span> 
                        </div>
                        <div className="py-2 dark:text-gray-300">Native Apps coming soon</div>
                        <div className="flex space-x-2 mt-2">
                            <button className="btn">
                                <div className="h-12">
                                    <img src="/images/google-store-download-button.png" className="h-full w-full object-cover" alt="android download app button" />
                                </div>
                            </button>
                            <button className="btn">
                                <div className="h-12">
                                    <img src="/images/apple-store-download-buttons.png" className="h-full object-cover" alt="ios download app button" />
                                </div>
                            </button>
                        </div>
                        <div className="dark:text-indigo-100 mt-6">
                            &copy; Yaapr {nowDate}. Yaapr Technologies Ltd
                        </div>
                    </div>

                    
                </div>
                <div className="col-span-1">
                    <div className="py-4 flex flex-col justify-between">
                        <div className="flex items-center space-x-2 mb-4">
                            <Link href="/about">
                                <a className="text-sm hover:underline dark:text-indigo-100">
                                    About
                                </a>
                            </Link>
                            <Link href="/about">
                                <a className="text-sm hover:underline dark:text-indigo-100">
                                    Pricing
                                </a>
                            </Link>
                            <Link href="/about">
                                <a className="text-sm hover:underline dark:text-indigo-100">
                                    Privacy
                                </a>
                            </Link>
                            <Link href="/about">
                                <a className="text-sm hover:underline dark:text-indigo-100">
                                    Terms of Use
                                </a>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFooter
