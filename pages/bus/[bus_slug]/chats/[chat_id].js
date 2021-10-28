import React from 'react'
import BusinessSingleChatPage from '../../../../components/pages/BusinessSingleChatPage'
import AccountLayout from '../../../../layouts/AccountLayout'


const BusinessSingleChat = ({businessSlug}) => {
    return (
        <AccountLayout pageInfo={`${businessSlug}'s Account' | Yaapr`} pageMetaInfo={''}>
            <BusinessSingleChatPage />
        </AccountLayout>
    )
}


export const getServerSideProps = async (ctx) => {
    console.log(ctx.query.bus_slug)
    return {
        props:{
            businessSlug:ctx.query.bus_slug,
        }
    }
}


export default BusinessSingleChat
