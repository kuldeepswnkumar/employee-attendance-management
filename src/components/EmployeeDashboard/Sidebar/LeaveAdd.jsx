import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Axios from '../../../Axios'
import toast from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function LeaveAdd() {

    const navigate = useNavigate()

    const [errForm, setErrForm] = useState({})
    const [formData, setFormData] = useState({
        empId: '',
        decription: '',
        leavefrom: '',
        leaveto: '',
        returndate: '',
        leaveStatus: ''
    })

    const validationForm = () => {
        const err = {}
        if (formData.empId === '') {
            err.empId = 'Id is required!'
        }
        if (formData.decription === '') {
            err.decription = 'Desription is required!'
        }
        if (formData.leavefrom === '') {
            err.leavefrom = 'Leave From is required!'
        }
        if (formData.leaveto === '') {
            err.leaveto = 'Leave to is required!'
        }
        if (formData.returndate === '') {
            err.returndate = 'Return Date is required!'
        }
        if (formData.leaveStatus === '') {
            err.leaveStatus = 'Leave Status is required!'
        }

        setErrForm({ ...err })
        return false
    }

    const handleOnChange = (e) => {
        // console.log(e);
        setFormData(() => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }
    // console.log(handleOnChange);


    const SendLeaveData = () => {
        Axios.post('http://localhost:8000/api/user/addleave', formData)
            .then((response) => {
                toast.success(response.data.message)
                navigate('/empdashboard/myleave')
                // console.log(response);
            }).catch((error) => {
                console.log(error);
            })
    }

    const ClearFormData = () => {
        const ClearData = {
            empId: '',
            decription: '',
            leavefrom: '',
            leaveto: '',
            returndate: '',
            leaveStatus: ''
        }
        setFormData(ClearData)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validationForm()
        SendLeaveData()
        ClearFormData()
    }

    return (
        <div className="w-[80%] m-auto">
            <h1 className='border-2 border-gray-500 rounded m-2 p-2 inline-block font-Poppins'>Add Leave</h1>
            <div className="text-end mr-4">
                <Link to="/dashboard">
                    <FontAwesomeIcon icon={faArrowLeft} /> <input type="button" value="Return" className='font-Poppins btn btn-success bg-slate-700' />
                </Link>
            </div>
            <div className="p-2 border-2 mt-2">
                <div className=" bg-white p-3 mx-4 rounded h-auto">
                    <form className="font-Poppins" onSubmit={handleSubmit}>
                        <div className="mb-2 ">
                            <label htmlFor="empId" className='font-Poppins form-label mb-2'>
                                empId:</label>
                            <input type='text' name="empId" placeholder="Enter Your Id" value={formData.empId} onChange={handleOnChange} className="p-1 form-control" />
                            <div className="text-red-700">{errForm.empId}</div>
                        </div>
                        <div>
                            <label htmlFor="decription" className='font-Poppins form-label'>
                                Description:</label>
                            <textarea name="decription" rows='2' cols='62' value={formData.decription} className='font-Poppins form-label border-2' onChange={handleOnChange}></textarea>
                            <div className="text-red-700">{errForm.decription}</div>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="leavefrom" className='font-Poppins form-label mb-2'>
                                Leave From</label>
                            <input type='date' name="leavefrom" placeholder="Enter Off Time" value={formData.leavefrom} onChange={handleOnChange} className="p-1 form-control" />
                            <div className="text-red-700">{errForm.leavefrom}</div>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="leaveto" className='font-Poppins form-label mb-2'>
                                Leave To</label>
                            <input type='date' name="leaveto" placeholder="Enter Hours" value={formData.leaveto} onChange={handleOnChange} className="p-1 form-control" />
                            <div className="text-red-700">{errForm.leaveto}</div>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="returndate" className='font-Poppins form-label mb-2'>
                                Return Date</label>
                            <input type='date' name="returndate" placeholder="Enter Hours" value={formData.returndate} onChange={handleOnChange} className="p-1 form-control" />
                            <div className="text-red-700">{errForm.returndate}</div>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="status" className='font-Poppins form-label mb-1'> Employee Status:</label>
                            <select className='font-Poppins form-select' value={formData.leaveStatus} onChange={handleOnChange} name="leaveStatus">
                                <option selected>Choose...</option>
                                <option value="active">Active</option>
                                <option value="deactive">Deactive</option>
                            </select>
                            <div className="text-red-700">{errForm.leaveStatus}</div>
                        </div>
                        <div className="text-end">
                            <input type="submit" value="Submit" className='font-Poppins btn btn-success bg-slate-700' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LeaveAdd