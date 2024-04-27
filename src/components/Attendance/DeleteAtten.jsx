import React, { useEffect, useState } from 'react'
import Axios from '../../Axios'
import { useParams, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function DeleteAtten() {

    const { id } = useParams()
    console.log(id);

    const navigate = useNavigate()

    const [loading, setLoading] = useState([])

    useEffect(() => {
        Axios.delete(`http://localhost:8000/api/user/deleteempattend/${id}`)
            .then((response) => {
                console.log(response.data.data);
                toast.success(response.data.data)
                setLoading(true)
                setTimeout(() => {
                    setTimeout(() => {
                        setLoading(false)
                    }, 1000)
                    navigate("/attendance")
                }, 2000)
            }).catch((err) => {
                console.log(err);
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

export default DeleteAtten