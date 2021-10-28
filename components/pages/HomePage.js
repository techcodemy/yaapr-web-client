import React from 'react'
import UsersChatBar from '../chatBar/UsersChatBar'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

import Link from 'next/link'

import UserWrapper from '../wrappers/UserWrapper'
import SingleFaqPost from '../common/SingleFaqPost';

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

const HomePage = () => {
    return (
        <UserWrapper>
            <main className="w-full 2xl:w-3/4">
                {/* <div className="mt-2 py-4 bg-white rounded-lg border border-gray-100">
                    <ul className="flex flex-row space-x-4 ">
                        {companies.map(item => 
                            <li key={item.id} className="w-1/6 flex justify-center ">
                                <Link href="/">
                                    <a className="flex flex-col justify-center items-center">
                                        <div className="h-16 w-16 rounded-full">
                                            <img src={`./logos/${item.logo}`} className="h-16 w-16 object-cover rounded-full shadow-sm" alt="" />
                                        </div>
                                        <div className="mt-1">
                                            <div className="text-sm font-semibold truncate-1-lines capitalize">{item.name}</div>
                                        </div>
                                    </a>
                                </Link>
                            </li>
                        )}
                        
                    </ul>
                </div> */}

                <div className="mt-2">
                    <header className="py-3">
                        <div className="dark:text-gray-300">Frequently Asked Questions! (FAQ)</div>
                    </header>

                    {companies.map(item => 
                        <SingleFaqPost key={item.id} item={item} />
                    )}
                    

                </div>
            </main>
        </UserWrapper>
    )
}

export default HomePage
