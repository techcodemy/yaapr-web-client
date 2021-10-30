import React from 'react'
import Link from 'next/link'

const CopyRightFooter = () => {
    const nowDate = new Date().getFullYear()
    return (
        <section className="pb-3 px-3 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center space-x-2 pt-2">
                <Link href="/about">
                    <a className="text-sm hover:underline dark:text-indigo-100">About</a>
                </Link>
                <Link href="/about/pricing">
                    <a className="text-sm hover:underline dark:text-indigo-100">Pricing</a>
                </Link>
                <Link href="/about/privacy">
                    <a className="text-sm hover:underline dark:text-indigo-100">Privacy</a>
                </Link>
                <Link href="/about/terms-of-use">
                    <a className="text-sm hover:underline dark:text-indigo-100">Terms</a>
                </Link>
            </div>
            <div className="text-xs mt-1 dark:text-indigo-100">Yaapr &copy; {nowDate}. Yaapr Technologies Ltd</div>
        </section>
    )
}

export default CopyRightFooter
