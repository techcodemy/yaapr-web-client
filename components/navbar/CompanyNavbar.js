import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';


import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import GroupIcon from '@material-ui/icons/Group';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

const CompanyNavbar = () => {

    const router = useRouter()

    return (
        <aside className="w-[220px] flex-none h-screen top-0 sticky bg-white dark:bg-gray-900 py-2 overflow-hidden">
            <div className="bg-white dark:bg-gray-900 rounded-lg relative flex flex-col justify-between h-full">
                <section className="flex flex-col flex-1">
                    <header className="flex-none">
                        <div className="flex space-x-2 mt-1">
                            <div className="h-12 w-12 rounded-full">
                                <img src="/logos/airtel.jpg" className="h-12 w-12 rounded-lg object-cover" alt="" />
                            </div>
                            <div className="flex flex-col">
                                <p className="capitalize font-bold mb-1 text-gray-800 dark:text-gray-50">Airtel Zambia</p>
                                <span className="text-xxs text-gray-500 dark:text-gray-300">Joined @1month</span>
                                <span className="text-xs dark:text-gray-300">Lusaka, Zambia</span>
                            </div>
                        </div>
                    </header>
                    <ul className="flex-1 flex flex-col my-3 bg-gray-50 dark:bg-gray-800 rounded-lg p-2">
                        <li className="transition duration-500 hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-900 cursor-pointer rounded-lg ">
                            <Link href={`/${router.query.company_slug}/dash`}>
                                <a href="#" className="py-2 flex group items-center">
                                    <span className="w-10 text-center text-gray-400 dark:text-indigo-500 dark:group-hover:text-indigo-200 group-hover:text-gray-700">
                                        <HomeOutlinedIcon style={{fontSize:20}} />
                                    </span>
                                    <span className="dark:text-indigo-50">Dashboard</span>
                                </a>
                            </Link>
                        </li>
                        <li className="transition duration-500 hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-900  cursor-pointer rounded-lg ">
                            <Link href={`/${router.query.company_slug}/dash/messenger`}>
                                <a className="py-2 flex group items-center relative">
                                    <span className="w-10 text-center text-gray-400 dark:text-indigo-500 dark:group-hover:text-indigo-200 group-hover:text-gray-700">
                                        <ChatBubbleOutlineOutlinedIcon style={{fontSize:20}} />
                                    </span>
                                    <span className="dark:text-indigo-50">Messenger</span>
                                    <span className="absolute right-0 bg-red-600 text-white text-xxs rounded font-semibold p-[2px] mr-2">23</span>
                                </a>
                            </Link>
                        </li>
                        <li className="transition duration-500 hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-900  cursor-pointer rounded-lg ">
                            <Link href={`/${router.query.company_slug}/dash/members`}>
                                <a className="py-2 flex group items-center">
                                <span className="w-10 text-center text-gray-400 dark:text-indigo-500 dark:group-hover:text-indigo-200 group-hover:text-gray-700">
                                    <GroupIcon style={{fontSize:20}}/>
                                </span>
                                <span className="dark:text-indigo-50">Members</span>
                                </a>
                            </Link>
                        </li>
                        <li className="transition duration-500 hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-900  cursor-pointer rounded-lg ">
                            <Link href={`/${router.query.company_slug}/dash/support-team`}>
                                <a className="py-2 flex group items-center">
                                <span className="w-10 text-center text-gray-400 dark:text-indigo-500 dark:group-hover:text-indigo-200 group-hover:text-gray-700">
                                    <SupervisorAccountOutlinedIcon style={{fontSize:20}}/>
                                </span>
                                <span className="dark:text-indigo-50">Support Team</span>
                                </a>
                            </Link>
                        </li>
                        <li className="transition duration-500 hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-900  cursor-pointer rounded-lg ">
                            <Link href={`/${router.query.company_slug}/dash/subscriptions`}>
                                <a className="py-2 flex group items-center relative">
                                    <span className="w-10 text-center text-gray-400 dark:text-indigo-500 dark:group-hover:text-indigo-200 group-hover:text-gray-700">
                                        <AccountBalanceWalletIcon style={{fontSize:20}}/>
                                    </span>
                                    <span className="dark:text-indigo-50">Subscriptions</span>
                                    <span className="absolute right-0 bg-red-600 text-white text-xxs rounded font-semibold p-[2px] mr-2">
                                        <AccessAlarmIcon style={{fontSize:13}} />
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li className="border-t border-gray-100 dark:border-gray-900 my-1"></li>

                        <li className="transition duration-500 hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-900  cursor-pointer rounded-lg ">
                            <Link href={`/${router.query.company_slug}/dash/settings`}>
                                <a className="py-2 flex group items-center">
                                <span className="w-10 text-center text-gray-400 dark:text-indigo-500 dark:group-hover:text-indigo-200 group-hover:text-gray-700">
                                    <SettingsOutlinedIcon style={{fontSize:20}}/>
                                </span>
                                <span className="dark:text-indigo-50">Settings</span>
                                </a>
                            </Link>
                        </li>
                        
                    </ul>
                </section>
                <section className="mb-1">
                    <div className="py-2">
                        <span className="text-sm leading-tight text-gray-600 dark:text-gray-100 tracking-tight">You are using a free tier,<br/> Please upgrade for best features<br/> <a href="#" className="hover:underline text text-indigo-600 dark:text-indigo-300">Learn More...</a></span>
                    </div>
                    <button href="#" className="btn btn--primary w-full">
                        Upgrade
                    </button>
                </section>
                {/* <section className="mt-2">
                    <div className="transition duration-500 hover:bg-indigo-50 dark:bg-gray-800 dark:hover:bg-gray-900  cursor-pointer rounded-lg ">
                        <a href="#" className="py-2 flex group items-center">
                            <span className="w-10 text-center text-gray-400 group-hover:text-gray-700">
                                <SettingsOutlinedIcon style={{fontSize:20}}/>
                            </span>
                            <span>Settings</span>
                        </a>
                    </div>
                </section> */}
            </div>
            
        </aside>  
    )
}

export default CompanyNavbar
