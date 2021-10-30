import React from 'react'
import PrivacyPage from '../../../components/pages/static/PrivacyPage'
import AboutLayout from '../../../components/layouts/AboutLayout'

const index = () => {
    return (
        <AboutLayout pageTitle={`privacy policies - Yaapr`} pageMetaInfo={``}>
            <PrivacyPage />
        </AboutLayout>
    )
}

export default index