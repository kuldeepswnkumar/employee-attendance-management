import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <div className='w-screen h-screen bg-gradient-to-r bg-[#b0efff] flex'>
            <div className="login m-auto items-center border-2 border-gray-500 w-[30%] bg-white rounded-lg p-4">
                <h1 className='text-center p-3 font-Poppins font-bold text-2xl'>Login</h1>
                <form action="#" autoComplete='off'>

                    <div className="mb-3">
                        <FontAwesomeIcon icon={faUser} /><label htmlFor="username" className='font-Poppins form-label ml-2'> Email Id</label>
                        <input type="email" name='email' placeholder='Type your email id' className='font-Poppins p-2 form-control'></input>

                    </div>
                    <div className="mb-3">
                        <FontAwesomeIcon icon={faLock} /><label htmlFor="username" className='font-Poppins form-label ml-2' > Password  </label>
                        <input type="password" name='password' placeholder='Type your password' className='font-Poppins p-2 form-control' />

                    </div>
                    <div className="mb-3">
                        <FontAwesomeIcon icon={faLock} /><label htmlFor="username" className='font-Poppins form-label ml-2'>Confirm Password  </label>
                        <input type="password" name='password' placeholder='Type your confirm password' className='font-Poppins p-2 form-control' />

                    </div>
                    <div className="reg font-Poppins text-end">
                        <p>
                            <Link to="/forget" className='text-blue-700 underline font-Poppins'> Forget Password!</Link>
                        </p>
                    </div>
                    <div className="text-center my-4">
                        <input type="submit" value="Login" className='font-Poppins btn btn-primary w-[100%] mt-1 bg-slate-700' />
                    </div>
                </form>

                <div className="reg font-Poppins text-center">
                    <p>If you don't have accout
                        <Link to="/registration" className='text-blue-600 underline font-Poppins'> Sign in</Link> here
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login