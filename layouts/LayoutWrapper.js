import React from 'react'
import Head from 'next/head'
import useDarkMode from '../hooks/useDarkMode'

import { useRouter } from 'next/router'

const LayoutWrapper = ({children,pageInfo,pageMetaInfo}) => {
    const router = useRouter() 
   /*  useDarkMode() */
    return (
        <div>
            <Head>
                <title>{pageInfo}</title>        
            </Head>
            <section className="bg-white dark:bg-gray-900 h-screen overflow-y-auto">
                {children}
            </section>     
        </div>
    )
}

export default LayoutWrapper;
