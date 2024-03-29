import React from 'react'
import { faPenToSquare, faTrash, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonReturn from '../Button/Button'
import { Link } from 'react-router-dom'
const Schedules = () => {
    return (
        <div>
            <div>
                <h1 className='border-2 border-gray-500 rounded m-2 p-2 inline-block font-Poppins uppercase'>schedule</h1>
                <div className="flex float-end m-4">
                    <ButtonReturn />
                    <Link to="/scheduleadd">
                        <input type="button" value="Add Schedule" className='font-Poppins btn btn-success bg-slate-700' />
                    </Link>

                </div>
                <div className="emplist p-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Employee</th>
                                <th scope="col">Time (Start-end)</th>
                                <th scope="col">Hours</th>
                                <th scope="col">Rest Days</th>
                                <th scope="col">From (Date)</th>
                                <th scope="col">To (Date)</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>09:00 AM - 04:00 PM</td>
                                <td>8 Hrs</td>
                                <td>Saturday-Sunday</td>
                                <td>Wed, Jan 01,2024</td>
                                <td>Sat, Jan 03,2024</td>
                                <td>Active</td>
                                <td>
                                    <FontAwesomeIcon icon={faFilePdf} className='text-xl' /><input type="button" value="" className='m-1' />
                                    <FontAwesomeIcon icon={faPenToSquare} className='text-xl' /><input type="button" value="" className='m-1' />
                                    <FontAwesomeIcon icon={faTrash} className='text-xl' /><input type="button" value="" className='m-1' />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Mark</td>
                                <td>09:00 AM - 04:00 PM</td>
                                <td>8 Hrs</td>
                                <td>Saturday-Sunday</td>
                                <td>Wed, Jan 01,2024</td>
                                <td>Sat, Jan 03,2024</td>
                                <td>Active</td>
                                <td>
                                    <FontAwesomeIcon icon={faFilePdf} className='text-xl' /><input type="button" value="" className='m-1' />
                                    <FontAwesomeIcon icon={faPenToSquare} className='text-xl' /><input type="button" value="" className='m-1' />
                                    <FontAwesomeIcon icon={faTrash} className='text-xl' /><input type="button" value="" className='m-1' />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Mark</td>
                                <td>09:00 AM - 04:00 PM</td>
                                <td>8 Hrs</td>
                                <td>Saturday-Sunday</td>
                                <td>Wed, Jan 01,2024</td>
                                <td>Sat, Jan 03,2024</td>
                                <td>Active</td>
                                <td>
                                    <FontAwesomeIcon icon={faFilePdf} className='text-xl' /><input type="button" value="" className='m-1' />
                                    <FontAwesomeIcon icon={faPenToSquare} className='text-xl' /><input type="button" value="" className='m-1' />
                                    <FontAwesomeIcon icon={faTrash} className='text-xl' /><input type="button" value="" className='m-1' />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Mark</td>
                                <td>09:00 AM - 04:00 PM</td>
                                <td>8 Hrs</td>
                                <td>Saturday-Sunday</td>
                                <td>Wed, Jan 01,2024</td>
                                <td>Sat, Jan 03,2024</td>
                                <td>Active</td>
                                <td>
                                    <FontAwesomeIcon icon={faFilePdf} className='text-xl' /><input type="button" value="" className='m-1' />
                                    <FontAwesomeIcon icon={faPenToSquare} className='text-xl' /><input type="button" value="" className='m-1' />
                                    <FontAwesomeIcon icon={faTrash} className='text-xl' /><input type="button" value="" className='m-1' />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div >
        </div>
    )
}

export default Schedules