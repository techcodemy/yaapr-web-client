import React from 'react'
import Logo from '../../Logo'
import AuthFooter from '../partials/AuthFooter'
import NotMember from '../partials/NotMember'

const LoginComponent = () => {
    return (
        <section className="flex justify-center">
            <div className="mt-20 w-1/2 ">
                <section className="p-4">
                    <header className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center space-x-3">
                            <div className="h-10 w-10 rounded-lg">
                                <Logo styles={'h-9 w-9'} color={'#6A4CFF'} />
                            </div>
                            <div className="text-2xl font-bold dark:text-white">Yaapr</div>
                        </div>
                        <div className="text font-semibold pr-3 dark:text-white">Log In</div>
                    </header>
                    <form>
                        <div className="mt-3">
                            <label className="input--control-label">Email</label>
                            <div>
                                <input type="text" className="input--control input--control-noerr" placeholder="johndoe@mail.co" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="input--control-label">Password</label>
                            <div>
                                <input type="password" className="input--control input--control-err" placeholder="******" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <button className="btn btn--primary w-full">
                                Log In
                            </button>
                        </div>
                    </form>
                </section>

                <section className="px-4">
                    <NotMember />
                    <AuthFooter />
                </section>
               
            </div>

        </section>
    )
}

export default LoginComponent
