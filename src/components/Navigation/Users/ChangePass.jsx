import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import Axios from '../../../Axios'
import toast from 'react-hot-toast'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";



function ChangePass() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [validData, setValidData] = useState({})
    const [changePass, setChangePass] = useState({
        oldpass: "",
        newpass: "",
        cmfpass: "",
    })

    const handleValidData = () => {
        let err = {};
        if (changePass.oldpass === "") {
            err.oldpass = "Oldpass is required!"
        }
        if (changePass.newpass === "") {
            err.newpass = "Newpass is required!"
        }
        if (changePass.cmfpass === "") {
            err.cmfpass = "Confirm pass is required!"
        }

        setValidData({ ...err })
        return false;

    }

    const handleOnChange = (e) => {
        setChangePass(() => ({
            ...changePass,
            [e.target.name]: e.target.value
        }))
    }

    const userChangePass = async () => {
        try {
            const changedpass = await Axios.post("/api/user/changepass", changePass)
            const response = changedpass.data

            // console.log("response : ", response);
            if (response.success) {
                toast.success(response.message);
            }

            setLoading(true)
            setTimeout(() => {
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
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
        userChangePass();
        console.log(changePass);

    }
    return (
        <div className='w-screen h-screen bg-gradient-to-r bg-[#b0efff] flex justify-center'>

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
                        <h1 className='text-center p-3 font-Poppins font-bold text-2xl'>Change Password</h1>
                        <form onSubmit={handleSubmit} autoComplete='off'>

                            <div className="mb-3">
                                <FontAwesomeIcon icon={faLock} /><label htmlFor="oldpass" className='font-Poppins form-label ml-2'> Old Password</label>
                                <input type="text" name='oldpass' placeholder='Type your old password' onChange={handleOnChange} value={changePass.oldpass} className='font-Poppins p-2 form-control'></input>
                                <div className='text-red-600'>{validData.oldpass}</div>
                            </div>
                            <div className="mb-3">
                                <FontAwesomeIcon icon={faLock} /><label htmlFor="newpass" className='font-Poppins form-label ml-2'> New Password</label>
                                <input type="text" name='newpass' placeholder='Type your new password' onChange={handleOnChange} value={changePass.newpass} className='font-Poppins p-2 form-control'></input>
                                <div className='text-red-600'>{validData.newpass}</div>
                            </div>
                            <div className="mb-3">
                                <FontAwesomeIcon icon={faLock} /><label htmlFor="confirmpass" className='font-Poppins form-label ml-2'> Confirm Password</label>
                                <input type="text" name='cmfpass' placeholder='Type your confirm password' onChange={handleOnChange} value={changePass.cmfpass} className='font-Poppins p-2 form-control'></input>
                                <div className='text-red-600'>{validData.cmfpass}</div>
                            </div>

                            <div className="text-center my-4">
                                <input type="submit" value="Login" className='font-Poppins btn btn-primary w-[100%] mt-1 bg-slate-700' />
                            </div>
                        </form>

                        <div className="reg font-Poppins text-center">
                            <p>If you don't have accout
                                <Link to="/empregistration" className='text-blue-600 underline font-Poppins'> Sign in</Link> here
                            </p>
                        </div>
                    </div >
            }
        </div >
    )
}

export default ChangePass