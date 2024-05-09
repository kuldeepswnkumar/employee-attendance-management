import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Axios from '../../Axios'
import { useParams, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

function ScheduleUpdate() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        empId: '',
        empName: '',
        strTime: '',
        etime: '',
        hours: '',
        rdays: '',
        fdate: '',
        tdate: '',
        empStatus: ''
    })

    const handleOnChange = (e) => {
        setFormData(() => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/user/updatescheduledata/${id}`)
            .then((response) => {
                setFormData(response.data.data)
                // console.log(response.data.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [])



    const handleUpdate = (e) => {
        e.preventDefault()
        Axios.put(`http://localhost:8000/api/user/updatescheduledata/${id}`, formData)
            .then((response) => {
                console.log(response);
                toast.success(response.data.message)
                setLoading(true)
                setTimeout(() => {
                    setTimeout(() => {
                        setLoading(false)
                    }, 1000)
                    navigate("/schedules")
                }, 2000)
            }).catch((error) => {
                console.log(error);
            })
    }



    return (

        < div >
            <h1 className='text-center font-Poppins font-bold text-2xl p-2 border-gray-950 bg-green-500'>Schedule Employee</h1>
            <div className="w-[80%] m-auto">
                <h1 className='border-2 border-gray-500 rounded m-2 p-2 inline-block font-Poppins'>Add Schedule</h1>
                <div className="text-end mr-4">
                    <Link to="/dashboard">
                        <FontAwesomeIcon icon={faArrowLeft} /> <input type="button" value="Return" className='font-Poppins btn btn-success bg-slate-700' />
                    </Link>
                </div>
                {
                    loading ? <ClimbingBoxLoader
                        color={'#d64036'}
                        loading={loading}
                        size={30}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        className='mt-60 ml-[500px]'
                    /> :

                        <div className="p-3 border-2 mt-2">
                            <div className=" bg-white p-3 mx-4 rounded h-auto">
                                <form className="font-Poppins" onSubmit={handleUpdate}>
                                    <div className="mb-3 row">
                                        <div className='col'>
                                            <label htmlFor="empId" className='mb-1 font-Poppins'> ID</label>
                                            <input type="text" name='empId' value={formData.empId} onChange={handleOnChange} placeholder='Type your Employee Id' className='font-Poppins form-control' />
                                            <div className="text-red-700"></div>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="empName" className='font-Poppins form-label mb-2'>
                                                Employee Name</label>
                                            <input type='text' name="empName" value={formData.empName} placeholder="Enter Off Time" onChange={handleOnChange} className="p-1 form-control" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <div className="col">
                                            <label htmlFor="strTime" className='font-Poppins form-label mb-2'>
                                                Start Time:</label>
                                            <input type='text' name="strTime" value={formData.strTime} placeholder="Enter Start Time" onChange={handleOnChange} className="p-1 form-control" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="etime" className='font-Poppins form-label mb-2'>
                                                End Time:</label>
                                            <input type='text' name="etime" value={formData.etime} placeholder="Enter Off Time" onChange={handleOnChange} className="p-1 form-control" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <div className="col">
                                            <label htmlFor="hours" className='font-Poppins form-label mb-2'>
                                                Hours:</label>
                                            <input type='text' name="hours" value={formData.hours} placeholder="Enter Hours" onChange={handleOnChange} className="p-1 form-control" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="rdays" className='font-Poppins form-label mb-2'>
                                                Rest Days:</label>
                                            <input type='text' name="rdays" value={formData.rdays} placeholder="Enter Rest Days" onChange={handleOnChange} className="p-1 form-control" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <div className="col">
                                            <label htmlFor="fdate" className='font-Poppins form-label mb-2'>
                                                From (Date):</label>
                                            <input type='date' name="fdate" value={formData.fdate} onChange={handleOnChange} className="p-1 form-control" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="tdate" className='font-Poppins form-label mb-2'>
                                                To (Date):</label>
                                            <input type='date' name="tdate" value={formData.tdate} onChange={handleOnChange} className="p-1 form-control" />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="status" className='font-Poppins form-label mb-1'> Employee Status:</label>
                                        <select className='font-Poppins form-select' value={formData.empStatus} onChange={handleOnChange} name="empStatus">
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
                }
            </div>
        </div >
    )
}

export default ScheduleUpdate