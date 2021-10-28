import React from 'react'
import SingleFaqPost from '../common/SingleFaqPost'
import BusinessWrapper from '../wrappers/BusinessWrapper'

const companies = [
    {
        id:1,
        logo:"fnb.jpg",
        banner:"fnb-add.jpg",
        name:"fnb zambia"
    },
    {
        id:2,
        logo:"airtel.jpg",
        banner:"airtel-ads.jpg",
        name:"airtel zambia"
    },
    {
        id:3,
        logo:"ra.png",
        banner:"ads-dir.png",
        name:"Radian stores"
    },
    {
        id:4,
        logo:"un.png",
        banner:"",
        name:"United Nations"
    },
    {
        id:5,
        logo:"game.png",
        banner:"ads-anonoe.png",
        name:"Game stores Zambia"
    },
    {
        id:6,
        logo:"mlife.jpg",
        banner:"advertising.jpg",
        name:"MLife Insurance"
    },
]


const BusinessHomePage = () => {
    return (
        <BusinessWrapper showSearch={true} showRightBar={true}>
            <div className="mt-2 w-full 2xl:w-3/4">
                <div className="mt-2 mb-4">
                    <div className="flex flex-row space-x-2">
                        <div className="w-12 flex-none">
                            <img src="/logos/airtel.jpg" className="h-12 w-12 object-cover rounded-full shadow-sm" alt="" />
                        </div>
                        <div className="flex flex-col space-y-3 w-full px-3">
                           
                            <button className="border dark:border-gray-800 rounded-lg w-full flex flex-row justify-center items-center p-4 hover:bg-primary-base hover:text-indigo-50 transition-all duration-200 dark:text-white">
                                {/* <span className="dark:text-indigo-500 w-14">
                                    <AddIcon style={{fontSize:24}} />
                                </span> */}
                                <div className="text-xl capitalize font-semibold ">Post a New FAQ...</div>
                            </button>
                            <div className="dark:text-indigo-50 text-sm">
                                NB: help your customer with frequently asked questions
                            </div>
                        </div>

                        {/* <form className="flex flex-col w-full bg-gray-50 rounded-lg p-2">
                            <textarea className="w-full bg-transparent border-none resize-none" placeholder="help your customer with frequently asked questions"></textarea>
                            <div className="flex flex-row items-center justify-between border-t border-gray-100 py-2">
                                <div>
                                    <label className="flex-none w-12 flex items-center justify-center dark:text-indigo-50">
                                        <ImageIcon style={{fontSize:24}}/>
                                    </label>
                                </div>
                                <button className="btn btn--primary px-4 py-3">Post</button>
                            </div>
                        </form> */}
                    </div>
                </div>
                <header className="py-3">
                    <div className="dark:text-gray-300">Your Frequently Asked Questions! (FAQ)</div>
                </header>

                {companies.map(item => 
                    <SingleFaqPost key={item.id} item={item} isOwner={true} />
                )}
            </div>
        </BusinessWrapper>
    )
}

export default BusinessHomePage
