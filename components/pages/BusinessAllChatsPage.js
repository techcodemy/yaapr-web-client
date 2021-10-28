import React from 'react'
import BusinessChatBar from '../chatBar/BusinessChatBar'
import BusinessWrapper from '../wrappers/BusinessWrapper'

const BusinessAllChatsPage = () => {
    return (
        <BusinessWrapper showSearch={false}>
            <main className="flex">
                <BusinessChatBar />
                <div>Hello Chats</div>
            </main>
        </BusinessWrapper>
    )
}


export default BusinessAllChatsPage
