import { gql } from '@apollo/client';

/* import gql from "graphql-tag"; */
import {MESSAGE_FIELDS,CHAT_CHANNEL_FIELDS} from './Message_Fragment'


export const FETCH_MESSAGES_BY_CHANNEL_ID_QUERY = gql `
  ${MESSAGE_FIELDS}
  query fetch_messages_by_channel_id_query($channelID:String!){
    FetchMessagesByChannelID(channel_id:$channelID){
      ...MessageFields
    }
  }
`

export const FETCH_MESSAGES_BY_FILTERS_QUERY = gql `
  ${MESSAGE_FIELDS}
  query ($channelID:String!,$unread:Boolean!){
    FetchMessagesByFilters(input:{
      channel_id:$channelID,
      unread:$unread}){
      ...MessageFields
    }
  }
`

export const  FETCH_MY_CHATS_QUERY = gql `
  ${CHAT_CHANNEL_FIELDS}
  query fetch_my_chats_query{
    FetchMyChats{
      ...ChatChannelFields
    }
  }
`

export const SEND_MESSAGE_MUTATION = gql `
  ${MESSAGE_FIELDS}
  mutation (
      $toId:String!
      $content:String
      $productId:String
      $replyId:String
      $attachments:[Upload!]
      ){
    SendMessage (
        to_id:$toId,
        input:{
            attachments:$attachments,
            content:$content,
            product_id:$productId,
            reply_to:$replyId,
        }){
          ...MessageFields
          }
  }
`

export const DELETE_MESSAGE_MUTATION = gql `
  mutation (
      $chatId:String!
      $messageId:String!
      ){
        DeleteMessage (
          chat_id:$chatId,
          message_id:$messageId
        )
  }
`

export const DELETE_CHAT_MUTATION = gql `
  mutation (
      $chatId:String!
      ){
        DeleteChat (
          chat_id:$chatId,
        )
  }
`

export const NEW_CHAT_SUBSCRIPTION = gql `
  ${CHAT_CHANNEL_FIELDS}
  subscription new_chats_subscription{
    NewChatSubscription{
      ...ChatChannelFields
    }
  }
`

export const CHAT_BY_ID_SUBSCRIPTION = gql `
  ${MESSAGE_FIELDS}
  subscription ($channelId:String!){
        ChatSubscriptionByID (
            channel_id:$channelId
        ){
          ...MessageFields
        }
  }
`

