import React from 'react'
import AboutPage from '../../components/pages/static/AboutPage'
import AboutLayout from '../../components/layouts/AboutLayout'

const index = () => {
    return (
        <AboutLayout pageTitle={`know about us - Yaapr`} pageMetaInfo={``}>
            <AboutPage />
        </AboutLayout>
    )
}

export default index
