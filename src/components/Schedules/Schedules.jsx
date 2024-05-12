import React, { useEffect, useState } from 'react'
import { faPenToSquare, faTrash, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Axios from '../../Axios'
import toast from 'react-hot-toast'
const Schedules = () => {

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
            <div>
                <h1 className='border-2 border-gray-500 rounded m-2 p-2 inline-block font-Poppins uppercase'>Schedule</h1>

                <div className="text-end mr-4">
                    <Link to="/dashboard">
                        <Link to="/clock"><FontAwesomeIcon icon={faArrowLeft} /> <input type="button" value="Return" className='font-Poppins btn btn-success bg-slate-700' /> </Link>
                    </Link>
                    <Link to="/scheduleadd">
                        <input type="button" value="Schedule Employee" className='font-Poppins btn btn-success bg-slate-700' />
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
                                            <td>
                                                {/* <FontAwesomeIcon icon={faFilePdf} className='text-xl' /><input type="button" value="" className='m-1' /> */}
                                                <Link to={`/scheduleupdate/` + curr._id} >
                                                    <FontAwesomeIcon icon={faPenToSquare} className='text-xl' /><input type="button" value="" className='m-1' />
                                                </Link>

                                                <Link to={`/deleteschedule/` + curr._id}>
                                                    <FontAwesomeIcon icon={faTrash} className='text-xl' /><input type="button" value="" className='m-1' />
                                                </Link>

                                            </td>
                                        </tr>
                                    )
                                })
                            }




                        </tbody>
                    </table>
                </div>
            </div >
        </div>
    )
}

export default Schedules