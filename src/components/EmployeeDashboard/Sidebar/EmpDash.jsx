import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faClock, faHome } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

function EmpDash() {

    const navigate = useNavigate()

    const Toekn = localStorage.getItem('AccessToken');

    if (Toekn) {
        navigate('/empdashboard')
    } else {
        navigate('/clock')
    }
    return (
        <div>
            <h1 className='border-2 border-gray-500 rounded m-2 p-2 inline-block font-Poppins'>Dashboard</h1>
            <div id="container" className='flex '>
                <div id="employee" className='w-[30%] h-28 bg-red-600 m-3 relative' >
                    <FontAwesomeIcon icon={faCircleUser} className='p-3 absolute text-zinc-200 fa-5x' />
                    <div className="right-part ml-24">
                        <h2 className='p-2 text-zinc-100 font-weight: 500 font-Poppins'>ATTENDANCE(Curr Month)</h2>
                        <div className='border-b-2 bg-cyan-300 m-1'></div>
                        <p id='para1' className='font-Poppins text-[15px] text-zinc-100 ml-3'>Late Arrivals<span className='ml-36'>4</span></p>
                        <p id='para2' className='font-Poppins text-[15px] text-zinc-100 ml-3'>Early Departure <span className='ml-28'>1</span></p>
                    </div>
                </div>
                <div id="attendance" className='w-[30%] h-28 bg-yellow-600 m-3'>
                    <FontAwesomeIcon icon={faClock} className='p-3 absolute text-zinc-200 fa-5x' />
                    <div className="right-part ml-24">
                        <h2 className='p-2 text-zinc-100 font-weight: 500 font-Poppins'>PRESENT SCHEDULE</h2>
                        <div className='border-b-2 bg-cyan-300 m-1'></div>
                        <p id='para1' className='font-Poppins text-[15px] text-zinc-100 ml-3'>Time <span className='ml-20'>9:00AM to 5:00PM</span></p>
                        <p id='para2' className='font-Poppins text-[15px] text-zinc-100 ml-3'>Rest Days <span className='ml-24'>Sat & Sun</span></p>
                    </div>
                </div>
                <div id="leaves" className='w-[30%] h-28 bg-green-600 m-3'>
                    <FontAwesomeIcon icon={faHome} className='p-3 absolute text-zinc-200 fa-5x' />
                    <div className="right-part ml-24">
                        <h2 className='p-2 text-zinc-100 font-weight: 500 font-Poppins'>Leaves On Absence</h2>
                        <div className='border-b-2 bg-cyan-300 m-1'></div>
                        <p id='para1' className='font-Poppins text-[15px] text-zinc-100 ml-4'>Approved <span className='ml-36'>3</span></p>
                        <p id='para2' className='font-Poppins text-[15px] text-zinc-100 ml-4'>Pending <span className='ml-40'>2</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmpDash