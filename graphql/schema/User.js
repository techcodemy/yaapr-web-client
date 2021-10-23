import { gql } from '@apollo/client';
import {USER_FIELDS} from './User_Fragment'

//partial user response
export const CHECK_USER_QUERY = gql`
  ${USER_FIELDS}
  query check_auth_query{
    CheckAuth{
      ...UserFields
    }
  }
`


export const FETCH_ME_QUERY = gql `
 ${USER_FIELDS}
  query fetch_me_query{
    FetchMe{
      ...UserFields
    }
  }
`


export const FETCH_USERS_WITH_FILTERS_QUERY = gql `
 ${USER_FIELDS}
  query Fetch_users_with_filters(
    $email:String,
    $username:String,
    $role:[String],
    $limit:Int,
    $offset:Int
    ){
    FetchUsersWithFilters(
      input:{
        email:$email
        username:$username
        role:$role
      },limit:$limit,offset:$offset){
        ...UserFields
      }
  }
`


export const LOGIN_USER_MUTATION = gql`
  ${USER_FIELDS}
  mutation login_user_mutation($email:String!,$password:String!) {
    LoginUser (input:{
        email:$email
        password:$password
    }){
      ...UserFields
    }
  }
`

export const REGISTER_USER_MUTATION = gql`
  ${USER_FIELDS}
  mutation register_user_mutation($username:String!,$email:String!,$password:String!$confirm_password:String!) {
    RegisterUser (input:{
        username:$username
        email:$email
        password:$password
        confirm_password:$confirm_password
    }){
      ...UserFields
    }
  }
`;


export const UPDATE_USER_MUTATION = gql`
  ${USER_FIELDS}
  mutation update_user_mutataion(
    $first_name:String,
    $last_name:String,
    $email:String,
    $username:String,
    $recommendedKeywords:[String!],
    $contacts:[PhoneContactInput!],
    ){
    UpdateUser(input:{
      first_name:$first_name
      last_name:$last_name
      email:$email
      username:$username
      recommended_keywords:$recommendedKeywords
      contacts:$contacts
    }){
      ...UserFields
    }
  }
`;


export const UPDATE_AVATAR_MUTATION = gql`
  ${USER_FIELDS}
  mutation update_user_avatar_mutation($image:Upload!) {
    UpdateUserAvatar(input:{
      image:$image
    }){
      ...UserFields
    }
  }
`;


export const ACTIVATE_ACCOUNT_MUTATION = gql`
  ${USER_FIELDS}
  mutation activate_account_mutation($link:String!) {
    ActivateAccount (link:$link){
      ...UserFields
    }
  }
`;


export const REGENERATE_TOKEN_MUTATION = gql`
  ${USER_FIELDS}
  mutation regenerate_token_account_mutation($email:String!) {
    RegenerateTokenAccount (email:$email){
      ...UserFields
    }
  }
`;

export const LOGOUT_USER_MUTATION = gql`
 mutation logout_user_mutation{
    LogoutUser
  }
`;

export const UPDATE_USER_PASSWORD_MUTATION = gql`
 mutation update_user_password_mutation($oldPassword:String!,$newPassword:String!,$confirmPassword:String!){
    UpdateUserPassword(input:{
      old_password:$oldPassword
      new_password:$newPassword
      confirm_password:$confirmPassword
    })
  }
`;

export const DELETE_MY_ACCOUNT_MUTATION = gql`
  mutation delete_my_account_mutation($password:String!) {
    DeleteMyAccount (link:$password)
  }
`;


export const DELETE_ACCOUNT_BY_ADMIN_MUTATION = gql`
  mutation delete_account_by_admin_mutation($id:String!) {
    DeleteUserByAdmin(id:$id) 
  }
`;

export const DEACTIVATE_USER_ACCOUNT_MUTATION = gql`
  mutation deactivate_user_account_mutation($password:String!) {
    DeactivateUser (link:$password)
  }
`;

export const RESET_PASSWORD_MUTATION = gql`
 ${USER_FIELDS}
  mutation reset_password_mutation($link:String!,$newPassword:String!,$confirmPassword:String!) {
    ResetPassword(
      link:$link,
      input:{
    	new_password:$newPassword
    	confirm_password:$confirmPassword
    }){
      ...UserFields
    }
  }
`;

export const FORGOT_PASSWORD_MUTATION = gql`
 ${USER_FIELDS}
 mutation forgot_password_mutation($email:String!){
    ForgotPassword(email:$email){
      ...UserFields
    }
  }
`;

export const TOGGLE_FOLLOW_USER_MUTATION = gql`
 ${USER_FIELDS}
 mutation toggle_follow_user_mutation($userID:String!){
    ToggleFollowUser(user_id:$userID){
      ...UserFields
    }
  }
`;