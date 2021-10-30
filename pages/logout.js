import { useRouter } from 'next/router'
import React,{useEffect} from 'react'

const logout = () => {
    const router = useRouter()
    
    useEffect(() => {
        router.push('/auth/login')
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default logout
