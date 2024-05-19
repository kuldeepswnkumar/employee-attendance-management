import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { faPenToSquare, faTrash, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonReturn from '../Button/Button'
import Axios from '../../Axios'
import toast from 'react-hot-toast'

const Attendance = () => {

    const [filterData, setFilterData] = useState([])
    const [adData, setAdData] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:8000/api/user/attenedempview')
            .then((response) => {
                console.log(response.data.data);
                setAdData(response.data.data)
                setFilterData(response.data.data)
                toast.success(response.data.message)
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    const handlerfilter = (value) => {
        const res = filterData.filter(f => f.EmployeeName.toLowerCase().includes(value))
        setAdData(res)
    }

    return (
        <div>
            <h1 className='border-2 border-gray-500 rounded m-2 p-2 inline-block font-Poppins uppercase'>Attendance</h1>
            <div className='flex flex-col'>
                <ButtonReturn />
                <div className="input-group flex justify-end mt-2">
                    <div className="form-outline flex mr-5" data-mdb-input-init>
                        <label className="form-label mr-2 text-lg" htmlFor="form1">Search</label>
                        <input type="search" onChange={(e) => handlerfilter(e.target.value)} className="form-control w-60" placeholder='Search here' />
                    </div>
                </div>
                <div className="emplist p-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">InputOutTime</th>
                                <th scope="col">Employee</th>
                                <th scope="col">Time In</th>
                                <th scope="col">Time Out</th>
                                <th scope="col">TotalTime</th>
                                <th scope="col">Status (In/Out)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                adData.map((curr, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{curr.fullDate}</td>
                                            <th scope="row">{curr.inoutTime}</th>
                                            <td>{curr.EmployeeName}</td>
                                            <td>{curr.TimeIn}</td>
                                            <td>{curr.TimeOut}</td>
                                            <td>{curr.totalTime}</td>
                                            <td>{curr.myStatus}</td>
                                            <td>
                                                <FontAwesomeIcon icon={faPenToSquare} className='text-xl' /><input type="button" value="" className='m-1' />
                                                <Link to={'/deleteattendance/' + curr._id}>
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

export default Attendance