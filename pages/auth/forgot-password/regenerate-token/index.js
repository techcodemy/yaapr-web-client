import React from 'react'
import AuthLayout from '../../../../layouts/AuthLayout'

const regenerateToken = () => {
    return (
        <AuthLayout pageInfo={`Regenerate password recovery token | Yaapr`} pageMetaInfo={``}>
            regenerate Token
        </AuthLayout>
    )
}

export default regenerateToken