import React from 'react'
import LayoutWrapper from './LayoutWrapper'

const AccountLayout = ({children,pageInfo,pageMetaInfo}) => {
    return (
        <LayoutWrapper pageInfo={pageInfo} pageMetaInfo={pageMetaInfo} >
            <div>          
                {children}
            </div>
        </LayoutWrapper>
    )
}

export default AccountLayout
