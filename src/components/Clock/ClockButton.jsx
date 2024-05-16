import React from 'react'
import { Link } from 'react-router-dom'

function ClockButton() {
    return (
        <div className='text-right'>
            <Link to='/clock'>
                <button className='border-2 p-1.5 btn-success rounded w-full'>Clock In/Out</button>
            </Link>
        </div>
    )
}

export default ClockButton