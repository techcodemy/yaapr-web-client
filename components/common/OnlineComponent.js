import React,{useState,useEffect} from 'react'

const OnlineComponent = ({isOnlineState}) => {
    const [isOnline,setIsOnline] = useState(false)

    useEffect(() => {

        setIsOnline(isOnlineState)

    }, [isOnlineState])
    return (
        <span className={`border-2 border-white dark:border-gray-800 h-3 w-3 rounded-full  absolute bottom-0 right-0 ${isOnline ? 'bg-green-400':'bg-red-500'}`}></span>
    )
}

export default OnlineComponent
