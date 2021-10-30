import React from 'react'


import AccountLayout from '../../../../layouts/AccountLayout'
import BusinessSupportTeamPage from '../../../../components/pages/BusinessSupportTeamPage'

const index = ({companySlug}) => {
    return (
        <AccountLayout pageInfo={`${companySlug}'s Account' | Yaapr`} pageMetaInfo={''}>
            <BusinessSupportTeamPage />
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
