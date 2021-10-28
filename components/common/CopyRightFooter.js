import React from 'react'

const CopyRightFooter = () => {
    const nowDate = new Date().getFullYear()
    return (
        <section className="pb-3 px-3 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center space-x-2 pt-2">
                <a href="" className="text-sm hover:underline dark:text-indigo-100">Terms</a>
                <a href="" className="text-sm hover:underline dark:text-indigo-100">Privacy</a>
                <a href="" className="text-sm hover:underline dark:text-indigo-100">Pricing</a>
                <a href="" className="text-sm hover:underline dark:text-indigo-100">How?</a>
            </div>
            <div className="text-xs mt-1 dark:text-indigo-100">Yaapr &copy; {nowDate}. Yaapr Technologies Ltd</div>
        </section>
    )
}

export default CopyRightFooter
