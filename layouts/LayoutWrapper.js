import React from 'react'
import Head from 'next/head'
import useDarkMode from '../hooks/useDarkMode'

import { useRouter } from 'next/router'

const LayoutWrapper = ({children,pageInfo,pageMetaInfo}) => {
    const router = useRouter() 
   /*  useDarkMode() */
    return (
        <div className="bg-gray-50">
            <Head>
                <title>{pageInfo}</title>        
            </Head>
            <section className="bg-gray-50 h-screen  overflow-y-auto">
                {children}
            </section>     
        </div>
    )
}

export default LayoutWrapper;
