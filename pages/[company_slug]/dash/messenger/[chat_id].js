import React from 'react'
import BusinessSingleChatPage from '../../../../components/pages/BusinessSingleChatPage'
import AccountLayout from '../../../../components/layouts/AccountLayout'


const BusinessSingleChat = ({companySlug}) => {
    return (
        <AccountLayout pageInfo={`${companySlug}'s Account' | Yaapr`} pageMetaInfo={''}>
            <BusinessSingleChatPage />
        </AccountLayout>
    )
}


export const getServerSideProps = async (ctx) => {
    console.log(ctx.query.company_slug)
    return {
        props:{
            companySlug:ctx.query.company_slug,
        }
    }
}


export default BusinessSingleChat
