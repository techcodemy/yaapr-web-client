import React from 'react'

const AboutPage = () => {
    return (
        <div className="min-h-screen">
            <div className="grid grid-cols-2 pt-12">
                <div className="col-span-1">
                    <div className="text-6xl font-bold text-primary-base dark:text-white">About Yaapr</div>
                </div>
                <div className="col-span-1">
                    <div className="mb-4 pt-4">
                        <div className="text-2xl font-bold dark:text-indigo-50 mb-2">What is yaapr?</div>
                        <div className="dark:text-white">A Centralized Online Customer Service Platform which makes it easy and affordable for clients/consumers to communicate with their service providers...</div>
                    </div>
                    <div className="mb-4 pt-4">
                        <div className="text-2xl font-bold dark:text-indigo-50 mb-2">How does it work?</div>
                        <div className="dark:text-white py-2">Consumer to business communication</div>
                        <div className="dark:text-white">Realtime Messaging System with:</div>
                        <ul className="list-decimal dark:text-white ml-6 flex flex-col space-y-2 mt-2">
                            <li>
                                <div className="dark:text-white">Notification Broadcasting</div>
                            </li>
                            <li>
                                <div className="dark:text-white">Voice note sharing</div>
                            </li>
                            <li>
                                <div className="dark:text-white">File/Document sharing</div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-4 pt-4">
                        <div className="text-2xl font-bold dark:text-indigo-50 mb-2">Who is it for?</div>
                        <div className="dark:text-white">our platform is suitable for:</div>
                        <ul className="list-decimal dark:text-white ml-6 flex flex-col space-y-2 mt-2">
                            <li>
                                <div className="dark:text-white">Startups</div>
                            </li>
                            <li>
                                <div className="dark:text-white">Enterprises</div>
                            </li>
                            <li>
                                <div className="dark:text-white">Medium to large business</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
