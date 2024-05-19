import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Axios from '../../Axios'
import toast from 'react-hot-toast'


function ScheduleAdd() {

    const navigate = useNavigate()

    const [errForm, setErrForm] = useState({})
    const [formData, setFormData] = useState({
        empId: '',
        strTime: '',
        etime: '',
        hours: '',
        rdays: '',
        fdate: '',
        tdate: '',
        empStatus: ''
    })

    const validationForm = () => {
        let err = {}

        if (formData.empId === '') {
            err.empId = 'Id is required!'
        }
        if (formData.strTime === '') {
            err.strTime = 'Start time required!'
        }
        if (formData.etime === '') {
            err.etime = 'End time is required!!'
        }
        if (formData.hours === '') {
            err.hours = 'Hours is required!!'
        }
        if (formData.rdays === '') {
            err.rdays = 'Rest is required!!'
        }
        if (formData.fdate === '') {
            err.fdate = 'StartDate is required!!'
        }
        if (formData.tdate === '') {
            err.tdate = 'EndDate is required!!'
        }
        if (formData.empStatus === '') {
            err.empStatus = 'Status is required!!'
        }

        setErrForm({ ...err })
        return false
    }


    const handleOnChange = (e) => {
        setFormData(() => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }

    const SendFormData = () => {
        Axios.post('http://localhost:8000/api/user/addschedule', formData)
            .then((response) => {
                // console.log(response);
                toast.success(response.data.message)
                navigate('/schedules')
            }).catch((error) => {
                console.log(error);
            })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        validationForm()
        SendFormData()
        console.log("my", formData);

    }

    return (
        <div>
            <h1 className='text-center font-Poppins font-bold text-2xl p-2 border-gray-950 bg-green-500'>Schedule Employee</h1>
            <div className="w-[80%] m-auto">
                <h1 className='border-2 border-gray-500 rounded m-2 p-2 inline-block font-Poppins'>Add Schedule</h1>
                <div className="text-end mr-4">
                    <Link to="/dashboard">
                        <FontAwesomeIcon icon={faArrowLeft} /> <input type="button" value="Return" className='font-Poppins btn btn-success bg-slate-700' />
                    </Link>
                </div>
                <div className="p-3 border-2 mt-2">
                    <div className=" bg-white p-3 mx-4 rounded h-auto">
                        <form className="font-Poppins" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="empId" className='mb-1 font-Poppins'> ID</label>
                                <input type="text" name='empId' onChange={handleOnChange} placeholder='Type your Employee Id' className='font-Poppins form-control' />
                            </div>
                            <div className="mb-3 row">
                                <div className="col">
                                    <label htmlFor="strTime" className='font-Poppins form-label mb-2'>
                                        Start Time:</label>
                                    <input type='text' name="strTime" placeholder="Enter Start Time" onChange={handleOnChange} className="p-1 form-control" />
                                    <div className="text-red-700">{errForm.strTime}</div>
                                </div>
                                <div className="col">
                                    <label htmlFor="etime" className='font-Poppins form-label mb-2'>
                                        End Time:</label>
                                    <input type='text' name="etime" placeholder="Enter Off Time" onChange={handleOnChange} className="p-1 form-control" />
                                    <div className="text-red-700">{errForm.etime}</div>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div className="col">
                                    <label htmlFor="hours" className='font-Poppins form-label mb-2'>
                                        Hours:</label>
                                    <input type='text' name="hours" placeholder="Enter Hours" onChange={handleOnChange} className="p-1 form-control" />
                                    <div className="text-red-700">{errForm.hours}</div>
                                </div>
                                <div className="col">
                                    <label htmlFor="rdays" className='font-Poppins form-label mb-2'>
                                        Rest Days:</label>
                                    <input type='text' name="rdays" placeholder="Enter Rest Days" onChange={handleOnChange} className="p-1 form-control" />
                                    <div className="text-red-700">{errForm.rdays}</div>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div className="col">
                                    <label htmlFor="fdate" className='font-Poppins form-label mb-2'>
                                        From (Date):</label>
                                    <input type='date' name="fdate" onChange={handleOnChange} className="p-1 form-control" />
                                    <div className="text-red-700">{errForm.fdate}</div>
                                </div>
                                <div className="col">
                                    <label htmlFor="tdate" className='font-Poppins form-label mb-2'>
                                        To (Date):</label>
                                    <input type='date' name="tdate" onChange={handleOnChange} className="p-1 form-control" />
                                    <div className="text-red-700">{errForm.tdate}</div>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="status" className='font-Poppins form-label mb-1'> Employee Status:</label>
                                <select className='font-Poppins form-select' onChange={handleOnChange} name="empStatus">
                                    <option selected>Choose...</option>
                                    <option value="active">Active</option>
                                    <option value="deactive">Deactive</option>
                                </select>
                                <div className="text-red-700">{errForm.empStatus}</div>
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