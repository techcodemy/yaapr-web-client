import React from 'react'
import Link from 'next/link'

const AuthFooter = () => {
    return (
    <p className="text-xs text-gray-800 dark:text-gray-100 mt-3 tracking-wide px-6 text-center">
        <span className="font-semibold">Note:</span> By login/signing up,you agree to yaapr's 
        <Link href="/"> 
            <a className="font-semibold text-blue-700 hover:text-blue-600 dark:text-gray-50 dark:hover:text-white hover:underline px-2 text-center">T&C's</a>
        </Link> and 
        <Link href="/">
            <a className="font-semibold text-blue-700 hover:text-blue-600 dark:text-gray-50 dark:hover:text-white hover:underline px-2 text-center">Privacy Policy</a>
        </Link>
    </p>
    )
}

export default AuthFooter
