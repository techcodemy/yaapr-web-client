import React from 'react'
import BusinessMembersPage from '../../../../components/pages/BusinessMembersPage'
import AccountLayout from '../../../../components/layouts/AccountLayout'

const index = ({companySlug}) => {
    return (
        <AccountLayout pageInfo={`${companySlug}'s Account' | Yaapr`} pageMetaInfo={''}>
            <BusinessMembersPage />
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
