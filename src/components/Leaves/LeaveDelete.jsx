import React, { useEffect, useState } from 'react'
import Axios from '../../Axios'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'


function LeaveDelete() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    console.log("id", id);



    useEffect(() => {
        Axios.delete(`http://localhost:8000/api/user/deleteleave/${id}`)
            .then((response) => {
                console.log(response);
                toast.success(response.data.message)
                setLoading(true)
                setTimeout(() => {
                    setTimeout(() => {
                        setLoading(false)
                    }, 1000)
                    navigate("/leaves")
                }, 2000)
            }).catch((error) => {
                console.log(error);
            })
    }, [id])



    return (
        <>
            {
                loading ? <ClimbingBoxLoader
                    color={'#d64036'}
                    loading={loading}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    className='mt-60 ml-[700px]'
                />

                    :
                    <div></div>
            }
        </>
    )
}

export default LeaveDelete