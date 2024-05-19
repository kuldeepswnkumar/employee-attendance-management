import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import Axios from '../../Axios.js'
import toast from 'react-hot-toast'
import ClockButton from '../Clock/ClockButton.jsx'

function EmployeeLogin() {

    const navigate = useNavigate()

    const [errForm, setErrForm] = useState({})
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData(() => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }
    console.log('formData', formData);

    const validateForm = () => {
        const err = {}
        if (formData.email === '') {
            err.email = 'Email is required'
        }
        if (formData.password === '') {
            err.password = 'Password is required'
        }

        setErrForm({ ...err })
        return false
    }


    const SendFormdata = () => {
        Axios.post('http://localhost:8000/api/user/employeelogin', formData)
            .then((response) => {
                console.log(response.data.data[0].loggedEmp);
                toast.success(response.data.message)
                navigate("/empdashboard")
                // console.log('refreshToken', response.data.data[0].refreshToken);
                localStorage.setItem('AccessToken', response.data.data[0].accessToken)
                localStorage.setItem("Name", response.data.data[0].loggedEmp.fname)
            }).catch((error) => console.log(error))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        validateForm()
        SendFormdata()
    }

    return (
        <div>
            <div className='w-screen h-screen bg-gradient-to-r bg-[rgb(1,22,80) ] flex'>
                <div className="login m-auto items-center border-2 border-gray-500 w-[30%] bg-white rounded-lg p-4">
                    <h1 className='text-center p-3 font-Poppins font-bold text-2xl'>Login</h1>
                    <form action="#" onSubmit={handleSubmit} autoComplete='off'>
                        <div className="mb-3">
                            <FontAwesomeIcon icon={faUser} /><label htmlFor="username" className='font-Poppins form-label ml-2'> Email Id</label>
                            <input type="email" name='email' placeholder='Type your email id' onChange={handleChange} className='font-Poppins p-2 form-control'></input>
                            <div className="text-red-700">{errForm.email}</div>
                        </div>
                        <div className="mb-3">
                            <FontAwesomeIcon icon={faLock} /><label htmlFor="username" className='font-Poppins form-label ml-2' > Password  </label>
                            <input type="password" name='password' placeholder='Type your password' onChange={handleChange} className='font-Poppins p-2 form-control' />
                            <div className="text-red-700">{errForm.password}</div>
                        </div>
                        <div className="reg font-Poppins text-end">
                            <p>
                                <Link to="/forget" className='text-blue-700 underline font-Poppins'> Forget Password!</Link>
                            </p>
                        </div>
                        <div className="text-center my-4">
                            <input type="submit" value="Login" className='font-Poppins btn btn-primary w-[100%] mt-1 bg-slate-700' />
                        </div>
                        <ClockButton />
                    </form>

                    {/* 
                    <div className="reg font-Poppins text-center">
                        <p>If you don't have accout
                            <Link to="/empregistration" className='text-blue-600 underline font-Poppins'> Sign in</Link> here
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default EmployeeLogin