import React from 'react'
import { Link } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonReturn = () => {
    return (
        <div>
            <div className="text-end mr-4">
                <Link to="/addemployee">
                    <Link to="/clock"><FontAwesomeIcon icon={faArrowLeft} /> <input type="button" value="Return" className='font-Poppins btn btn-success bg-slate-700' /> </Link>
                </Link>
            </div>
        </div>
    )
}

export default ButtonReturn