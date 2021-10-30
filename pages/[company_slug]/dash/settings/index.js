import React from 'react'

import BusinessSettingsPage from '../../../../components/pages/BusinessSettingsPage'
import AccountLayout from '../../../../layouts/AccountLayout'

const index = ({companySlug}) => {
    return (
        <AccountLayout pageInfo={`${companySlug}'s Account' | Yaapr`} pageMetaInfo={''}>
            <BusinessSettingsPage />
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
