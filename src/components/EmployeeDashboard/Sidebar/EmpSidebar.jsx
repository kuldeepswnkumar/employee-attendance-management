import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faDashboard, faClipboard, faCalendarDay, } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import workday from '../img/Workday-Symbol.png'

function EmpSidebar() {
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
                        MY ATTENDANCES
                    </NavLink></li>
                    <li className='my-6 font-Poppins hover:underline'><FontAwesomeIcon icon={faClipboard} className='mx-4' /><NavLink
                        to="/attendance"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        MY SCHEDULES
                    </NavLink></li>
                    <li className='my-6 font-Poppins hover:underline'><FontAwesomeIcon icon={faCalendarDay} className='mx-4' /><NavLink
                        to="/schedules"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        MY LEAVE
                    </NavLink></li>

                </ul>
            </div>
        </div >

    )
}

export default EmpSidebar