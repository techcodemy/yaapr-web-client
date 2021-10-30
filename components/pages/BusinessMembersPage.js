import React from 'react'
import BusinessWrapper from '../wrappers/BusinessWrapper'

import AddCircleIcon from '@material-ui/icons/AddCircle';

const members = [
    {
        id:1,
        avatar:"avatar3.jpg",
        name:"Nickson Phiri"
    },
    {
        id:2,
        avatar:"avatar1.jpg",
        name:"Rosie Banda"
    },
    {
        id:3,
        avatar:"",
        name:"Samuel Snapper"
    },
    {
        id:4,
        avatar:"avatar4.jpg",
        name:"Kemuel Lottan"
    },
    {
        id:5,
        avatar:"avatar2.jpg",
        name:"Naile Mutale"
    },
    {
        id:6,
        avatar:"",
        name:"Moses Mumba"
    },
    {
        id:7,
        avatar:"avatar5.jpg",
        name:"Nawa Sipalo"
    },
    {
        id:1,
        avatar:"avatar3.jpg",
        name:"Nickson Phiri"
    },
    {
        id:2,
        avatar:"avatar1.jpg",
        name:"Rosie Banda"
    },
    {
        id:3,
        avatar:"",
        name:"Samuel Snapper"
    },
    {
        id:4,
        avatar:"avatar4.jpg",
        name:"Kemuel Lottan"
    },
    {
        id:5,
        avatar:"avatar2.jpg",
        name:"Naile Mutale"
    },
    {
        id:6,
        avatar:"",
        name:"Moses Mumba"
    },
    {
        id:7,
        avatar:"avatar5.jpg",
        name:"Nawa Sipalo"
    },
]

const BusinessMembersPage = () => {
    return (
        <BusinessWrapper showSearch={true} showRightBar={true}>
            <div className="mt-2 w-full 2xl:w-3/4">
                <section className="pt-2 pb-4">
                    <div className="dark:text-gray-50">All Members</div>

                    <div className="mt-4 grid grid-cols-3 gap-4">

                       

                        <div className="col-span-1">
                            <div className="h-full flex flex-col space-y-3 rounded-lg bg-gray-50 dark:bg-gray-800 justify-center items-center border-2 border-dashed dark:border-gray-700 border-gray-100 overflow-hidden hover:border-indigo-300 dark:hover:border-indigo-300 cursor-pointer group animate-el">
                                <span className="text-indigo-600 dark:text-indigo-50">
                                    <AddCircleIcon style={{fontSize:28}} /> 
                                </span>
                                <span className="text-gray-800 dark:text-gray-50 animate-el group-hover:text-indigo-300">Add a New Member</span>
                            </div>
                        </div>

                        {members.map(item => (
                             <div key={item.id} className="col-span-1">
                                <div className="rounded-lg bg-gray-50 dark:bg-gray-800">
                                    <div className="p-3 flex flex-row space-x-2">
                                        {item.avatar ?
                                            <img src={`/images/${item.avatar}`} className="flex-none h-16 w-16 rounded-full object-cover" alt="" />
                                            :
                                            <div className="flex-none h-16 w-16 rounded-full shadow-sm bg-indigo-100 text-indigo-600 flex justify-center items-center font-bold text-2xl">
                                                {item.name.substr(0,1)}
                                            </div>
                                        }
                                        <div className="">
                                            <div className="truncate-1-lines dark:text-gray-50 font-semibold">
                                                {item.name}
                                            </div>
                                            <div className="flex flex-row items-center space-x-2 ">
                                                <span className="text-xs dark:text-indigo-100">Dept:</span>
                                                <span className="text-xs dark:text-indigo-100 truncate-1-lines ">Sales Sales Sales Sales</span>
                                            </div>
                                            <div className="flex items-center flex-wrap mt-2">
                                                <span className="text-xxxs font-semibold uppercase bg-indigo-400 text-white tracking-wide dark:bg-indigo-200 dark:text-indigo-600 rounded px-1 mr-2 mb-1">SupperAdmin</span>
                                                <span className="text-xxxs font-semibold uppercase bg-indigo-400 text-white tracking-wide dark:bg-indigo-200 dark:text-indigo-600 rounded px-1 mr-2 mb-1">Admin</span>
                                                <span className="text-xxxs font-semibold uppercase bg-indigo-400 text-white tracking-wide dark:bg-indigo-200 dark:text-indigo-600 rounded px-1 mr-2 mb-1">member</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="flex justify-between border-t border-gray-100 dark:border-gray-900 overflow-hidden">
                                        <button className="py-2 flex-1 dark:text-indigo-50 hover:bg-primary-base hover:text-white text-sm rounded-bl-lg">View</button>
                                        <div className="border-r border-gray-100 dark:border-gray-900"></div>
                                        <button className="py-2 flex-1 dark:text-indigo-50 hover:bg-primary-base hover:text-white text-sm rounded-br-lg">Edit</button>
                                    </div> */}
                                </div>
                            </div>
                        ))}

                        
                    </div>
                </section>
            </div>
        </BusinessWrapper>
    )
}

export default BusinessMembersPage
