import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { faAddressCard, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonReturn from '../Button/Button'
import Axios from '../../Axios'



function Employee() {
    const [edata, setData] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:8000/api/user/viewdata')
            .then((res) => {
                // console.log("resp data", res.data.data);

                setData(res.data.data.filter((val) => val.fname != undefined))
                // console.log("resp edata", edata);
            }).catch((err) => console.log(err))
        // setLoading(false);
    }, [])
    // console.log("resp edata", edata);
    return (
        <div>
            <h1 className='border-2 border-gray-500 rounded m-3 p-2 inline-block font-Poppins uppercase'>Employees</h1>
            <div className="flex float-end m-4">
                <ButtonReturn />
                <Link to="/addemployee">
                    <input type="button" value="Add Employee" className='font-Poppins btn btn-success bg-slate-700' />
                </Link>

            </div>
            <div className="emplist p-3">
                <table className="table">
                    < thead >
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Company</th>
                            <th scope="col">Department</th>
                            <th scope="col">Position</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            edata.map((curr, i) => {
                                return (
                                    <tr key={i}>
                                        <td >{curr.empid}</td>
                                        <td>{curr.fname}</td>
                                        <td>{curr.lname}</td>
                                        <td>{curr.email}</td>
                                        <td>{curr.company}</td>
                                        <td>{curr.department}</td>
                                        <td>{curr.jobtitle}</td>
                                        <td>{curr.empStatus}</td>
                                        <td>
                                            <Link to={'/employeeview/' + curr._id}>
                                                <FontAwesomeIcon icon={faAddressCard} className='text-xl' /><input type="button" value="" className='m-1 ' />
                                            </Link>
                                            <Link to={'/updateemployee/' + curr._id}>
                                                <FontAwesomeIcon icon={faPenToSquare} className='text-xl' /><input type="button" value="" className='m-1' />
                                            </Link>
                                            <Link to={'/deleteemployee/' + curr._id}>
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

    )
}

export default Employee