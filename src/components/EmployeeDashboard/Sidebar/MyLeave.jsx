import React, { useEffect, useState } from 'react'
import Axios from '../../../Axios';
import toast from 'react-hot-toast';
import ButtonReturn from '../../Button/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function MyLeave() {

    const [data, setData] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:8000/api/user/getleavedata')
            .then((response) => {
                console.log(response.data.data);
                setData(response.data.data)
                toast.success(response.data.message)
            }).catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            <div>
                <h1 className='border-2 border-gray-500 rounded m-2 p-2 inline-block font-Poppins uppercase'>Leave of Absence</h1>
                <div className="flex float-end m-4">
                    <ButtonReturn />
                    <Link to="/empdashboard/addleave">
                        <input type="button" value="Apply Leave" className='font-Poppins btn btn-success bg-slate-700' />
                    </Link>

                </div>
                <div className="leavelist p-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Employee</th>
                                <th scope="col">Description</th>
                                <th scope="col">Leave From</th>
                                <th scope="col">Leave To</th>
                                <th scope="col">Return Date</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((curr, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{curr.empId}</td>
                                            <td>{curr.empName}</td>
                                            <td>{curr.decription}</td>
                                            <td>{curr.leavefrom}</td>
                                            <td>{curr.leaveto}</td>
                                            <td>{curr.returndate}</td>
                                            <td>{curr.leaveStatus}</td>
                                            <td>
                                                <Link to={'/deleteleave/' + curr._id} >
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

export default MyLeave