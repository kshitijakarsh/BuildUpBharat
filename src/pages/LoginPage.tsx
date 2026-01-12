import React from 'react'
import LoginMobile from '../components/Auth/LoginMobile'
import LoginDesktop from '../components/Auth/LoginDesktop'

const LoginPage: React.FC = () => {
    return (
        <>
            <div className="block lg:hidden">
                <LoginMobile />
            </div>
            <div className="hidden lg:block">
                <LoginDesktop />
            </div>
        </>
    )
}

export default LoginPage
