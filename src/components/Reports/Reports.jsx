import React from 'react'

const Reports = () => {
    return (
        <div>
            <h1 className='border-2 border-gray-500 rounded m-3 p-2 inline-block font-Poppins uppercase'>Reports</h1>
            <div className="container">
                <ul className="flex">
                    <div className="w-3/4 mr-2">
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
                    </div>

                </ul>
            </div>
        </div>
    )
}

export default Reports