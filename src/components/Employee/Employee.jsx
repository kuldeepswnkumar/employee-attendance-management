import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { faAddressCard, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonReturn from '../Button/Button'
import Axios from '../../Axios'
import toast from 'react-hot-toast'
import ReactPaginate from 'react-paginate';



function Employee() {
    // const [pageData, setPageData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [edata, setData] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:8000/api/user/viewdata')
            .then((response) => {
                // console.log("resp data", res.data.data);
                toast.success(response.data.message)
                setFilterData(response.data.data)
                setData(response.data.data)
            }).catch((err) => console.log(err))
        // setLoading(false);
    }, [])





    const handlerfilter = (value) => {
        const res = filterData.filter(f =>
            f.fname.toLowerCase().includes(value) ||
            f.company.toLowerCase().includes(value)
        )
        console.log(res);
        setData(res)
    }

    // const handlePageClick = async (data) => {
    //     console.log();
    //     let currentPage = data.selected + 1
    //     let paginateData = fetchData(currentPage)
    //     setPageData(paginateData)
    // }

    return (
        <div>
            <h1 className='border-2 border-gray-500 rounded m-3 p-2 inline-block font-Poppins uppercase'>Employees</h1>
            <div className="flex float-end m-4">
                <ButtonReturn />
                <Link to="/addemployee">
                    <input type="button" value="Add Employee" className='font-Poppins btn btn-success bg-slate-700' />
                </Link>
            </div>
            <div className="input-group flex  justify-end ">
                <div className="form-outline flex mr-5" data-mdb-input-init>
                    <label className="form-label mr-2 text-lg" htmlFor="form1">Search</label>
                    <input type="search" onChange={(e) => handlerfilter(e.target.value)} className="form-control w-60" placeholder='Search here' />
                </div>
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
            <ReactPaginate
                previousLabel={`Previous`}
                nextLabel={' Next'}
                breakLabel={'....'}
                pageCount={10}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                // onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-end mr-3'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            />
        </div >

    )
}

export default Employee