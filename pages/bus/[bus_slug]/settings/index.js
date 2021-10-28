import React from 'react'

import BusinessSettingsPage from '../../../../components/pages/BusinessSettingsPage'
import AccountLayout from '../../../../layouts/AccountLayout'

const index = ({businessSlug}) => {
    return (
        <AccountLayout pageInfo={`${businessSlug}'s Account' | Yaapr`} pageMetaInfo={''}>
            <BusinessSettingsPage />
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

export default index
