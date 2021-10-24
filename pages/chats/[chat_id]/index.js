import React from 'react'
import SingleChatPage from '../../../components/pages/SingleChatPage'
import AccountLayout from '../../../layouts/AccountLayout'

const index = () => {
    return (
        <AccountLayout pageInfo={`Home | Yaapr`} pageMetaInfo={``} >
            <SingleChatPage />
        </AccountLayout>
    )
}

export default index
