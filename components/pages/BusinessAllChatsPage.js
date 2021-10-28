import React from 'react'
import BusinessChatBar from '../chatBar/BusinessChatBar'
import BusinessWrapper from '../wrappers/BusinessWrapper'

const BusinessAllChatsPage = () => {
    return (
        <BusinessWrapper showSearch={false} showRightBar={true}>
            <main className="flex">
                <BusinessChatBar showChatBar={true}/>
                <div>Hello Chats</div>
            </main>
        </BusinessWrapper>
    )
}


export default BusinessAllChatsPage
