import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Axios from '../../Axios'
import toast from 'react-hot-toast'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import ClockButton from '../Clock/ClockButton'



const Login = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [validData, setValidData] = useState({})
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })
    const [searchParams, setSearchParams] = useSearchParams();


    if (localStorage.getItem('AccessToken')) {
        navigate('/dashboard')
    }

    const handleValidData = () => {
        let err = {};
        if (loginData.email === "") {
            err.email = "Email is required!"
        }
        if (loginData.password === "") {
            err.password = "Passwored is required!"
        }
        setValidData({ ...err })
        return false;

    }

    const handleOnChange = (e) => {
        setLoginData(() => ({
            ...loginData,
            [e.target.name]: e.target.value
        }))
    }

    const userLogin = async () => {
        try {
            const logData = await Axios.post("/api/user/login", loginData)
            const response = logData.data

            console.log("response : ", response.data.user.empName);
            if (response.success) {
                toast.success(response.message);
            }

            localStorage.setItem("AccessToken", response.data.accessToken)
            localStorage.setItem("name", response.data.user.empName)
            setLoading(true)
            setTimeout(() => {
                setTimeout(() => {
                    setLoading(false)
                }, 3000)
                navigate("/dashboard")
            }, 2000)

        } catch (error) {
            console.error('An error occurred:', error);
            toast.error(error.response.data.message || "Somthing went wrong")
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleValidData()
        userLogin();

    }

    useEffect(() => {
        setIsAdmin(searchParams.get('type') != null)
    }, [])

    return (

        <div className='w-screen h-screen bg-gradient-to-r bg-[rgb(1,22,80)] flex justify-center'>


            {

                loading ? <ClimbingBoxLoader
                    color={'#d64036'}
                    loading={loading}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    className='mt-60'
                /> :
                    < div className="login m-auto items-center border-2 border-gray-500 w-[30%] bg-white rounded-lg p-4" >

                        <h1 className='text-center p-3 font-Poppins font-bold text-2xl'>Login</h1>
                        <form onSubmit={handleSubmit} autoComplete='off'>

                            <div className="mb-3">
                                <FontAwesomeIcon icon={faUser} /><label htmlFor="username" className='font-Poppins form-label ml-2'> Email Id</label>
                                <input type="email" name='email' placeholder='Type your email id' onChange={handleOnChange} value={loginData.email} className='font-Poppins p-2 form-control'></input>
                                <div className='text-red-600'>{validData.email}</div>
                            </div>
                            <div className="mb-3">
                                <FontAwesomeIcon icon={faLock} /><label htmlFor="username" className='font-Poppins form-label ml-2' > Password  </label>
                                <input type="password" name='password' placeholder='Type your password' onChange={handleOnChange} value={loginData.password} className='font-Poppins p-2 form-control' />
                                <div className='text-red-600'>{validData.password}</div>
                            </div>

                            <div className="reg font-Poppins text-end">
                                <p>
                                    <Link to="/forget" className='text-blue-700 underline font-Poppins'> Forget Password!</Link>
                                </p>
                            </div>

                            <div className="text-center my-3">
                                <input type="submit" value="Login" className='font-Poppins btn btn-primary w-[100%] mt-1 bg-slate-700' />
                            </div>

                        </form>
                        <ClockButton />
                        {
                            !isAdmin ?
                                <div className="reg font-Poppins text-center mt-3">
                                    <p>If you don't have accout
                                        <Link to="/empregistration" className='text-blue-600 underline font-Poppins'> Sign Up</Link> here
                                    </p>
                                </div>
                                : null

                        }

                    </div >
            }
        </div >
    )
}

export default Login