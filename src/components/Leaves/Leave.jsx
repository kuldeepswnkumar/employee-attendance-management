import React from 'react'
import { faPenToSquare, faTrash, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonReturn from '../Button/Button'
import { Link } from 'react-router-dom'

const Leaves = () => {
    return (
        <div>
            <div>
                <div>
                    <h1 className='border-2 border-gray-500 rounded m-2 p-2 inline-block font-Poppins uppercase'>Leave of Absence</h1>
                    <div className="flex float-end m-4">
                        <ButtonReturn />
                        <Link to="/addleave">
                            <input type="button" value="Apply Leave" className='font-Poppins btn btn-success bg-slate-700' />
                        </Link>

                    </div>
                    <div className="emplist p-3">
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

                        </table>
                    </div>
                </div >
            </div>
        </div>
    )
}

export default Leaves