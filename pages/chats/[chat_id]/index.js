import React from 'react'
import SingleChatPage from '../../../components/pages/SingleChatPage'
import AccountLayout from '../../../components/layouts/AccountLayout'

const index = () => {
    return (
        <AccountLayout pageInfo={`Home | Yaapr`} pageMetaInfo={``} >
            <SingleChatPage />
        </AccountLayout>
    )
}

export default index
