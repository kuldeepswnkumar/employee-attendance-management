import React, { useState } from 'react';

function EmpRegistration() {
    const [errForm, setErrForm] = useState({})
    const [regForm, setRegForm] = useState({
        empId: '',
        empName: '',
        email: '',
        mobile: '',
        accType: '',
        empRole: '',
        status: '',
        password: '',
        cfmpassword: ''
    })

    const handleValidForm = () => {
        let err = {};
        if (regForm.empId == '') {
            err.empId = 'Employee id required!'
        }
        if (regForm.empName == '') {
            err.empName = 'Name is required!'
        }
        if (regForm.email == '') {
            err.email = 'Email is required!'
        }
        if (regForm.mobile == '') {
            err.mobile = 'Mobile is required!'
        }
        if (regForm.accType == '') {
            err.accType = 'Type is required!'
        }
        if (regForm.empId == '') {
            err.empId = 'Employee id required!'
        }
        if (regForm.empRole == '') {
            err.empRole = 'Role is required!'
        }
        if (regForm.status == '') {
            err.status = 'Status is required!'
        }
        if (regForm.password == '') {
            err.password = 'Password is required!'
        }
        if (regForm.cfmpassword == '') {
            err.cfmpassword = 'Confirm password is required!'
        }
        setErrForm({ ...err })
        return false;
    }

    const handleFormData = (e) => {
        setRegForm(() => ({
            ...regForm,
            [e.target.name]: e.target.value
        }))
    }


    const handleFormSubmit = (e) => {
        e.preventDefault()
        const isValid = handleValidForm()
        console.log(isValid);
    }
    return (
        <div>
            <div className='w-screen h-screen bg-gradient-to-r bg-[#b0efff] flex'>
                <div className="registration m-auto items-center border-2 border-gray-500  bg-white rounded-lg p-4">
                    <h1 className='text-center p-2 font-Poppins font-bold text-2xl'>Registration</h1>
                    <form onSubmit={handleFormSubmit} autoComplete='off'>
                        <div className="mb-2 row">
                            <div className="col">
                                <label htmlFor="id" className='mb-2 font-Poppins form-label'> Employee Id</label>
                                <input type="text" name='empId' placeholder='Type your id' onChange={handleFormData} className='font-Poppins form-control' />
                                <div className='text-red-600'>{errForm.empId}</div>
                            </div>
                            <div className="col">
                                <label htmlFor="emp" className='mb-2 font-Poppins form-label'> Employee Name</label>
                                <input type="text" name='empName' placeholder='Type your name' onChange={handleFormData} className='font-Poppins form-control' />
                                <div className='text-red-600'>{errForm.empName}</div>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className='font-Poppins form-label mb-2'> Email </label>
                            <input type="email" name='email' placeholder='Type your email id' onChange={handleFormData} className='font-Poppins form-control' />
                            <div className='text-red-600'>{errForm.email}</div>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="mobile" className='font-Poppins form-label mb-2'> Mobile Number</label>
                            <input type="tel" name='mobile' placeholder='Type your mobile number' onChange={handleFormData} className='font-Poppins form-control' />
                            <div className='text-red-600'>{errForm.mobile}</div>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="accType" className='font-Poppins form-label mb-2 mr-2'> Choose Accout Type  </label>
                            Employee <input className='ml-1 mr-2' type='radio' name="accType" onChange={handleFormData} value="employee" defaultChecked />
                            Admin<input className='ml-1' type='radio' name="accType" onChange={handleFormData} value="admin" />
                            <div className='text-red-600'>{errForm.accType}</div>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="role" className='font-Poppins form-label mb-2 '> Employee Role </label>
                            <select className='font-Poppins form-select' onChange={handleFormData} name='empRole'>
                                <option selected>Choose...</option>
                                <option value="admin">Admin</option>
                                <option value="manager">Manager</option>
                            </select>
                            <div className='text-red-600'>{errForm.empRole}</div>

                        </div>
                        <div className="mb-2">
                            <label htmlFor="status" className='font-Poppins form-label mb-2'>Status <br />
                                <label><input className='mr-2' type='radio' name="status" value="active" onChange={handleFormData} defaultChecked></input>Active</label>
                                <label className='mx-3'><input className='mr-2' type='radio' name="status" onChange={handleFormData} value="deactive"></input>Deactive</label>
                                <div className='text-red-600'>{errForm.status}</div>
                            </label>
                        </div>
                        <div className="mb-2 row">
                            <div className="col">
                                <label htmlFor="password" className='font-Poppins form-label mb-2'>Password</label>
                                <input type="password" name='password' placeholder='Type your password' onChange={handleFormData} className='font-Poppins form-control' />
                                <div className='text-red-600'>{errForm.password}</div>
                            </div>
                            <div className="col">
                                <label htmlFor="password" className='font-Poppins form-label mb-2'>Confirm Password </label>
                                <input type="password" name='cfmpassword' placeholder='Type your confirm password' onChange={handleFormData} className='font-Poppins form-control' />
                                <div className='text-red-600'>{errForm.cfmpassword}</div>
                            </div>
                        </div>
                        <div className="text-center">
                            <input type="submit" value="Registration" className='font-Poppins btn btn-primary w-[100%] mt-2 bg-slate-700' />
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default EmpRegistration