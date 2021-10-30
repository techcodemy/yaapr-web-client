import React,{useState} from 'react'
import { Switch } from '@headlessui/react'

import Link from 'next/link'
import Logo from '../Logo'
import { useTheme } from '../../providers/ThemeProvider'

const AboutNavbar = () => {
    const {activeTheme,setActiveTheme} = useTheme()
    const [enabled, setEnabled] = useState(false)
    const toggleTheme = () => {
        setActiveTheme(!activeTheme)
        setEnabled(!enabled)
    }

    return (
        <nav className="dark:bg-gray-800 border-b border-gray-100 dark:border-gray-900">
            <div className="mx-auto max-w-6xl w-full flex justify-between">
                <div className="flex justify-center">
                    <Link href={`/`}>
                        <a className="py-3 rounded-full flex items-center space-x-2">
                            <img src="/yaapr-chat-icon.svg" className="h-10 w-10" alt="yaapr logo" />
                            <span className="text-2xl font-bold dark:text-indigo-50">yaapr</span>
                        </a>
                    </Link>
                </div>
                <div className="flex items-center space-x-2">
                    <Link href={`/about`}>
                        <a className="px-2">
                            <span className="dark:text-indigo-50 font-semibold">About</span>
                        </a>
                    </Link>
                    <Link href={`/about/pricing`}>
                        <a className="px-2">
                            <span className="dark:text-indigo-50 font-semibold">Pricing</span>
                        </a>
                    </Link>
                    <Link href={`/about/terms-of-use`}>
                        <a className="px-2">
                            <span className="dark:text-indigo-50 font-semibold">Terms of Use</span>
                        </a>
                    </Link>
                    <Link href={`/about/privacy`}>
                        <a className="px-2">
                            <span className="dark:text-indigo-50 font-semibold">Privacy</span>
                        </a>
                    </Link>
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
            </div>
        </nav>
    )
}

export default AboutNavbar
