import { useRouter } from 'next/router'
import React,{useEffect} from 'react'

const index = () => {
    const router = useRouter()
    
    useEffect(() => {
        router.push('/auth/login')
    }, [])

    return (
        <></>
    )
}

export default index
