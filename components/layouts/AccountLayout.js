import React from 'react'
import MainNavbar from '../navbar/MainNavbar'
import LayoutWrapper from './LayoutWrapper'

const AccountLayout = ({children,pageInfo,pageMetaInfo}) => {
    return (
        <LayoutWrapper pageInfo={pageInfo} pageMetaInfo={pageMetaInfo} >
            <div className="w-full flex flex-row">  
                <MainNavbar />  
                {children}
            </div>
        </LayoutWrapper>
    )
}

export default AccountLayout
