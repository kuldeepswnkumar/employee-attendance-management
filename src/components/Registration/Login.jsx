import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <div className='w-screen h-screen bg-gradient-to-r bg-[#b0efff] flex'>
            <div className="login m-auto items-center border-2 border-gray-500 w-[30%] bg-white rounded-lg p-5">
                <h1 className='text-center p-3 font-Poppins font-bold text-2xl'>Login</h1>
                <form action="#" autoComplete='off'>

                    <div className="mb-3">
                        <label htmlFor="username" className='font-Poppins'> Email Id <br />
                            <FontAwesomeIcon icon={faUser} /> <input type="email" name='email' placeholder='Type your email id' className='font-Poppins p-2 bg-transparent border-b-4 w-[90%]'></input>
                        </label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className='font-Poppins'> Password <br />
                            <FontAwesomeIcon icon={faLock} />  <input type="password" name='password' placeholder='Type your password' className='font-Poppins p-2 border-b-4 w-[90%]' />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className='font-Poppins'>Confirm Password <br />
                            <FontAwesomeIcon icon={faLock} />  <input type="password" name='password' placeholder='Type your password' className='font-Poppins p-2 border-b-4 w-[90%]' />
                        </label>
                    </div>
                    <div className="btn text-center my-5">
                        <input type="button" value="Login" className='font-Poppins border-2 p-1.5 w-[90%] rounded-md cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500' />
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