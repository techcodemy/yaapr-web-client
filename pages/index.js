import React from 'react'
import HomePage from '../components/pages/HomePage'
import AuthLayout from '../layouts/AuthLayout'

const index = () => {
  return (
    <AuthLayout pageInfo={`Home | Yaapr`} pageMetaInfo={``}>
       <HomePage />
    </AuthLayout>
  )
}

export default index
