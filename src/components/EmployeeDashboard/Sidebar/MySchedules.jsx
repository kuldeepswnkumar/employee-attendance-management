import { faArrowLeft, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from '../../../Axios'
import toast from 'react-hot-toast'

function MySchedules() {
    const [data, setData] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:8000/api/user/getscheduledata')
            .then((response) => {
                setData(response.data.data)
                // console.log("response.data", response.data.data);
                toast.success(response.data.message)
            }).catch((error) => {
                console.log(error);
            })
    }, [])
    return (
        <div>
            <h1 className='border-2 border-gray-500 rounded m-2 p-2 inline-block font-Poppins uppercase'>Schedule</h1>

            <div className="text-end mr-4">
                <Link to="/dashboard">
                    <Link to="/clock"><FontAwesomeIcon icon={faArrowLeft} /> <input type="button" value="Return" className='font-Poppins btn btn-success bg-slate-700' /> </Link>
                </Link>
            </div>
            <div className="emplist p-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Employee</th>
                            <th scope="col">StartTime</th>
                            <th scope="col">EndTime</th>
                            <th scope="col">Hours</th>
                            <th scope="col">Rest Days</th>
                            <th scope="col">From (Date)</th>
                            <th scope="col">To (Date)</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((curr, i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">{curr.empId}</th>
                                        <td>{curr.empName}</td>
                                        <td>{curr.strTime}</td>
                                        <td>{curr.etime}</td>
                                        <td>{curr.hours}</td>
                                        <td>{curr.rdays}</td>
                                        <td>{curr.fdate}</td>
                                        <td>{curr.tdate}</td>
                                        <td>{curr.empStatus}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default MySchedules