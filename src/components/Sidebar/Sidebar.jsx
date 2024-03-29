import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faDashboard, faClipboard, faCalendarDay, } from '@fortawesome/free-solid-svg-icons'
import { faHouseMedical, faReceipt, faUser, faGear } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import workday from '../img/Workday-Symbol.png'
import './style.css'


function SideBar() {
    return (
        <div className="w-1/5 h-auto bg-[#910A67] text-white p-4 border-neutral-600 border-2">
            <div className="logo">
                <img className='w-36 mx-auto' src={workday} alt="workday" />
                <div className='border-b-2 bg-cyan-300 my-3'></div>
            </div>

            <div className="side-bar">
                <ul>
                    <li className='my-6 font-Poppins hover:underline'><FontAwesomeIcon icon={faDashboard} className='mx-4' /><NavLink
                        to="/dashboard"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        DASHBOARD
                    </NavLink></li>
                    <li className='my-6 font-Poppins hover:underline'><FontAwesomeIcon icon={faUserFriends} className='mx-4' /><NavLink
                        to="/employes"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        EMPLOYEE
                    </NavLink></li>
                    <li className='my-6 font-Poppins hover:underline'><FontAwesomeIcon icon={faClipboard} className='mx-4' /><NavLink
                        to="/attendance"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        ATTENDANCE
                    </NavLink></li>
                    <li className='my-6 font-Poppins hover:underline'><FontAwesomeIcon icon={faCalendarDay} className='mx-4' /><NavLink
                        to="/schedules"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        SCHEDULES
                    </NavLink></li>
                    <li className='my-6 font-Poppins hover:underline'><FontAwesomeIcon icon={faHouseMedical} className='mx-4' /><NavLink
                        to="/leaves"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        LEAVES
                    </NavLink></li>
                    <li className='my-6 font-Poppins hover:underline'><FontAwesomeIcon icon={faReceipt} className='mx-4' /><NavLink
                        to="/reports"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        REPORTS
                    </NavLink></li>
                    <li className='my-6 font-Poppins hover:underline'><FontAwesomeIcon icon={faUser} className='mx-4' /><NavLink
                        to="/users"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        USERS
                    </NavLink></li>
                    <li className='my-6 font-Poppins hover:underline'><FontAwesomeIcon icon={faGear} className='mx-4' /><NavLink
                        to="/SETTING"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        SETTING
                    </NavLink></li>
                </ul>
            </div>
        </div >
    )
}

export default SideBar