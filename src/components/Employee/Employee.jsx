import React from 'react'
import { Link } from 'react-router-dom'
import { faAddressCard, faPenToSquare, faTrash, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonReturn from '../Button/Button'

function Employee() {
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
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Employee</th>
                            <th scope="col">Email</th>
                            <th scope="col">Company</th>
                            <th scope="col">Department</th>
                            <th scope="col">Position</th>
                            <th scope="col">Status</th>
                            <th scope="col">Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>mark@gmail.com</td>
                            <td>Google</td>
                            <td>Management</td>
                            <td>CEO</td>
                            <td>Active</td>
                            <td>
                                <FontAwesomeIcon icon={faAddressCard} className='text-xl' /><input type="button" value="" className='m-1 ' />
                                <FontAwesomeIcon icon={faFilePdf} className='text-xl' /><input type="button" value="" className='m-1' />
                                <FontAwesomeIcon icon={faPenToSquare} className='text-xl' /><input type="button" value="" className='m-1' />
                                <FontAwesomeIcon icon={faTrash} className='text-xl' /><input type="button" value="" className='m-1' />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td>mark@gmail.com</td>
                            <td>Google</td>
                            <td>Management</td>
                            <td>CEO</td>
                            <td>Active</td>
                            <td>
                                <FontAwesomeIcon icon={faAddressCard} className='text-xl' /><input type="button" value="" className='m-1 ' />
                                <FontAwesomeIcon icon={faFilePdf} className='text-xl' /><input type="button" value="" className='m-1' />
                                <FontAwesomeIcon icon={faPenToSquare} className='text-xl' /><input type="button" value="" className='m-1' />
                                <FontAwesomeIcon icon={faTrash} className='text-xl' /><input type="button" value="" className='m-1' />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Mark</td>
                            <td>mark@gmail.com</td>
                            <td>Google</td>
                            <td>Management</td>
                            <td>CEO</td>
                            <td>Active</td>
                            <td>
                                <FontAwesomeIcon icon={faAddressCard} className='text-xl' /><input type="button" value="" className='m-1 ' />
                                <FontAwesomeIcon icon={faFilePdf} className='text-xl' /><input type="button" value="" className='m-1' />
                                <FontAwesomeIcon icon={faPenToSquare} className='text-xl' /><input type="button" value="" className='m-1' />
                                <FontAwesomeIcon icon={faTrash} className='text-xl' /><input type="button" value="" className='m-1' />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Mark</td>
                            <td>mark@gmail.com</td>
                            <td>Google</td>
                            <td>Management</td>
                            <td>CEO</td>
                            <td>Active</td>
                            <td>
                                <FontAwesomeIcon icon={faAddressCard} className='text-xl' /><input type="button" value="" className='m-1 ' />
                                <FontAwesomeIcon icon={faFilePdf} className='text-xl' /><input type="button" value="" className='m-1' />
                                <FontAwesomeIcon icon={faPenToSquare} className='text-xl' /><input type="button" value="" className='m-1' />
                                <FontAwesomeIcon icon={faTrash} className='text-xl' /><input type="button" value="" className='m-1' />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Employee