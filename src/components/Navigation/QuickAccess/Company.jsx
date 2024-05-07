import { useState } from "react";
import ButtonReturn from "../../Button/Button";
import Axios from "../../../Axios";
import toast from "react-hot-toast";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useNavigate } from "react-router-dom";


function Company() {
    const navigate = useNavigate()
    const [errForm, seterrForm] = useState({})
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        compId: '',
        compName: '',
        foundyear: '',
        compWebsite: '',
        compLocation: '',
    })

    const errorFormhandler = () => {
        const err = {}
        if (formData.compId === '') {
            err.compId = 'Company id required!'
        }
        if (formData.compName === '') {
            err.compName = 'Company Name is required!'
        }
        if (formData.foundyear === '') {
            err.foundyear = 'Founded year is required!'
        }
        if (formData.compWebsite === '') {
            err.compWebsite = 'Company website required!'
        }
        if (formData.compLocation === '') {
            err.compLocation = 'Company location required!'
        }

        seterrForm({ ...err })
        return false
    }
    const handleChange = (event) => {
        setFormData(() => ({
            ...formData,
            [event.target.name]: event.target.value
        }))
    }

    const sendFormData = () => {
        try {
            Axios.post('http://localhost:8000/api/user/addcompany', formData)
                .then((response) => {
                    // console.log("response", response.data);
                    toast.success(response.data.message)
                    setLoading(true)
                    setTimeout(() => {
                        setTimeout(() => {
                            setLoading(false)
                        }, 1000)
                        navigate("/companies")
                    }, 2000)
                }).catch((error) => console.log(error))

        } catch (error) {
            console.log("Unable to submit data", error);

        }
    }
    const clearFields = () => {
        setFormData({
            compId: '',
            compName: '',
            foundyear: '',
            compWebsite: '',
            compLocation: '',
        })
    }
    // console.log("formDatakk", formData);

    const handleSubmit = (e) => {
        e.preventDefault()
        errorFormhandler()
        sendFormData()
        clearFields()

    }

    return (
        <div>
            <div className="w-[80%] m-auto">
                <h1 className='border-2 border-gray-500 rounded m-2 p-2 inline-block font-Poppins'>Add Company Details</h1>
                <ButtonReturn />
                {
                    loading ? <ClimbingBoxLoader
                        color={'#d64036'}
                        loading={loading}
                        size={30}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        className='mt-60 ml-[500px]'
                    /> :

                        <div className="p-1">
                            <div className=" bg-white p-4 mx-4 rounded h-auto">
                                <form className="font-Poppins" onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="compId" className='mb-1 font-Poppins'> Company Id</label>
                                        <input type="text" name='compId' value={formData.compId} onChange={handleChange} placeholder='Type here company id' className='p-2 font-Poppins form-control' />
                                        <div className="text-red-700">{errForm.compId}</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="compName" className='mb-1 font-Poppins'>Company Name </label>
                                        <input type="text" name='compName' value={formData.compName} onChange={handleChange} placeholder='Type here company name' className='p-2 font-Poppins form-control' />
                                        <div className="text-red-700">{errForm.compName}</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="fyear" className='font-Poppins form-label mb-2'>Founded Year</label>
                                        <input type='text' name="foundyear" value={formData.foundyear} onChange={handleChange} placeholder="Type here founded year" className="p-2 form-control" />
                                        <div className="text-red-700">{errForm.foundyear}</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="compWebsite" className='font-Poppins form-label mb-2'>Company Website</label>
                                        <input type='text' name="compWebsite" value={formData.compWebsite} onChange={handleChange} placeholder="Type here company website" className="p-2 form-control" />
                                        <div className="text-red-700">{errForm.compWebsite}</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="compLocation" className='font-Poppins form-label mb-2'>Company Headquarters </label>
                                        <input type='text' name="compLocation" value={formData.compLocation} onChange={handleChange} placeholder="Type here company location" className="p-2 form-control" />
                                        <div className="text-red-700">{errForm.compLocation}</div>
                                    </div>

                                    <div className="text-end">
                                        <input type="submit" value="Submit" className='font-Poppins btn btn-success bg-slate-700 mt-2' />
                                    </div>

                                </form>
                            </div>
                        </div>
                }
            </div>
        </div >

    )
}

export default Company