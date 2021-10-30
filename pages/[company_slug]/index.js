import React from 'react'
import CompanyViewPage from '../../components/pages/CompanyViewPage'
import AccountLayout from '../../components/layouts/AccountLayout'

const index = ({companySlug}) => {
    return (
        <AccountLayout pageInfo={`${companySlug}'s Profile Page' | Yaapr`} pageMetaInfo={''}>
            <CompanyViewPage />
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
