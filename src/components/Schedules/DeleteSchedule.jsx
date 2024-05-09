import React, { useEffect, useState } from 'react'
import Axios from '../../Axios'
import { useParams, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

function DeleteSchedule() {

    const navigate = useNavigate()

    const { id } = useParams()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        Axios.delete(`http://localhost:8000/api/user/deletescheduledata/${id}`)
            .then((response) => {
                console.log(response);
                toast.success(response.data.message)
                setLoading(true)
                setTimeout(() => {
                    setTimeout(() => {
                        setLoading(false)
                    }, 1000)
                    navigate("/schedules")
                }, 2000)
            }).catch((error) => {
                console.log(error);
            })
    }, [id])

    return (
        <div>
            {
                loading ? <ClimbingBoxLoader
                    color={'#d64036'}
                    loading={loading}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    className='mt-60 ml-[700px]'
                /> :


                    <h1></h1>
            }
        </div>
    )
}

export default DeleteSchedule