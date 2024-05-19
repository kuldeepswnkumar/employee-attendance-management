import React, { useEffect, useState } from 'react'
import Axios from '../../Axios';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

function GetDepartmentData() {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        Axios.get('http://localhost:8000/api/user/getdepartmentdata')
            .then((response) => {
                // console.log(response.data);
                setData(response.data.data)
                toast.success(response.data.message)
                navigate('/getdepartmentdata')
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    const handlerfilter = (value) => {
        const res = data.filter(f => f.deptName.toLowerCase().includes(value))
        setData(res)
    }

    return (
        <div>
            <div className='p-5'>
                <h1 className='border-2 border-gray-500 rounded mb-3 p-2 inline-block font-Poppins uppercase'>DEPARTMENT</h1>
                <div className="input-group flex  justify-end mb-3">
                    <div className="form-outline flex mr-2" data-mdb-input-init>
                        <label className="form-label mr-2 text-lg" htmlFor="form1">Search</label>
                        <input type="search" onChange={(e) => handlerfilter(e.target.value)} className="form-control w-60" placeholder='Search here' />
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className='text-center'>Department Id</th>
                            <th scope="col" className='text-center'>Department Name </th>
                            <th scope="col" className='text-center'>Job Role</th>
                            <th scope="col" className='text-center'>Department Email</th>
                            <th scope="col" className='text-center'>Department Status </th>
                            <th scope="col" className='text-center'>Operation </th>
                        </tr>
                    </thead>
                    {
                        data?.map((curr, i) => {
                            return (
                                <tbody key={i}>
                                    <tr>
                                        <th scope="row" className='text-center'>{curr.departId}</th>
                                        <td className='text-center'>{curr.deptName}</td>
                                        <td className='text-center'>{curr.jobRole}</td>
                                        <td className='text-center'>{curr.deprtEmail}</td>
                                        <td className='text-center'>{curr.deprtStatus}</td>
                                        <td className='text-center'>
                                            <Link to={'/deletedepartment/' + curr._id}>
                                                <FontAwesomeIcon icon={faTrash} className='text-xl' /><input type="button" value="" className='m-1' />
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }

                </table>
            </div>
        </div>
    )
}

export default GetDepartmentData