import React from 'react'
import AboutFooter from '../common/AboutFooter'
import AboutNavbar from '../navbar/AboutNavbar'
import LayoutWrapper from './LayoutWrapper'


const AboutLayout = ({children,pageTitle,pageMetaInfo}) => {
    return (
        <LayoutWrapper pageInfo={pageTitle} pageMetaInfo={pageMetaInfo} >
            <AboutNavbar />
            <section className="flex flex-row dark:bg-gray-900">
                <main className="flex-1 dark:bg-gray-900 mx-auto max-w-6xl w-full">
                    {children}
                </main>
            </section>
            <div className="bg-gray-50 dark:bg-gray-800">
                <div className="mx-auto max-w-6xl w-full">
                    <AboutFooter />
                </div>
            </div>
        </LayoutWrapper>
    )
}

export default AboutLayout
