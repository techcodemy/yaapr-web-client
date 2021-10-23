import React from 'react'
import InfoNav from '../components/navbar/InfoNav'
import LayoutWrapper from './LayoutWrapper'


const InfoLayout = ({children,pageInfo,pageMetaInfo}) => {
    return (
        <LayoutWrapper pageInfo={pageInfo} pageMetaInfo={pageMetaInfo} >
            <InfoNav />
            <section className="flex flex-row dark:bg-gray-800">
                <main className="flex-1 dark:bg-gray-800 px-4 overflow-y-auto pt-16">
                    {children}
                </main>
            </section>
            <div className="h-7 w-full fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white z-10"></div>
        </LayoutWrapper>
    )
}

export default InfoLayout
