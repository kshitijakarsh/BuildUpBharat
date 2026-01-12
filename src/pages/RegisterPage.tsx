import React from 'react'
import RegisterMobile from '../components/Auth/RegisterMobile'
import RegisterDesktop from '../components/Auth/RegisterDesktop'

const RegisterPage: React.FC = () => {
    return (
        <>
            <div className="block lg:hidden">
                <RegisterMobile />
            </div>
            <div className="hidden lg:block">
                <RegisterDesktop />
            </div>
        </>
    )
}

export default RegisterPage
