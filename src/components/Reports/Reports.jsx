import React, { useEffect, useState } from 'react'
import Axios from '../../Axios.js'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Reports = () => {

    const [searchData, setSearchData] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:8000/api/user/getreportdata')
            .then((response) => {
                console.log(response.data.data);
                setData(response.data.data)
                setSearchData(response.data.data)
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    const handlerfilter = (value) => {
        const res = searchData.filter(f => f.empName.toLowerCase().includes(value))
        setData(res)
    }

    return (
        <div>
            <h1 className='border-2 border-gray-500 rounded m-3 p-2 inline-block font-Poppins uppercase'>Reports</h1>
            <div className="container">
                <div className="input-group flex  justify-end mb-3">
                    <div className="form-outline flex mr-5" data-mdb-input-init>
                        <label className="form-label mr-2 text-lg" htmlFor="form1">Search</label>
                        <input type="search" onChange={(e) => handlerfilter(e.target.value)} className="form-control w-60" placeholder='Search here' />
                    </div>
                </div>
                <ul className="flex">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">empId</th>
                                <th scope="col">Employee Name</th>
                                <th scope="col">Report Name</th>
                                <th scope="col">Report Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((curr, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{curr.empId}</td>
                                            <td>{curr.empName}</td>
                                            <td>{curr.reportbox}</td>
                                            <td>{curr.reportdate}</td>
                                            <td>
                                                <Link to={'/employeeview/' + curr._id}>
                                                    <FontAwesomeIcon icon={faTrash} className='text-xl' /><input type="button" value="" className='m-1 ' />
                                                </Link>

                                            </td>

                                        </tr>

                                    )
                                })
                            }

                        </tbody>
                    </table>
                    {/* <div className="w-3/4 mr-2">
                        <li className="list-group-item active" aria-current="true">Report Name</li>
                        <li className="list-group-item">Employee Attendance Report</li>
                        <li className="list-group-item">Employee Birthdays</li>
                        <li className="list-group-item">Employee Leave Report</li>
                    </div>
                    <div className="w-1/4">
                        <li className="list-group-item active" aria-current="true">Last Viewed</li>
                        <li className="list-group-item">March 05, 2024</li>
                        <li className="list-group-item">April 10, 2024</li>
                        <li className="list-group-item">June 20, 2024</li>
                    </div> */}

                </ul>
            </div>
        </div>
    )
}

export default Reports