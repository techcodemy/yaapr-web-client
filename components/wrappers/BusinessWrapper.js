import React from 'react'

import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import CompanyNavbar from '../navbar/CompanyNavbar';
import Followers from '../rightBar/Followers';


const BusinessWrapper = ({children,showSearch,showRightBar}) => {

    return (
        <main className="flex flex-row w-full">
            <CompanyNavbar />

            <section className="flex-1 flex flex-col">
                {showSearch &&
                     <header className="flex w-full top-0 sticky z-10 bg-white dark:bg-gray-900 px-6 py-2">
                        <div className="flex-1 relative">
                            <form className="relative">
                                <span className="w-12 h-full absolute flex justify-center items-center">
                                    <SearchRoundedIcon style={{fontSize:22}} className="text-gray-400" />
                                </span>
                                <input className="pl-10 input--control input--control-noerr" placeholder="Search for Businesses/FAQs..." />
                            </form>
                        
                        </div>
                        <div className="flex-none w-64">
                        
                        </div>
                    </header>
                }
               

                <section className="flex px-6 w-full">
                    {children}
                </section>

            </section>
            {showRightBar && 
                <Followers />
            }
        </main>
    )
}

export default BusinessWrapper
