import { useEffect, useState } from "react"
import ButtonReturn from "../Button/Button";
import Axios from "../../Axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


const EmployeeAdd = () => {
    const navigate = useNavigate()
    const [departData, setDepartData] = useState([])
    const [compData, setCompData] = useState([])
    const [loading, setLoading] = useState(false)
    const [formErr, setFormErr] = useState({})
    const [formData, setFormData] = useState(
        {
            empid: '',
            fname: '',
            lname: '',
            gender: '',
            cstatus: '',
            email: '',
            age: '',
            dob: '',
            proof: '',
            pob: '',
            fileData: '',
            address: '',
            company: '',
            department: '',
            jobtitle: '',
            cpemail: '',
            lvgroup: '',
            empType: '',
            empStatus: '',
            JoinDate: '',
            password: '',
        }
    );

    const errorFormHandler = () => {
        let err = {}
        if (formData.fname === '') {
            err.fname = 'First Name required!!'
        }
        if (formData.lname === '') {
            err.lname = 'Last Name is required!!'
        }
        if (formData.gender === '') {
            err.gender = 'gender is required!!'
        }
        if (formData.cstatus === '') {
            err.cstatus = 'Status is required!!'
        }
        if (formData.email === '') {
            err.email = 'Email is required!!'
        }
        if (formData.age === '') {
            err.age = 'Age is required!!'
        }
        if (formData.dob === '') {
            err.dob = 'DOB is required!!'
        }
        if (formData.proof === '') {
            err.proof = 'Proof is required!!'
        }
        if (formData.pob === '') {
            err.pob = 'POB is required!!'
        }
        if (formData.address === '') {
            err.address = 'Address is required!!'
        }
        if (formData.fileData === '') {
            err.fileData = 'File is required!!'
        }
        if (formData.company === '') {
            err.company = 'Company is required!!'
        }
        if (formData.department === '') {
            err.department = 'Department is required!!'
        }
        if (formData.jobtitle === '') {
            err.jobtitle = 'Jobtitle is required!!'
        }
        if (formData.cpemail === '') {
            err.cpmail = 'Email is required!!'
        }
        if (formData.lvgroup === '') {
            err.lvgroup = 'Group is required!!'
        }
        if (formData.empType === '') {
            err.empType = 'Type is required!!'
        }
        if (formData.empStatus === '') {
            err.empStatus = 'Emp Status is required!!'
        }
        if (formData.JoinDate === '') {
            err.joinDate = 'Date is required!!'
        }
        if (formData.password === '') {
            err.password = 'Password is required!!'
        }
        setFormErr({ ...err })
        return false;
    }


    const handleFormData = (event) => {
        if (event.target.name === "fileData") {
            console.log('file', event.target.files[0]);
            // console.log('name', event.target.value);
            setFormData(() => ({
                ...formData,
                [event.target.name]: event.target.files[0]
            }))
        } else {
            setFormData(() => ({
                ...formData,
                [event.target.name]: event.target.value
            }))
        }

    }
    console.log(formData);

    const SendEmpData = () => {
        try {
            const form = new FormData();
            let keys = Object.keys(formData)
            keys.map((val) => {
                form.append(val, formData[val]);
            })
            const response = Axios.post('http://localhost:8000/api/user/empadd', form, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            console.log("My Form", form);
            console.log(response.data);
            setLoading(true)
            setTimeout(() => {
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
                navigate('/employes')
            }, 2000)

        } catch (error) {
            console.log(error);
        }
    }

    const empTyForm = () => {
        let RemoveFieldValue = {
            empid: '',
            fname: '',
            lname: '',
            gender: `${formData.gender ? "" : formData.gender}`,
            cstatus: '',
            email: '',
            age: '',
            dob: '',
            proof: '',
            pob: '',
            address: '',
            company: '',
            department: '',
            jobtitle: '',
            cpemail: '',
            lvgroup: '',
            empType: '',
            empStatus: '',
            JoinDate: '',
            password: '',
        }

        setFormData(RemoveFieldValue);
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('formData', formData)

        // console.log("Submitted");

        errorFormHandler()
        SendEmpData()
        empTyForm()
    }

    useEffect(() => {
        Axios.get('http://localhost:8000/api/user/viewcompany')
            .then((response) => {
                // console.log(response.data);
                setCompData(response.data.data)
                toast.success(response.data.message)
            }).catch((err) => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        Axios.get('http://localhost:8000/api/user/getdepartmentdata')
            .then((response) => {
                console.log(response.data.data);
                setDepartData(response.data.data)
            }).catch((error) => {
                console.log(error);
            })
    }, [])
    return (
        <div>
            <h1 className='text-center font-Poppins font-bold text-2xl p-2 border-gray-950 bg-green-500'>Add Employee</h1>
            {
                loading ? <ClimbingBoxLoader
                    color={'#d64036'}
                    loading={loading}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    className='mt-60 ml-[700px]'
                /> :

                    <div className='p-3 w-[80%] m-auto'>
                        <ButtonReturn />
                        <div className="registration m-auto items-center border-gray-500 bg-lime-50 p-3">
                            <form autoComplete='off' className="flex" onSubmit={handleSubmit} method="post" encType="multipart/form-data">
                                <div className="left w-1/2 mr-4 ">
                                    <div className="mb-2">
                                        <label htmlFor="id" className='mb-1 font-Poppins form-label'> Employee Id</label>
                                        <input type="text" name='empid' placeholder='Type your id' onChange={handleFormData} value={formData.empid} className='font-Poppins form-control w-full' />
                                    </div>
                                    <div className="mb-2 row">
                                        <div className="col">
                                            <label htmlFor="name" className='mb-1 font-Poppins'> First Name</label>
                                            <input type="text" name='fname' value={formData.fname} placeholder='Type your First Name' onChange={handleFormData} className='font-Poppins form-control' />
                                            <div className="text-red-700">{formErr.fname}</div>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="name" className='mb-1 font-Poppins'> Last Name </label>
                                            <input type="text" name='lname' value={formData.lname} placeholder='Type your Last Name' onChange={handleFormData} className='font-Poppins form-control' />
                                            <div className="text-red-700">{formErr.lname}</div>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="gender" className='font-Poppins form-label'> Gender:</label>
                                        <label className="ml-3"><input className='mr-2' type='radio' name="gender" checked={formData.gender === 'male'} onChange={handleFormData} value="male"></input>Male</label>
                                        <label className='mx-2'><input className='mr-2' type='radio' name="gender" checked={formData.gender === 'female'} onChange={handleFormData} value="female"></input>Female</label>
                                        <label className='mx-2'><input className='mr-2' type='radio' name="gender" checked={formData.gender === 'other'} onChange={handleFormData} value="other"></input>Others</label>
                                        <div className="text-red-700">{formErr.gender}</div>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="cstatus" className='font-Poppins form-label mb-1'> Civil Status: </label>
                                        <select className='font-Poppins form-select' onChange={handleFormData} value={formData.cstatus} name="cstatus" >
                                            <option selected>Choose...</option>
                                            <option value="single">Single</option>
                                            <option value="married">Married</option>
                                            <option value="married">Unmarried</option>
                                        </select>
                                        <div className="text-red-700">{formErr.cstatus}</div>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="email" className='font-Poppins form-label mb-1'> Email Id <span className="text-gray-400">(personal)</span></label>
                                        <input type="email" name='email' placeholder='Type your email' onChange={handleFormData} className='font-Poppins form-control' />
                                        <div className="text-red-700">{formErr.email}</div>

                                    </div>
                                    <div className="mb-2 row">
                                        <div className="col">
                                            <label htmlFor="age" className='font-Poppins mb-1 form-label'> Age</label>
                                            <input type="text" name='age' placeholder='Age' onChange={handleFormData} value={formData.age} className='font-Poppins form-control' />
                                            <div className="text-red-700">{formErr.age}</div>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="dob" className='font-Poppins mb-1'> Date of Birth </label>
                                            <input type="date" name='dob' placeholder='DOB' onChange={handleFormData} value={formData.dob} className='font-Poppins form-control' />
                                            <div className="text-red-700">{formErr.dob}</div>
                                        </div>
                                    </div>
                                    <div className="mb-2 row">
                                        <div className="col">
                                            <label htmlFor="idproof" className='font-Poppins form-label mb-1'> ID Proof </label>
                                            <input type="text" name='proof' placeholder='ID' onChange={handleFormData} value={formData.proof} className='font-Poppins form-control' />
                                            <div className="text-red-700">{formErr.proof}</div>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="pob" className='font-Poppins form-label mb-1'> Place of Birth</label>
                                            <input type="text" name='pob' placeholder='Place' onChange={handleFormData} value={formData.pob} className='font-Poppins form-control' />
                                            <div className="text-red-700">{formErr.pob}</div>
                                        </div>
                                    </div>
                                    <div className="mb-2 ">
                                        <label htmlFor="address" className='font-Poppins form-label mb-1'> Address</label>
                                        <textarea name="address" cols="20" rows="2" onChange={handleFormData} value={formData.address} className='font-Poppins form-control'></textarea>
                                        <div className="text-red-700">{formErr.address}</div>
                                    </div>
                                </div>
                                <div className="right w-1/2">
                                    <div className="mb-2">
                                        <label htmlFor="file" className='font-Poppins form-label mb-1'> Choose File</label>
                                        <input type="file" name='fileData' onChange={handleFormData} className='font-Poppins form-control' />
                                        <div className="text-red-700">{formErr.file}</div>

                                    </div>
                                    <div className="mb-2 row">

                                        <div className="col">
                                            <label htmlFor="company" className='font-Poppins form-label mb-1'> Company:  </label>

                                            <select className='font-Poppins form-select' name="company" value={formData.company} onChange={handleFormData} >
                                                <option selected>Choose...</option>
                                                {
                                                    compData?.map((curr, i) => {
                                                        return (
                                                            <option key={i}>{curr.compName}</option>
                                                        )
                                                    })
                                                }
                                            </select>


                                            <div className="text-red-700">{formErr.company}</div>
                                        </div>

                                        <div className="col">
                                            <label htmlFor="department" className='font-Poppins form-label mb-1'> Department: </label>
                                            <select className='font-Poppins form-select' onChange={handleFormData} value={formData.department} name="department">
                                                <option selected>Choose...</option>,
                                                {
                                                    departData?.map((curr, i) => {
                                                        return (
                                                            <option value="IT" key={i}>{curr.deptName}</option>
                                                        )

                                                    })
                                                }
                                            </select>


                                            <div className="text-red-700">{formErr.department}</div>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="department" className='font-Poppins form-label mb-1'> Job Titles/ Position:</label>
                                        <select className='font-Poppins form-select' onChange={handleFormData} value={formData.jobtitle} name="jobtitle">
                                            <option selected>Choose...</option>
                                            <option value="Software Developer">Software Developer</option>
                                            <option value="Software Engineer">Software Engineer</option>
                                            <option value="Product Engineer">Product Engineer</option>
                                        </select>
                                        <div className="text-red-700">{formErr.jobtitle}</div>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="email" className='font-Poppins form-label mb-1'> Email Id <span className="text-gray-400">(Company)</span></label>
                                        <input type="email" name='cpemail' placeholder='Type your email' onChange={handleFormData} value={formData.cpemail} className='font-Poppins form-control' />
                                        <div className="text-red-700">{formErr.cpmail}</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="department" className='font-Poppins form-label mb-1'> Leave Group  </label>
                                        <select className='font-Poppins form-select' onChange={handleFormData} value={formData.lvgroup} name="lvgroup">
                                            <option selected>Choose...</option>
                                            <option value="g1">Group1</option>
                                            <option value="g2">Group2</option>
                                            <option value="g3">Group3</option>
                                        </select>
                                        <div className="text-red-700">{formErr.lvgroup}</div>
                                    </div>
                                    <div className="mb-2 row">
                                        <div className="col">
                                            <label htmlFor="emptype" className='font-Poppins form-label mb-1'> Employee Type: </label>
                                            <select className='font-Poppins form-select' onChange={handleFormData} value={formData.empType} name="empType">
                                                <option selected>Choose...</option>
                                                <option value="Manager">Manager</option>
                                                <option value="Employee">Employee</option>
                                            </select>
                                            <div className="text-red-700">{formErr.empType}</div>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="status" className='font-Poppins form-label mb-1'> Employee Status:</label>
                                            <select className='font-Poppins form-select' onChange={handleFormData} value={formData.empStatus} name="empStatus">
                                                <option selected>Choose...</option>
                                                <option value="active">Active</option>
                                                <option value="deactive">Deactive</option>
                                            </select>
                                            <div className="text-red-700">{formErr.empStatus}</div>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <div className="col">
                                            <label htmlFor="date" className='font-Poppins form-label mb-1'> Join Date </label>
                                            <input type="date" name='JoinDate' placeholder='Start Date' onChange={handleFormData} value={formData.JoinDate} className='font-Poppins form-control' />
                                            <div className="text-red-700">{formErr.srtdate}</div>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="password" className='font-Poppins form-label mb-1'> Password</label>
                                            <input type="password" name='password' placeholder='Employee Password' onChange={handleFormData} value={formData.password} className='font-Poppins form-control' />
                                            <div className="text-red-700">{formErr.regdate}</div>

                                        </div>
                                    </div>
                                    <div className="text-end" >
                                        <input type="submit" value="Submit" className='font-Poppins btn btn-success w-[100%] mt-1 bg-slate-700' />
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div >
            }
        </div>
    )
}

export default EmployeeAdd