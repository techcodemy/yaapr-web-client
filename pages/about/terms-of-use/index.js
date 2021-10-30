import React from 'react'
import TermsPage from '../../../components/pages/static/TermsPage'
import AboutLayout from '../../../layouts/AboutLayout'

const index = () => {
    return (
        <AboutLayout pageTitle={`Our terms of use - Yaapr`} pageMetaInfo={``}>
            <TermsPage />
        </AboutLayout>
    )
}

export default index
