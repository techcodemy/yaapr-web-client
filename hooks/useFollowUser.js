import { useMutation } from '@apollo/client'
import React from 'react'
import { useState } from 'react'
import { TOGGLE_FOLLOW_USER_MUTATION } from '../graphql/schema/User'
import { useNotificationToast } from '../store/NotificationProvider'

const useFollowUser = () => {
    const [isFollowed,setIsFollowed] = useState(false)

    const isFollowedOrNot = (followers,userId) => {
        if(followers && followers.length > 0){
            let checkme = followers.filter(el => el.id === userId)
            if(checkme.length > 0 && checkme[0].id === userId){
                setIsFollowed(true)
                return
            }
        } 
        setIsFollowed(false)
        return
    }

    const [executeToggleFollow,{loading}] = useMutation(TOGGLE_FOLLOW_USER_MUTATION)
    const toastify = useNotificationToast()

    const handleToggleFollow = async (id) => {
        let variables = {
            userID:id
        }
        await executeToggleFollow({variables:variables})
        .then(res => {
            if(res.data){
               /*  console.log(res.data.ToggleFollowUser) */
                toastify({
                    type:'success',
                    text:'Successfully Done...'
                })
            }
            
        }) 
        .catch(e => {
            if(e.error){
                /* console.log(res.error) */
                toastify({
                    type:'success',
                    text:'Failed Operation...'
                })
            }
        })
    }

    return {loading,isFollowed,isFollowedOrNot,handleToggleFollow}
}

export default useFollowUser
