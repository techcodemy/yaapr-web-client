import React from 'react'
import BusinessWrapper from '../wrappers/BusinessWrapper'

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddIcon from '@material-ui/icons/Add';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const BusinessSettingsPage = () => {
    return (
        <BusinessWrapper showSearch={true} showRightBar={true}>
            <div className="mt-4 w-full md:w-3/4">
                <section className="">
                    <header className="mt-4">
                        <div className="dark:text-indigo-50">Avatar/Banner Details</div>
                        <span className="text-gray-400 dark:text-indigo-200 text-sm">general information for your profile</span>
                    </header>
                    <div className="border-t border-gray-100 dark:border-gray-800 mt-4">
                        <form style={{backgroundImage:"url('/images/avatar1.jpg')"}} className={`relative w-full rounded-lg dark:bg-gray-800 border-2 border-dashed dark:border-gray-700 border-gray-100  h-36 overflow-hidden hover:border-indigo-300 dark:hover:border-indigo-300 animate-el cursor-pointer bg-cover bg-center`}>
                            <label for="banner-image" className="absolute cursor-pointer right-0 left-0 top-0 bottom-0 block z-10">
                                <div className="h-full w-full flex flex-col justify-center items-center">
                                    <div className="text-indigo-50">
                                        <AddCircleIcon style={{fontSize:30}} />
                                    </div>
                                    <div className="text-sm text-indigo-50">Drag 'n' Drop or Click</div>
                                    <span className="text-xs text-indigo-100">Update your banner profile here...</span>
                                </div>
                            </label>
                            <input id="banner-image" type="file" hidden />
                        </form>
                        <div className="flex justify-center">
                            <form style={{backgroundImage:"url('/images/blank-avatar.png')"}} className={`-mt-6 relative w-24 h-24 rounded-full dark:bg-gray-800 border-2 border-dashed dark:border-gray-700 border-gray-100 bg-white overflow-hidden hover:border-indigo-300 dark:hover:border-indigo-300 animate-el cursor-pointer bg-cover bg-center`}>
                                <label for="avatar-image" className="absolute cursor-pointer right-0 left-0 top-0 bottom-0 block z-10">
                                </label>
                                <input id="avatar-image" type="file" hidden />
                            </form>
                        </div>
                      
                    </div>
                </section>

                <form className="pt-4">
                    <header className="mt-4">
                        <div className="dark:text-indigo-50">Account Details</div>
                        <span className="text-gray-400 dark:text-indigo-200 text-sm">general information for your profile</span>
                    </header>
                    <div className="border-t border-gray-100 dark:border-gray-800 mt-4">
                        
                        <div className="grid grid-cols-4 mt-4">
                            <div className="col-span-1 dark:text-gray-300 text-sm font-semibold">Name:</div>
                            <div className="col-span-3">
                                <input className="input--control input--control-noerr" placeholder="i.e Yaapr Technologies" />
                            </div>
                        </div>
                        <div className="grid grid-cols-4 mt-4">
                            <div className="col-span-1 dark:text-gray-300 text-sm font-semibold">About:</div>
                            <div className="col-span-3">
                                <textarea className="input--control input--control-noerr resize-none" placeholder="i.e we are a Saas Centralized Customer Service App for businesses..." ></textarea>
                            </div>
                        </div>
                    </div>

                    <header className="mt-4">
                        <div className="dark:text-indigo-50">Contact Details</div>
                        <span className="text-gray-400 dark:text-indigo-200 text-sm">communication information for your profile</span>
                    </header>
                    <div className="border-t border-gray-100 dark:border-gray-800 mt-4">
                        
                        <div className="grid grid-cols-4 mt-4">
                            <div className="col-span-1 dark:text-gray-300 text-sm font-semibold">Email(s):</div>
                            <div className="col-span-3 flex flex-col space-y-2">
                                <div className="flex space-x-2">
                                    <input className="input--control input--control-noerr" placeholder="i.e Yaapr Technologies" />
                                    <button className="w-12 btn dark:bg-gray-700 text-gray-300">
                                        <DeleteOutlineIcon style={{fontSize:20}} />
                                    </button>
                                </div>
                                <div className="flex">
                                    <button className="px-4 rounded-lg py-[10px] text-sm dark:bg-gray-700 text-gray-300">
                                        <AddIcon style={{fontSize:20}} /> Add New Email
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 mt-4">
                            <div className="col-span-1 dark:text-gray-300 text-sm font-semibold">Phone(s):</div>
                            <div className="col-span-3 flex flex-col space-y-2">
                                <div className="flex space-x-2">
                                    <input className="input--control input--control-noerr" placeholder="i.e Yaapr Technologies" />
                                    <button className="w-12 btn dark:bg-gray-700 text-gray-300">
                                        <DeleteOutlineIcon style={{fontSize:20}} />
                                    </button>
                                </div>
                                <div className="flex">
                                    <button className="px-4 rounded-lg py-[10px] text-sm dark:bg-gray-700 text-gray-300">
                                        <AddIcon style={{fontSize:20}} /> Add New Phone
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 mt-4">
                            <div className="col-span-1 dark:text-gray-300 text-sm font-semibold">Website(s):</div>
                            <div className="col-span-3 flex flex-col space-y-2">
                                <div className="flex space-x-2">
                                    <input className="input--control input--control-noerr" placeholder="i.e Yaapr Technologies" />
                                    <button className="w-12 btn dark:bg-gray-700 text-gray-300">
                                        <DeleteOutlineIcon style={{fontSize:20}} />
                                    </button>
                                </div>
                                <div className="flex">
                                    <button className="px-4 rounded-lg py-[10px] text-sm dark:bg-gray-700 text-gray-300">
                                        <AddIcon style={{fontSize:20}} /> Add New Website
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <header className="mt-4">
                        <div className="dark:text-indigo-50">Social Media Details</div>
                        <span className="text-gray-400 dark:text-indigo-200 text-sm">communication information for your profile</span>
                    </header>

                    <div className="border-t border-gray-100 dark:border-gray-800 mt-4">
                        
                        <div className="grid grid-cols-4 mt-4">
                            <div className="col-span-1 dark:text-gray-300 text-sm font-semibold">Facebook:</div>
                            <div className="col-span-3 flex flex-col space-y-2">
                                <div className="flex space-x-2">
                                    <input className="input--control input--control-noerr" placeholder="i.e Yaapr Technologies" />
                                    <button className="w-12 btn dark:bg-gray-700 text-gray-300">
                                        <DeleteOutlineIcon style={{fontSize:20}} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 mt-4">
                            <div className="col-span-1 dark:text-gray-300 text-sm font-semibold">Twitter:</div>
                            <div className="col-span-3 flex flex-col space-y-2">
                                <div className="flex space-x-2">
                                    <input className="input--control input--control-noerr" placeholder="i.e Yaapr Technologies" />
                                    <button className="w-12 btn dark:bg-gray-700 text-gray-300">
                                        <DeleteOutlineIcon style={{fontSize:20}} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 mt-4">
                            <div className="col-span-1 dark:text-gray-300 text-sm font-semibold">LinkedIn:</div>
                            <div className="col-span-3 flex flex-col space-y-2">
                                <div className="flex space-x-2">
                                    <input className="input--control input--control-noerr" placeholder="i.e Yaapr Technologies" />
                                    <button className="w-12 btn dark:bg-gray-700 text-gray-300">
                                        <DeleteOutlineIcon style={{fontSize:20}} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 mt-4">
                            <div className="col-span-1 dark:text-gray-300 text-sm font-semibold">Instagram:</div>
                            <div className="col-span-3 flex flex-col space-y-2">
                                <div className="flex space-x-2">
                                    <input className="input--control input--control-noerr" placeholder="i.e Yaapr Technologies" />
                                    <button className="w-12 btn dark:bg-gray-700 text-gray-300">
                                        <DeleteOutlineIcon style={{fontSize:20}} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        
                        
                        
                    </div>

                    <header className="mt-4">
                        <div className="dark:text-indigo-50">Address Details</div>
                        <span className="text-gray-400 dark:text-indigo-200 text-sm">This information shows your location</span>
                    </header>
                    <div className="border-t border-gray-100 dark:border-gray-800 mt-4">
                        
                        <div className="grid grid-cols-4 mt-4">
                            <div className="col-span-1 dark:text-gray-300 text-sm font-semibold">Street:</div>
                            <div className="col-span-3">
                                <input className="input--control input--control-noerr" placeholder="i.e Kudu rd, Plot No. 0000" />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-4 mt-4">
                            <div className="col-span-1 dark:text-gray-300 text-sm font-semibold">Country:</div>
                            <div className="col-span-3">
                                <select className="input--control input--control-noerr" >
                                    <option>Zambia</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 mt-4">
                            <div className="col-span-1 dark:text-gray-300 text-sm font-semibold">City/Provice:</div>
                            <div className="col-span-3">
                                <select className="input--control input--control-noerr" >
                                    <option>Lusaka</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-100 dark:border-gray-800 mt-4">
                        <div className="flex justify-end mt-4">
                            <div className="flex space-x-2">
                                <button className="btn btn--secondary px-3">Cancel</button>
                                <button className="btn btn--primary px-3">Save Changes </button>
                            </div>
                        </div>
                    </div>
                </form>

                <section>
                    <header className="mt-4">
                        <div className="dark:text-indigo-50">Account Deactivation/Deletion</div>
                        <span className="text-gray-400 dark:text-indigo-200 text-sm">Note: Only use this when you are certain</span>
                    </header>
                    
                    <div className="border-t border-gray-100 dark:border-gray-800 mt-4">
                        <div className="flex justify-end mt-4">
                            <div className="flex space-x-2">
                                <button className="btn btn--danger-secondary px-3">Delete</button>
                                <button className="btn btn--danger px-3">Deactivate </button>
                            </div>
                        </div>
                    </div>
                </section>

              
            </div>
        </BusinessWrapper>
    )
}

export default BusinessSettingsPage
