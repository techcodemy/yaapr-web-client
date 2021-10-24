import React from 'react'
import MainNavbar from '../components/navbar/mainNavbar'
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
