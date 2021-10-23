import React from 'react'
import MainNavbar from '../components/navbar/MainNavbar'

import LayoutWrapper from './LayoutWrapper'

const AuthLayout = ({children,pageInfo,pageMetaInfo}) => {
    return (
        <LayoutWrapper pageInfo={pageInfo} pageMetaInfo={pageMetaInfo} >
            <div className="w-full flex flex-row space-x-1">  
                <MainNavbar />  
                {children}
            </div>
        </LayoutWrapper>
    )
}

export default AuthLayout
