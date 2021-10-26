import React from 'react'
import Logo from '../Logo'
import LoginComponent from './common/LoginComponent'

const LoginPage = () => {
    return (
        <main className="flex flex-row h-full">
            <section className="w-1/2 bg-primary-base rounded-br-full flex justify-center ">
                <div className="mx-auto w-3/4 mb-14 pt-20">
                    <div>
                        <div className="flex flex-row space-x-3">
                            <div className="h-14 w-14 rounded-lg">
                                <Logo styles={'h-14 w-14'} color={'#fff'} />
                            </div>
                            <div className="text-3xl font-bold text-white mt-3">Welcome to Yaapr</div>
                        </div>
                        <h1 className="text-5xl font-bold text-white mt-4">Customer Support </h1>
                        <h2 className="text-3xl font-bold text-indigo-50">Made Easy & Accessible</h2>
                        <p className="mt-4 text-indigo-100 tracking-tight">"Interact with your customers online and office visits"</p>
                    </div>

                    <div className="mt-8 flex items-center space-x-3">
                        <button className="btn bg-indigo-50 border border-indigo-100 py-3 px-8">Get Started</button>
                        <span className="text-white">or Log into Your Account</span>
                    </div>
                </div>
            </section> 
            <section className="w-1/2">
                <LoginComponent />
            </section> 
        </main>
    )
}

export default LoginPage
