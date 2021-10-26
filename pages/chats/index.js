import React from 'react'
import AllChatsPage from '../../components/pages/AllChatsPage'
import AccountLayout from '../../layouts/AccountLayout'

const index = () => {
    return (
        <AccountLayout pageInfo={`Home | Yaapr`} pageMetaInfo={``} >
            <AllChatsPage />
        </AccountLayout>
    )
}

export default index
