import React from 'react'
import ButtonReturn from '../Button/Button'




function ScheduleAdd() {
    return (
        <div>
            <h1 className='text-center font-Poppins font-bold text-2xl p-2 border-gray-950 bg-green-500'>Add Employee Schedule</h1>
            <div className="w-[80%] m-auto">
                <h1 className='border-2 border-gray-500 rounded m-2 p-2 inline-block font-Poppins'>Add Schedule</h1>
                <ButtonReturn />
                <div className="p-1">
                    <div className=" bg-white p-3 mx-4 rounded h-auto">
                        <form className="font-Poppins">
                            <div className="mb-2 row">
                                <div className="col">
                                    <label htmlFor="name" className='mb-1 font-Poppins'> Employee</label>
                                    <input type="text" name='empName' value="" placeholder='Type your Employee Name' className='font-Poppins form-control' />
                                    <div className="text-red-700"></div>
                                </div>
                                <div className="col">
                                    <label htmlFor="date" className='mb-1 font-Poppins'>Join Date </label>
                                    <input type="date" name='joindate' value="" className='font-Poppins form-control' />
                                    <div className="text-red-700"></div>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div className="col">
                                    <label htmlFor="stime" className='font-Poppins form-label mb-2'>
                                        Start Time:</label>
                                    <input type='text' name="strTime" placeholder="Enter Start Time" className="p-1 form-control" />
                                </div>
                                <div className="col">
                                    <label htmlFor="otime" className='font-Poppins form-label mb-2'>
                                        Off Time:</label>
                                    <input type='text' name="offTime" placeholder="Enter Off Time" className="p-1 form-control" />
                                </div>
                            </div>
                            <div className="mb-2 ">
                                <label htmlFor="reason" className='font-Poppins form-label mb-1'> Reason: </label>
                                <textarea name="reason" cols="20" rows="2" className='font-Poppins form-control'></textarea>
                                <div className="text-red-700"></div>
                            </div>
                            <div className="mb-2 row">
                                <div className="col">
                                    <label htmlFor="hour" className='font-Poppins form-label mb-2'>
                                        Hours:</label>
                                    <input type='text' name="hours" placeholder="Enter Hours" className="p-1 form-control" />
                                </div>
                                <div className="col">
                                    <label htmlFor="rdays" className='font-Poppins form-label mb-2'>
                                        Rest Days:</label>
                                    <input type='text' name="rdays" placeholder="Enter Rest Days" className="p-1 form-control" />
                                </div>
                            </div>
                            <div className="mb-2 row">
                                <div className="col">
                                    <label htmlFor="fdate" className='font-Poppins form-label mb-2'>
                                        From (Date):</label>
                                    <input type='text' name="fdate" className="p-1 form-control" />
                                </div>
                                <div className="col">
                                    <label htmlFor="tdate" className='font-Poppins form-label mb-2'>
                                        To (Date):</label>
                                    <input type='text' name="tdate" className="p-1 form-control" />
                                </div>
                            </div>
                            <div className="mb-2">

                                <label htmlFor="status" className='font-Poppins form-label mb-1'> Employee Status:</label>
                                <select className='font-Poppins form-select' name="empStatus">
                                    <option selected>Choose...</option>
                                    <option value="active">Active</option>
                                    <option value="deactive">Deactive</option>
                                </select>
                                <div className="text-red-700"></div>
                            </div>
                            <div className="text-end">
                                <input type="submit" value="Submit" className='font-Poppins btn btn-success bg-slate-700 mt-2' />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleAdd