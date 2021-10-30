import React,{useState} from 'react'
import { Switch } from '@headlessui/react'
import { useTheme } from '../providers/ThemeProvider'

import LayoutWrapper from './LayoutWrapper'

const AuthLayout = ({children,pageInfo,pageMetaInfo}) => {

    const {activeTheme,setActiveTheme} = useTheme()
    const [enabled, setEnabled] = useState(false)
    const toggleTheme = () => {
        setActiveTheme(!activeTheme)
        setEnabled(!enabled)
    }
    return (
        <LayoutWrapper pageInfo={pageInfo} pageMetaInfo={pageMetaInfo} >
            <div className="h-screen"> 
                <div className="fixed right-0 top-0 mr-6 mt-6">
                    <div>
                        <Switch
                            checked={enabled}
                            onChange={()=>toggleTheme()}
                            className={`${
                                enabled ? 'bg-primary-base' : 'bg-gray-200'
                            } relative inline-flex items-center h-6 rounded-full w-11`}
                            >
                            <span className="sr-only">Enable notifications</span>
                            <span
                                className={`transform transition ease-in-out duration-200 ${
                                enabled ? 'translate-x-6' : 'translate-x-1'
                                } inline-block w-4 h-4 transform bg-white rounded-full`}
                            />
                        </Switch>
                    </div>
                </div> 
                {children}
            </div>
        </LayoutWrapper>
    )
}

export default AuthLayout
