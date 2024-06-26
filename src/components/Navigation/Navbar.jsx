import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFlag, faRing, faUser } from '@fortawesome/free-solid-svg-icons'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Axios from '../../Axios';
// import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';




function Navbar() {

    const navigate = useNavigate()
    const handleLogout = async () => {
        const response = await Axios.get('http://localhost:8000/api/user/logout')
        // console.log("response", response)
        toast.success(response.data.data)
        localStorage.clear()
        setTimeout(() => {
            navigate("/clock");
        }, 1000)
    }
    const myname = localStorage.getItem("name")


    return (
        <div className="w-full bg-[#910A67] text-white p-2 border-neutral-600 border-2 flex justify-between">
            <div className="menu left-part">
                {/* <h5 className='border-2 inline-block p-1 rounded-lg font-Poppins'><FontAwesomeIcon icon={faBars} className='mx-1 mt-1 ' />Menu</h5> */}
            </div>
            <div className="right-part p-1.5 mx-3 flex flex-end">

                {/* Language */}
                {/* <div className="group top-5 mx-1">
                    <NavDropdown title="Language" id="dropdown-basic" className='nav-drop-down'>
                        <NavDropdown.Item className='mt-2'>English</NavDropdown.Item>
                        <NavDropdown.Item className='mt-2'>Hindi</NavDropdown.Item>
                        <NavDropdown.Item className='mt-2'>English</NavDropdown.Item>
                    </NavDropdown>
                </div> */}

                {/* QUick Access */}
                <div className="group top-7 mx-2 text-cyan-50">
                    <NavDropdown title="Quick Access" id="" className='nav-drop-down'>
                        <NavDropdown.Item className='mt-2'><Link to="/company">Company</Link></NavDropdown.Item>
                        <NavDropdown.Item className='mt-2'> <Link to="/department">Department</Link></NavDropdown.Item>
                        <NavDropdown.Item className='mt-2'> <Link to="/clock">Clock In/Out</Link></NavDropdown.Item>
                    </NavDropdown>

                </div>


                {/* User */}
                <div className="group top-7">
                    <NavDropdown title={myname} id="" className='nav-drop-down'>
                        <NavDropdown.Item className='mt-2'><Link to="/updateemployee">Update Account</Link></NavDropdown.Item>
                        <NavDropdown.Item className='mt-2'><Link to="/changepass">Change Password</Link></NavDropdown.Item>
                        <NavDropdown.Item onClick={handleLogout} >Logout</NavDropdown.Item>
                    </NavDropdown>


                    {/* <button className="rounded inline-flex items-center group font-Poppins">
                        <span className="m-1"><FontAwesomeIcon icon={faUser} className='mx-1 mt-1 ' />Users</span>
                        <svg
                            className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </button>

                    <ul className="rounded absolute hidden text-gray-700 pt-3 group-hover:block w-44 z-50">
                        <li className="bg-gray-200 hover:bg-gray-400 py-3 px-4 cursor-pointer">
                            <Link to="/updateaccount">Update Account</Link>
                        </li>
                        <li className="bg-gray-200 hover:bg-gray-400 py-3 px-4 cursor-pointer">
                            <Link to="/changepass">Change Password</Link>
                        </li>
                        <li className="bg-gray-200 hover:bg-gray-400 py-3 px-4 cursor-pointer">
                            <Link to="Logout">Logout</Link>
                        </li>
                    </ul> */}
                </div>
            </div>
        </div >
    )
}

export default Navbar