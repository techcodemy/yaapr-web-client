import React from 'react'

import BusinessSubscriptionsPage from '../../../../components/pages/BusinessSubscriptionsPage'
import AccountLayout from '../../../../layouts/AccountLayout'

const index = ({businessSlug}) => {
    return (
        <AccountLayout pageInfo={`${businessSlug}'s Account' | Yaapr`} pageMetaInfo={''}>
            <BusinessSubscriptionsPage />
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
