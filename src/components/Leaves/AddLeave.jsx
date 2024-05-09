import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faRandom } from '@fortawesome/free-solid-svg-icons'
import Axios from '../../Axios'

function AddLeave() {

    const [errForm, setErrForm] = useState({})
    const [formData, setFormData] = useState({
        decription: '',
        leavefrom: '',
        leaveto: '',
        returndate: '',
        leaveStatus: ''
    })

    const validationForm = () => {
        const err = {}
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
        setFormData(() => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = () => {
        handleOnChange()
        validationForm()
    }


    return (

        <div>
            <div className="w-[80%] m-auto">
                <h1 className='border-2 border-gray-500 rounded m-2 p-2 inline-block font-Poppins'>Add Leave</h1>
                <div className="text-end mr-4">
                    <Link to="/dashboard">
                        <FontAwesomeIcon icon={faArrowLeft} /> <input type="button" value="Return" className='font-Poppins btn btn-success bg-slate-700' />
                    </Link>
                </div>
                <div className="p-3 border-2 mt-2">
                    <div className=" bg-white p-3 mx-4 rounded h-auto">
                        <form className="font-Poppins" onSubmit={handleSubmit}>
                            <div className="mb-3 ">
                                <label htmlFor="decription" className='font-Poppins form-label mb-2'>
                                    Description:</label>
                                <textarea name="decription" className='font-Poppins form-label mb-2' onChange={handleOnChange}></textarea>
                                <div className="text-red-700">{errForm.strTime}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="leavefrom" className='font-Poppins form-label mb-2'>
                                    Leave From</label>
                                <input type='text' name="leavefrom" placeholder="Enter Off Time" onChange={handleOnChange} className="p-1 form-control" />
                                <div className="text-red-700">{errForm.etime}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="leaveto" className='font-Poppins form-label mb-2'>
                                    Leave To</label>
                                <input type='text' name="leaveto" placeholder="Enter Hours" onChange={handleOnChange} className="p-1 form-control" />
                                <div className="text-red-700">{errForm.hours}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="returndate" className='font-Poppins form-label mb-2'>
                                    Return Date</label>
                                <input type='text' name="returndate" placeholder="Enter Hours" onChange={handleOnChange} className="p-1 form-control" />
                                <div className="text-red-700">{errForm.hours}</div>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="status" className='font-Poppins form-label mb-1'> Employee Status:</label>
                                <select className='font-Poppins form-select' onChange={handleOnChange} name="leaveStatus">
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

export default AddLeave