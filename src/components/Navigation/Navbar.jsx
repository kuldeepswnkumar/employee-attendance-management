import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFlag, faRing, faUser } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className="w-full bg-[#910A67] text-white p-2 border-neutral-600 border-2 flex justify-between">
            <div className="menu left-part">
                <h5 className='border-2 inline-block p-1 rounded-lg font-Poppins'><FontAwesomeIcon icon={faBars} className='mx-1 mt-1 ' />Menu</h5>
            </div>
            <div className="right-part p-1.5 mx-3 flex flex-end">

                {/* Language */}
                <div className="group top-5 mx-1">

                    <button className="rounded inline-flex items-center group font-Poppins">
                        <span className="m-1"><FontAwesomeIcon icon={faFlag} className='mx-1 mt-1 ' />Language</span>
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
                            India
                        </li>
                        <li className="bg-gray-200 hover:bg-gray-400 py-3 px-4 cursor-pointer">
                            America
                        </li>
                        <li className="bg-gray-200 hover:bg-gray-400 py-3 px-4 cursor-pointer">
                            Russia
                        </li>
                    </ul>
                </div>

                {/* QUick Access */}
                <div className="group top-5 mx-3">

                    <button className="rounded inline-flex items-center group font-Poppins">
                        <span className="m-1"><FontAwesomeIcon icon={faRing} className='mx-1 mt-1 ' />Quick Access</span>
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
                            <Link to="/company">Company</Link>
                        </li>
                        <li className="bg-gray-200 hover:bg-gray-400 py-3 px-4 cursor-pointer">
                            <Link to="/department">Department</Link>
                        </li>
                        <li className="bg-gray-200 hover:bg-gray-400 py-3 px-4 cursor-pointer">
                            <Link to="/jobtitle">Job Title</Link>
                        </li>
                    </ul>
                </div>

                {/* User */}
                <div className="group top-7">
                    <button className="rounded inline-flex items-center group font-Poppins">
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
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Navbar