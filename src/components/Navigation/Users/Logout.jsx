import React, { useEffect, useState } from 'react'
import Axios from '../../../Axios'
import { useNavigate } from 'react-router-dom'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";



function Logout() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    // handleLogout()


    // useEffect(() => {

    // }, [])
    return (
        <div>
            {/* <button type='submit' className='btn btn-primary'>Logout</button> */}
            {
                loading ?
                    <ClimbingBoxLoader
                        color={'#d64036'}
                        loading={loading}
                        size={25}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        className='mt-60 ml-96'></ClimbingBoxLoader>
                    : <h1>Logout</h1>
            }


        </div>
    )
}

export default Logout