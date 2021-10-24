import React from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import LoginPage from '../../components/auth/LoginPage'

const login = () => {
    return (
        <AuthLayout pageInfo={`Login into your Account | Yaapr`} pageMetaInfo={``}>
            <LoginPage />
        </AuthLayout>
    )
}

export default login
