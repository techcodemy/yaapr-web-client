import React from 'react'
import FormChatComponent from '../chat/FormChatComponent'
import MainChatComponent from '../chat/MainChatComponent'
import SidebarComponent from '../chat/SidebarComponent'
import BusinessChatBar from '../chatBar/BusinessChatBar'
import BusinessWrapper from '../wrappers/BusinessWrapper'

import DeleteIcon from '@material-ui/icons/Delete';

const BusinessSingleChatPage = () => {
    return (
        <BusinessWrapper showSearch={false}>
            <main className="flex flex-row">
                <BusinessChatBar />
                <section className="flex-1 flex flex-col h-screen pt-2 px-3">
                    <main className="flex flex-col h-full">
                        <header className="h-16 rounded-t-lg  flex-none bg-white dark:bg-gray-900 px-3">
                            <div className="flex flex-row items-center  justify-between">
                                <div className="flex flex-row items-center ">
                                    <div className="flex flex-row items-center space-x-2">
                                        <img src="/images/avatar2.jpg" className="h-10 w-10 object-cover rounded-full" alt="" />
                                        <div className="flex flex-col">
                                            <div className="capitalize dark:text-indigo-50"> Peter Chibwe </div>
                                            <div className="text-xs dark:text-indigo-100">Sales Dept</div>
                                        </div>
                                    </div>

                                
                                </div>
                                <button className="h-12 w-12 flex justify-center items-center dark:text-indigo-50">
                                    <DeleteIcon  style={{fontSize:23}}/>
                                </button>
                            </div>
                        </header>
                        <MainChatComponent />
                        <FormChatComponent />
                    </main>
                </section>
            
                <SidebarComponent />
            </main>
        </BusinessWrapper>
    )
}

export default BusinessSingleChatPage
