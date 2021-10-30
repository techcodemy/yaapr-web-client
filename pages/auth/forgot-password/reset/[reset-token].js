import React from 'react'
import AuthLayout from '../../../../layouts/AuthLayout'
import LoginPage from '../../../../components/auth/LoginPage'

const resetPage = () => {
    return (
        <AuthLayout pageInfo={`Login into your Account | Yaapr`} pageMetaInfo={``}>
            reset toke
        </AuthLayout>
    )
}

export default resetPage