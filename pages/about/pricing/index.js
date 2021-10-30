import React from 'react'
import PricingPage from '../../../components/pages/static/PricingPage'
import AboutLayout from '../../../components/layouts/AboutLayout'

const index = () => {
    return (
        <AboutLayout pageTitle={`know about us - Yaapr`} pageMetaInfo={``}>
            <PricingPage />
        </AboutLayout>
    )
}

export default index