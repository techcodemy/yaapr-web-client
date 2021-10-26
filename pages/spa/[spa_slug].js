import React from 'react'
import AccountLayout from '../../layouts/AccountLayout'

const CompanyAccount = ({spaSlug}) => {
    return (
        <AccountLayout pageInfo={`${spaSlug}'s Account' | Yaapr`} pageMetaInfo={''}>
            hello {spaSlug}
        </AccountLayout>
    )
}

export const getServerSideProps = async (ctx) => {
    console.log(ctx.query.spa_slug)
    return {
        props:{
            spaSlug:ctx.query.spa_slug,
        }
    }
}


export default CompanyAccount
