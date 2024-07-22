import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo2.png'

function Navigator() {
    return (
        <div>
            <div className="header w-full bg-[#fff] p-3 flex justify-between">
                <div className="logo ml-3">
                    <img src={logo} alt="" className='w-[55px]' />
                </div>
                <ul className='flex p-2'>
                    <Link to="/emplogin" className='border-2  border-blue-700 p-2 mr-2 rounded-lg font-Poppins hover:bg-blue-700 hover:text-white'><li>Employee Login</li></Link>
                    <Link to="/login" className='border-2 border-blue-700 p-2 rounded-lg font-Poppins hover:bg-blue-700 hover:text-white' > <li>Admin Login</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navigator