import React from 'react'

function MyAttendance() {
    return (
        <div>
            <h1 className='border-2 border-gray-500 rounded m-2 p-2 inline-block font-Poppins uppercase'>Attendance</h1>
            <div className='flex flex-col'>
                <ButtonReturn />
                <div className="emplist p-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Time In</th>
                                <th scope="col">Time Out</th>
                                <th scope="col">Total Hours</th>
                                <th scope="col">Status (In/Out)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">26-03-2024</th>
                                <td>10:00 AM</td>
                                <td>04:00 PM</td>
                                <td>6 Hrs</td>
                                <td>Time (In/Out)</td>
                                <td>
                                    <FontAwesomeIcon icon={faPenToSquare} className='text-xl' /><input type="button" value="" className='m-1' />
                                    <FontAwesomeIcon icon={faTrash} className='text-xl' /><input type="button" value="" className='m-1' />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">26-03-2024</th>
                                <td>10:00 AM</td>
                                <td>04:00 PM</td>
                                <td>6 Hrs</td>
                                <td>Time (In/Out)</td>
                                <td>
                                    <FontAwesomeIcon icon={faPenToSquare} className='text-xl' /><input type="button" value="" className='m-1' />
                                    <FontAwesomeIcon icon={faTrash} className='text-xl' /><input type="button" value="" className='m-1' />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">26-03-2024</th>
                                <td>10:00 AM</td>
                                <td>04:00 PM</td>
                                <td>6 Hrs</td>
                                <td>Time (In/Out)</td>
                                <td>
                                    <FontAwesomeIcon icon={faPenToSquare} className='text-xl' /><input type="button" value="" className='m-1' />
                                    <FontAwesomeIcon icon={faTrash} className='text-xl' /><input type="button" value="" className='m-1' />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">26-03-2024</th>
                                <td>10:00 AM</td>
                                <td>04:00 PM</td>
                                <td>6 Hrs</td>
                                <td>Time (In/Out)</td>
                                <td>
                                    <FontAwesomeIcon icon={faPenToSquare} className='text-xl' /><input type="button" value="" className='m-1' />
                                    <FontAwesomeIcon icon={faTrash} className='text-xl' /><input type="button" value="" className='m-1' />
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div >
        </div>
    </div >
  )
}

export default MyAttendance