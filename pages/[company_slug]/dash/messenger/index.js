import React from 'react'
import BusinessAllChatsPage from '../../../../components/pages/BusinessAllChatsPage'
import AccountLayout from '../../../../layouts/AccountLayout'


const index = ({companySlug}) => {
    return (
        <AccountLayout pageInfo={`${companySlug}'s Account' | Yaapr`} pageMetaInfo={''}>
            <BusinessAllChatsPage />
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


export default index
