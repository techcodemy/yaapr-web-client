import React from 'react'
import BusinessWrapper from '../wrappers/BusinessWrapper'

const BusinessSettingsPage = () => {
    return (
        <BusinessWrapper showSearch={true} showRightBar={true}>
            <div className="mt-2 w-full 2xl:w-3/4">
                Settings Page
            </div>
        </BusinessWrapper>
    )
}

export default BusinessSettingsPage
