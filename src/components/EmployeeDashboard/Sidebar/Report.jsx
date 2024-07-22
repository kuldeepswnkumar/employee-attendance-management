import React, { useState } from 'react'
import Axios from '../../../Axios'
import toast from 'react-hot-toast'


function Report() {

    const [errForm, setErrorform] = useState({})
    const [formData, setFormData] = useState({
        empId: '',
        reportbox: '',
        reportdate: ''
    })

    const validateInput = () => {
        let err = {}
        if (formData.empId === '') {
            err.empId = 'Id is required!'
        }
        if (formData.reportbox === '') {
            err.reportbox = 'Report is required!'
        }
        if (formData.reportdate === '') {
            err.reportbox = 'Report is required!'
        }

        setErrorform({ ...err })
        return false
    }
    // console.log(formData);

    const handleChange = (e) => {
        setFormData(() => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }

    const SendFormData = () => {
        Axios.post('http://localhost:8000/api/user/reportadd', formData)
            .then((response) => {
                console.log(response.data.data);
                if (toast.success) {
                    toast.success(response.data.message)
                } else {
                    toast.error("Something went wrong")
                }

            }).catch((error) => {
                console.log(error);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validateInput()
        SendFormData()
    }



    return (
        <div>
            <div className="w-[80%] m-auto">
                <h1 className='border-2 border-gray-500 rounded m-2 p-2 inline-block font-Poppins'>Reports</h1>

                <div className="p-1 mt-3">
                    <div className=" bg-white p-4 mx-4 rounded h-auto">
                        <form className="font-Poppins" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="empId" className='font-Poppins form-label mb-2'>Employee Id</label>
                                <input type='text' name="empId" onChange={handleChange} className="p-2 form-control" />
                                <div className="text-red-700">{errForm.empId}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="reportbox" className='font-Poppins form-label mb-2'>Write Report</label>
                                <textarea name="reportbox" className='border-3 form-control' rows='7' cols='62' placeholder="Write your report here" onChange={handleChange}></textarea>
                                <div className="text-red-700">{errForm.reportbox}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="reportdate" className='font-Poppins form-label mb-2'>Report Date </label>
                                <input type='date' name="reportdate" onChange={handleChange} className="p-2 form-control" />
                                <div className="text-red-700">{errForm.reportdate}</div>
                            </div>
                            <div className="text-end">
                                <input type="submit" value="Submit" className='font-Poppins btn btn-success bg-slate-700 mt-2' />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Report