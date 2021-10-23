import { gql } from '@apollo/client';

export const USER_FIELDS = gql`
  fragment UserFields on User {
    id
    email
    username
    first_name
    last_name
    avatar
    avatar_thumbnail
    user_role
    recommended_keywords
    phone_contacts{
        code
        number
        whatsapp
    }
    followers{
        id
        email
        username
        first_name
        last_name
        avatar
        created_at
    }
    following{
        id
        email
        username
        first_name
        last_name
        avatar
        created_at
    }
    active_status
    created_at
  }
`;

/* liked_products{
    id
    uploader{
        type
        user{
        id
        email
        username
        first_name
        last_name
        avatar
        }
    }
    description
    description_slug
    condition
    images{
        id
        thumbnail_image
        original_image
    }
    price
    discount
    currency
    stock
}  */