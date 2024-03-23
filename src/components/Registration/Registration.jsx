import React from 'react'

const Registration = () => {
    return (
        <div>
            <div className='w-screen h-screen bg-gradient-to-r bg-[#b0efff] flex'>
                <div className="registration m-auto items-center border-2 border-gray-500 w-[50%] bg-white rounded-lg p-5">
                    <h1 className='text-center p-2 font-Poppins font-bold text-2xl'>Registration</h1>
                    <form action="#" autoComplete='off'>
                        <div className="mb-3">
                            <label htmlFor="id" className='mb-2 font-Poppins'> Employee Id
                                <input type="number" name='number' placeholder='Type your id' className='font-Poppins bg-transparent border-b-4 w-[95%]' />
                            </label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="emp" className='font-Poppins '> Employee Name
                                <input type="text" name='text' placeholder='Type your name' className='font-Poppins bg-transparent border-b-4 w-[95%]' />
                            </label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className='font-Poppins'> Email
                                <input type="email" name='email' placeholder='Type your email id' className='font-Poppins bg-transparent border-b-4 w-[95%]' />
                            </label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mobile" className='font-Poppins'> Mobile Number
                                <input type="tel" name='mobile' placeholder='Type your mobile number' className='font-Poppins bg-transparent border-b-4 w-[95%]' />
                            </label>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="accType" className='font-Poppins'> Choose Accout Type <br />
                                <label><input className='mr-2' type='radio' name="accType" value="employee" defaultChecked></input>Employee</label>
                                <label className='mx-3'><input className='mr-2' type='radio' name="accType" value="admin"></input>Admin</label>
                            </label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="role" className='font-Poppins '> Employee Role
                                <select className='font-Poppins bg-transparen border-b-4 w-[95%]' >
                                    <option>Select Employee</option>
                                    <option value="admin">Admin</option>
                                    <option value="manager">Manager</option>
                                </select>
                            </label>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="status" className='font-Poppins'>Status <br />
                                <label><input className='mr-2' type='radio' name="status" value="active" defaultChecked></input>Active</label>
                                <label className='mx-3'><input className='mr-2' type='radio' name="status" value="deactive"></input>Deactive</label>
                            </label>
                        </div>
                        <div className="mb-2 flex">
                            <label htmlFor="password" className='font-Poppins'>Password <br />
                                <input type="password" name='password' placeholder='Type your password' className='font-Poppins  bg-transparent border-b-4 w-[100%]' />
                            </label>
                            <label htmlFor="password" className='font-Poppins ml-8 '>Confirm Password <br />
                                <input type="password" name='password' placeholder='Type your confirm password' className='font-Poppins bg-transparent border-b-4 w-[100%]' />
                            </label>
                        </div>
                        <div className="btn text-center my-5">
                            <input type="button" value="Registration" className='font-Poppins border-2 p-1.5 w-[90%] rounded-md cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500' />
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Registration     