import React, { useState } from 'react'
import LoginMobile from '../components/Auth/LoginMobile'
import LoginDesktop from '../components/Auth/LoginDesktop'
import ForgotPasswordModal from '../components/Profile/ForgotPasswordModal'

const LoginPage: React.FC = () => {
    const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false)

    const handleOpenForgotPassword = () => setIsForgotPasswordOpen(true)
    const handleCloseForgotPassword = () => setIsForgotPasswordOpen(false)

    return (
        <>
            <div className="block lg:hidden">
                <LoginMobile onForgotPassword={handleOpenForgotPassword} />
            </div>
            <div className="hidden lg:block">
                <LoginDesktop onForgotPassword={handleOpenForgotPassword} />
            </div>

            <ForgotPasswordModal
                isOpen={isForgotPasswordOpen}
                onClose={handleCloseForgotPassword}
            />
        </>
    )
}

export default LoginPage
