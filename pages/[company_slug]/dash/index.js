import React from 'react'
import BusinessHomePage from '../../../components/pages/BusinessHomePage'
import AccountLayout from '../../../layouts/AccountLayout'


const CompanyAccount = ({companySlug}) => {
    return (
        <AccountLayout pageInfo={`${companySlug}'s Account' | Yaapr`} pageMetaInfo={''}>
           <BusinessHomePage />
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


export default CompanyAccount
