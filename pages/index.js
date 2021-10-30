import React from 'react'
import HomePage from '../components/pages/HomePage'
import AccountLayout from '../components/layouts/AccountLayout'

const index = () => {
  return (
    <AccountLayout pageInfo={`Home | Yaapr`} pageMetaInfo={``}>
       <HomePage />
    </AccountLayout>
  )
}

export default index
