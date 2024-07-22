import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Axios from '../../Axios'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import { toast } from 'react-hot-toast'


function Companies() {

    const [searchData, setSearchData] = useState([])
    const [comData, setCompDAta] = useState([])
    // const [show, setShow] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/user/viewcompany')
            .then((response) => {
                // console.log(response.data);
                setCompDAta(response.data.data)
                setSearchData(response.data.data)
                toast.success(response.data.message)
            }).catch((err) => {
                console.log(err);
            })
    }, [])

    const handlerfilter = (value) => {
        const res = searchData.filter(f => f.compName.toLowerCase().includes(value))
        setCompDAta(res)
    }


    return (
        <div className='p-5'>
            <h1 className='border-2 border-gray-500 rounded mb-3 p-2 inline-block font-Poppins uppercase'>COMPANY</h1>
            <div className="input-group flex  justify-end mb-3">
                <div className="form-outline flex mr-5" data-mdb-input-init>
                    <label className="form-label mr-2 text-lg" htmlFor="form1">Search</label>
                    <input type="search" onChange={(e) => handlerfilter(e.target.value)} className="form-control w-60" placeholder='Search here' />
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className='text-center'>Company Id</th>
                        <th scope="col" className='text-center'>Company Name </th>
                        <th scope="col" className='text-center'>Founded Year</th>
                        <th scope="col" className='text-center'>Company Website</th>
                        <th scope="col" className='text-center'>Company Headquarters </th>
                        <th scope="col" className='text-center'>Operation </th>
                    </tr>
                </thead>
                {
                    comData?.map((curr, i) => {
                        return (
                            <tbody key={i}>
                                <tr>
                                    <th scope="row" className='text-center'>{curr.compId}</th>
                                    <td className='text-center'>{curr.compName}</td>
                                    <td className='text-center'>{curr.foundyear}</td>
                                    <td className='text-center'>{curr.compWebsite}</td>
                                    <td className='text-center'>{curr.compLocation}</td>
                                    <td className='text-center'>
                                        <Link to={'/deletecompany/' + curr._id}>
                                            <FontAwesomeIcon icon={faTrash} className='text-xl' /><input type="button" value="" className='m-1' />
                                        </Link>
                                        {/* <Button variant="primary"  className='text-black'>
                                            Delete
                                        </Button> */}

                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                }

            </table>
            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className='text-black' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" className='text-black' onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal> */}

        </div>

    )
}

export default Companies