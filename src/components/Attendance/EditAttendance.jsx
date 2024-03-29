import React from 'react'
import ButtonReturn from '../Button/Button'

function EditAttendance() {
    return (
        <div>

            <div className="w-auto">
                <h1 className='border-2 border-gray-500 rounded m-2 p-2 inline-block font-Poppins'>Edit Attendance</h1>
                <ButtonReturn />
                <div className="p-4">
                    <div className=" bg-white p-3 mx-4 rounded h-auto">
                        <form className="font-Poppins">
                            <div className="mb-2 row">
                                <div className="col">
                                    <label htmlFor="name" className='mb-1 font-Poppins'> Employee</label>
                                    <input type="text" name='emp' value="" placeholder='Type your Employee Name' className='font-Poppins form-control' />
                                    <div className="text-red-700"></div>
                                </div>
                                <div className="col">
                                    <label htmlFor="name" className='mb-1 font-Poppins'> Date </label>
                                    <input type="date" name='date' value="" className='font-Poppins form-control' />
                                    <div className="text-red-700"></div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="department" className='font-Poppins form-label mb-2'>
                                    Time In:</label>
                                <input name="myInput" placeholder="Enter Company Name" className="p-1 form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="department" className='font-Poppins form-label mb-2'>
                                    Time Out:</label>
                                <input name="myInput" placeholder="Enter Company Name" className="p-1 form-control" />
                            </div>
                            <div className="mb-2 ">
                                <label htmlFor="address" className='font-Poppins form-label mb-1'> Reason: </label>
                                <textarea name="address" cols="20" rows="3" className='font-Poppins form-control'></textarea>
                                <div className="text-red-700"></div>
                            </div>
                            <div className="text-end">
                                <input type="submit" value="Update" className='font-Poppins btn btn-success bg-slate-700 mt-2' />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditAttendance