import React from 'react'
import Link from 'next/link'
import AuthFooter  from '../AuthFooter'

const AlreadyMember = ({labelTitle,linkTitle,link,linkModal}) => {
    return (
        <>
        <div className="mt-8 px-6">
            <div className="flex justify-center">
                <div className="-mt-4 w-8 h-8 text-sm border border-gray-100  dark:border-gray-700 rounded-full bg-white dark:bg-gray-700 flex flex-col items-center  justify-center font-bold uppercase text-gray-700 dark:text-gray-100"><span>or</span></div>
            </div>
            <div className="border-t border-gray-100 dark:border-gray-700 -mt-4"></div>
        </div>
            
        <div className="login--div-user w-full px-4 text-center mt-6">
            <div className="py-1">
                <span className="mr-2 dark:text-gray-100">{labelTitle}</span>
                <Link  href={linkModal} as={link} >
                    <a className="focus:outline-none text-blue-700 hover:text-blue-600 dark:text-gray-50 dark:hover:text-white hover:underline font-semibold"> {linkTitle}</a>
                </Link>
            </div>
        </div>

        <AuthFooter />
        </>
    )
}

export default AlreadyMember;
