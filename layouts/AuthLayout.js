import React from 'react'
import { useTheme } from '../providers/ThemeProvider'

import LayoutWrapper from './LayoutWrapper'

const AuthLayout = ({children,pageInfo,pageMetaInfo}) => {
    const {setActiveTheme} = useTheme()
    return (
        <LayoutWrapper pageInfo={pageInfo} pageMetaInfo={pageMetaInfo} >
            <div className="h-screen"> 
                <div className="fixed right-0 top-0 mr-3 mt-2">
                    <button onClick={()=>setActiveTheme()} className="dark:text-gray-100">
                        Switch Theme
                    </button>
                </div> 
                {children}
            </div>
        </LayoutWrapper>
    )
}

export default AuthLayout
