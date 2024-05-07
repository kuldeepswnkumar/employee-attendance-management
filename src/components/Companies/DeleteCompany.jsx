import React, { useEffect, useState } from 'react'
import Axios from '../../Axios'
import { useParams, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

function DeleteCompany() {
    const { id } = useParams()
    const navigate = useNavigate()


    const [loading, setLoading] = useState([])


    useEffect(() => {
        Axios.delete(`http://localhost:8000/api/user/deletecompany/${id}`)
            .then((response) => {
                console.log(response.data);
                toast.success(response.data.data)
                setLoading(true)
                setTimeout(() => {
                    setTimeout(() => {
                        setLoading(false)
                    }, 1000)
                    navigate("/companies")
                }, 2000)
            }).catch((err) => {
                console.log(err);
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
                    <div></div>
            }
        </div>
    )
}

export default DeleteCompany