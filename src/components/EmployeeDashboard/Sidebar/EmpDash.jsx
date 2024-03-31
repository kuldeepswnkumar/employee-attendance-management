import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faClock, faHome } from '@fortawesome/free-solid-svg-icons'

function EmpDash() {
    return (
        <div>
            <h1 className='border-2 border-gray-500 rounded m-2 p-2 inline-block font-Poppins'>Dashboard</h1>
            <div id="container" className='flex '>
                <div id="employee" className='w-[30%] h-28 bg-red-600 m-3 relative' >
                    <FontAwesomeIcon icon={faCircleUser} className='p-3 absolute text-zinc-200 fa-5x' />
                    <div className="right-part ml-24">
                        <h2 className='p-2 text-zinc-100 font-weight: 500 font-Poppins'>ATTENDANCE(Curr Month)</h2>
                        <div className='border-b-2 bg-cyan-300'></div>
                        <p id='para1' className='font-Poppins text-[15px] text-zinc-100 ml-2'>Late Arrivals<span className='ml-40'>0</span></p>
                        <p id='para2' className='font-Poppins text-[15px] text-zinc-100 ml-2'>Early Departure <span className='ml-40'>0</span></p>
                    </div>
                </div>
                <div id="attendance" className='w-[30%] h-28 bg-yellow-600 m-3'>
                    <FontAwesomeIcon icon={faClock} className='p-3 absolute text-zinc-200 fa-5x' />
                    <div className="right-part ml-24">
                        <h2 className='p-2 text-zinc-100 font-weight: 500 font-Poppins'>PRESENT SCHEDULE</h2>
                        <div className='border-b-2 bg-cyan-300'></div>
                        <p id='para1' className='font-Poppins text-[15px] text-zinc-100 ml-2'>Time <span className='ml-40'>0</span></p>
                        <p id='para2' className='font-Poppins text-[15px] text-zinc-100 ml-2'>Rest Days <span className='ml-40'>0</span></p>
                    </div>
                </div>
                <div id="leaves" className='w-[30%] h-28 bg-green-600 m-3'>
                    <FontAwesomeIcon icon={faHome} className='p-3 absolute text-zinc-200 fa-5x' />
                    <div className="right-part ml-24">
                        <h2 className='p-2 text-zinc-100 font-weight: 500 font-Poppins'>Leaves On Absence</h2>
                        <div className='border-b-2 bg-cyan-300'></div>
                        <p id='para1' className='font-Poppins text-[15px] text-zinc-100 ml-3'>Approved <span className='ml-36'>0</span></p>
                        <p id='para2' className='font-Poppins text-[15px] text-zinc-100 ml-3'>Pending <span className='ml-40'>0</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmpDash