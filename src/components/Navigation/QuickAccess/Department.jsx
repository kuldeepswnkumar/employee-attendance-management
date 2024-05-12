import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import ButtonReturn from "../../Button/Button";
import { useState } from "react";
import Axios from "../../../Axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Company() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [errForm, setErrForm] = useState({})
    const [formData, setFormData] = useState({
        departId: '',
        deptName: '',
        jobRole: '',
        deprtEmail: '',
        deprtStatus: ''
    })

    const validateForm = () => {
        const err = {}

        if (formData.departId === '') {
            err.deprtId = 'Id is required!'
        }
        if (formData.deptName === '') {
            err.deptName = 'Department Name is required!'
        }
        if (formData.jobRole === '') {
            err.jobRole = 'Job Role is required!'
        }
        if (formData.deprtEmail === '') {
            err.deprtEmail = 'Email is required!'
        }
        if (formData.deprtStatus === '') {
            err.deprtStatus = 'Status is required!'
        }

        setErrForm({ ...err })

        return false
    }

    const handleChange = (e) => {
        setFormData(() => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }

    const SendFormData = () => {
        Axios.post('http://localhost:8000/api/user/adddepartment', formData)
            .then((response) => {
                console.log(response);
                toast.success(response.data.message)
                setLoading(true)
                setTimeout(() => {
                    setTimeout(() => {
                        setLoading(false)
                    }, 1000)
                    navigate('/getdepartmentdata')
                }, 2000)

            }).catch((error) => {
                console.log(error);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validateForm()
        SendFormData()
    }



    return (
        <div>
            <div className="w-[80%] m-auto">
                <h1 className='border-2 border-gray-500 rounded m-2 p-2 inline-block font-Poppins'>Add Department Details</h1>
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
                                        <label htmlFor="departId" className='mb-1 font-Poppins'> Department Id</label>
                                        <input type="text" name='departId' value={formData.compId} onChange={handleChange} placeholder='Type here company id' className='p-2 font-Poppins form-control' />
                                        <div className="text-red-700">{errForm.compId}</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="deptName" className='mb-1 font-Poppins'>Department Name </label>
                                        <input type="text" name='deptName' value={formData.compName} onChange={handleChange} placeholder='Type here company name' className='p-2 font-Poppins form-control' />
                                        <div className="text-red-700">{errForm.compName}</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="jobRole" className='font-Poppins form-label mb-2'>Job Role</label>
                                        <input type='text' name="jobRole" value={formData.foundyear} onChange={handleChange} placeholder="Type here founded year" className="p-2 form-control" />
                                        <div className="text-red-700">{errForm.foundyear}</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="deprtEmail" className='font-Poppins form-label mb-2'>Department Email</label>
                                        <input type='email' name="deprtEmail" value={formData.compWebsite} onChange={handleChange} placeholder="Type here company website" className="p-2 form-control" />
                                        <div className="text-red-700">{errForm.compWebsite}</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="deprtStatus" className='font-Poppins form-label mb-1'> Department Status:</label>
                                        <select className='font-Poppins form-select' onChange={handleChange} name="deprtStatus">
                                            <option selected>Choose...</option>
                                            <option value="active">Active</option>
                                            <option value="deactive">Deactive</option>
                                        </select>
                                        <div className="text-red-700">{errForm.deprtStatus}</div>
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