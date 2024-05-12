import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, } from '@fortawesome/free-solid-svg-icons'
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link, useNavigate } from 'react-router-dom'
import Axios from '../../../../Axios'
import toast from 'react-hot-toast';

function EmpNavber() {

    const navigate = useNavigate()

    const logoutEmp = () => {
        Axios.get('http://localhost:8000/api/user/logoutemployee')
            .then((response) => {
                console.log(response);
                localStorage.clear(user)
                toast.success(response.data.data)
                setTimeout(() => {
                    navigate("/Emplogin");
                }, 1000)
            }).catch((error) => {
                console.log(error);
            })
    }
    const user = localStorage.getItem('Name')
    return (
        <div>
            <div className="w-full h-16 bg-[#145564] text-white p-2 border-neutral-600 border-2 flex justify-between">
                <div className="menu left-part">
                    <h5 className='border-2 inline-block p-1 rounded-lg font-Poppins'><FontAwesomeIcon icon={faBars} className='mx-1 mt-1 ' />Menu</h5>
                </div>
                <div className="right-part p-1.5 mx-3 flex flex-end">

                    {/* QUick Access */}
                    <div className="group top-5 mx-3">
                        <NavDropdown title='Quick Access' id="" className='nav-drop-down'>
                            <NavDropdown.Item className='mt-2'><Link to="/clock">Clock In/Out</Link></NavDropdown.Item>
                            <NavDropdown.Item className='mt-2'><Link to="/employeeview">My Profile</Link></NavDropdown.Item>
                        </NavDropdown>
                    </div>

                    {/* User */}
                    <NavDropdown title={user} id="" className='nav-drop-down'>
                        <NavDropdown.Item className='mt-2'><Link to="/changepass">Change Password</Link></NavDropdown.Item>
                        <NavDropdown.Item onClick={logoutEmp} >Logout</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </div >
        </div>
    )
}

export default EmpNavber