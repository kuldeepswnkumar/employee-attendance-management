import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Axios from '../../Axios'
import toast from 'react-hot-toast'

function UpdateLeave() {
    const { id } = useParams()

    const navigate = useNavigate()
    const [formData, setformData] = useState([])

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/user/updateleave/${id}`)
            .then((response) => {
                // console.log('response.data.data', response.data.data);
                setformData(response.data.data)
                // toast.success(response.data.message)
            }).catch((err) => {
                console.log(err);
            })
    }, [])


    const handleOnChange = (e) => {
        setformData(() => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }



    const handleUpdate = (e) => {
        e.preventDefault()
        Axios.put(`http://localhost:8000/api/user/updateleave/${id}`, formData)
            .then((response) => {
                console.log(response);
                // navigate('/leaves')
                toast.success(response.data.message)
                setTimeout(() => {
                    navigate("/leaves")
                }, 1000)
            }).catch((error) => {
                console.log(error);
            })
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
                <div className="p-2 border-2 mt-2">
                    <div className=" bg-white p-3 mx-4 rounded h-auto">
                        <form className="font-Poppins" onSubmit={handleUpdate}>
                            <div className="mb-2 ">
                                <label htmlFor="empId" className='font-Poppins form-label mb-2'>
                                    empId:</label>
                                <input type='text' name="empId" placeholder="Enter Your Id" value={formData.empId} onChange={handleOnChange} className="p-1 form-control" />

                            </div>
                            <div>
                                <label htmlFor="decription" className='font-Poppins form-label'>
                                    Description:</label>
                                <textarea name="decription" rows='2' cols='62' value={formData.decription} onChange={handleOnChange} className='font-Poppins form-label border-2' ></textarea>

                            </div>
                            <div className="mb-2">
                                <label htmlFor="leavefrom" className='font-Poppins form-label mb-2'>
                                    Leave From</label>
                                <input type='date' name="leavefrom" placeholder="Enter Off Time" onChange={handleOnChange} value={formData.leavefrom} className="p-1 form-control" />

                            </div>
                            <div className="mb-2">
                                <label htmlFor="leaveto" className='font-Poppins form-label mb-2'>
                                    Leave To</label>
                                <input type='date' name="leaveto" placeholder="Enter Hours" value={formData.leaveto} onChange={handleOnChange} className="p-1 form-control" />

                            </div>
                            <div className="mb-2">
                                <label htmlFor="returndate" className='font-Poppins form-label mb-2'>
                                    Return Date</label>
                                <input type='date' name="returndate" placeholder="Enter Hours" value={formData.returndate} onChange={handleOnChange} className="p-1 form-control" />

                            </div>
                            <div className="mb-2">
                                <label htmlFor="status" className='font-Poppins form-label mb-1'> Leave Status:</label>
                                <select className='font-Poppins form-select' value={formData.leaveStatus} onChange={handleOnChange} name="leaveStatus">
                                    <option selected>Choose...</option>
                                    <option value="Approve">Approve</option>
                                    <option value="Pending">Pending</option>
                                </select>

                            </div>
                            <div className="text-end">
                                <input type="submit" value="Submit" className='font-Poppins btn btn-success bg-slate-700' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateLeave