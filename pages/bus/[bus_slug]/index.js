import React from 'react'
import BusinessHomePage from '../../../components/pages/BusinessHomePage'
import AccountLayout from '../../../layouts/AccountLayout'


const CompanyAccount = ({businessSlug}) => {
    return (
        <AccountLayout pageInfo={`${businessSlug}'s Account' | Yaapr`} pageMetaInfo={''}>
           <BusinessHomePage />
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


export default CompanyAccount
