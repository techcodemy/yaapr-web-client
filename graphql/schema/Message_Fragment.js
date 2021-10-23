import { gql } from '@apollo/client';
import {USER_FIELDS} from './User_Fragment'
import {PRODUCT_FIELDS} from './Product_Fragment'

export const CHAT_CHANNEL_FIELDS = gql` 
    ${USER_FIELDS}
    fragment ChatChannelFields on ChatChannel{
        id
        created_at
        to_user{
            ...UserFields
        }
        from_user{
            ...UserFields
        }
        chat_with{
            ...UserFields
        }
        last_message{
            id
            content
            attachments
            from_user{
                ...UserFields
            }
            sent_at
        }
    }
`

export const MESSAGE_FIELDS = gql`
    ${USER_FIELDS}
    ${PRODUCT_FIELDS}
    ${CHAT_CHANNEL_FIELDS}
    fragment MessageFields on Message{
        id
        attachments
        content
        chat_channel{
            ...ChatChannelFields 
        }
        from_user{
            ...UserFields
        }
        reply_to{
            id
            content
        }
        product{
            ...ProductFields
        }
        sent_at
        viewed_at
    }
`
