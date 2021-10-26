import React from 'react'
import AccountLayout from '../../layouts/AccountLayout'

const index = ({companySlug}) => {
    return (
        <AccountLayout pageInfo={`${companySlug}'s Profile Page' | Yaapr`} pageMetaInfo={''}>
            hello {companySlug}
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
