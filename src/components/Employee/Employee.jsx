import { useState } from "react"


const Employee = () => {
    const [formErr, setFormErr] = useState({})
    const [formData, setFormData] = useState(
        {
            id: '',
            fname: '',
            lname: '',
            gender: '',
            cstatus: '',
            email: '',
            age: '',
            dob: '',
            proof: '',
            pob: '',
            address: '',
            file: '',
            company: '',
            department: '',
            jobtitle: '',
            cpmail: '',
            lvgroup: '',
            empType: '',
            empStatus: '',
            srtdate: '',
            regdate: '',
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
        if (formData.file === '') {
            err.file = 'File is required!!'
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
        if (formData.cpmail === '') {
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
        if (formData.srtdate === '') {
            err.srtdate = 'Date is required!!'
        }
        if (formData.regdate === '') {
            err.regdate = 'Date is required!!'
        }
        setFormErr({ ...err })
        return false;
    }
    const handleFormData = (event) => {
        console.log(event);
        setFormData(() => ({
            ...formData,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = errorFormHandler()
        console.log(isValid);
        console.log("Submitted");

    }
    return (
        <div>
            <h1 className='text-center font-Poppins font-bold text-2xl'>Add Employee</h1>
            <div className='bg-gradient-to-r to-indigo-500 border-2 p-2'>
                <div className="registration m-auto items-center border-gray-500 bg-white p-3">
                    <form autoComplete='off' className="flex p-4" onSubmit={handleSubmit}>
                        <div className="left w-1/2">
                            <div className="mb-3">
                                <label htmlFor="id" className='mb-2 font-Poppins'> Employee Id
                                    <input type="text" name='id' value={setFormData.id} placeholder='Type your id' onChange={handleFormData} className='font-Poppins bg-transparent border-2 p-1 w-[40%] ml-2' />
                                </label>
                            </div>
                            <div className="mb-3 flex">
                                <label htmlFor="name" className='mb-2 font-Poppins'> First Name
                                    <input type="text" name='fname' value={setFormData.fname} placeholder='Type your First Name' onChange={handleFormData} className='font-Poppins bg-transparent border-2 p-1 w-[90%]' />
                                    <div className="text-red-700">{formErr.fname}</div>
                                </label>
                                <label htmlFor="name" className='mb-2 font-Poppins'> Last Name
                                    <input type="text" name='lname' value={setFormData.lname} placeholder='Type your Last Name' onChange={handleFormData} className='font-Poppins bg-transparent border-2 p-1 w-[90%]' />
                                    <div className="text-red-700">{formErr.lname}</div>
                                </label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="gender" className='font-Poppins'> Gender:
                                    <label className="ml-3"><input className='mr-2' type='radio' name="gender" checked={formData.gender === 'male'} onChange={handleFormData} value="male"></input>Male</label>
                                    <label className='mx-2'><input className='mr-2' type='radio' name="gender" checked={formData.gender === 'female'} onChange={handleFormData} value="female"></input>Female</label>
                                    <label className='mx-2'><input className='mr-2' type='radio' name="gender" checked={formData.gender === 'other'} onChange={handleFormData} value="other"></input>Others</label>
                                    <div className="text-red-700">{formErr.gender}</div>
                                </label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cstatus" className='font-Poppins '> Civil Status:
                                    <select className='font-Poppins bg-transparen border-b-4 w-[95%]' onChange={handleFormData} name="cstatus" >
                                        <option value="single">Single</option>
                                        <option value="married">Married</option>
                                        <option value="married">Unmarried</option>
                                    </select>
                                    <div className="text-red-700">{formErr.cstatus}</div>
                                </label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className='font-Poppins'> Email Id <span className="text-gray-400">(personal)</span>
                                    <input type="email" name='email' placeholder='Type your email' onChange={handleFormData} className='font-Poppins bg-transparent border-2 p-1 w-[95%]' />
                                    <div className="text-red-700">{formErr.email}</div>
                                </label>
                            </div>
                            <div className="mb-3 flex">
                                <label htmlFor="age" className='font-Poppins'> Age
                                    <input type="text" name='age' placeholder='Age' onChange={handleFormData} className='font-Poppins bg-transparent border-2 p-1 w-[95%]' />
                                    <div className="text-red-700">{formErr.age}</div>
                                </label>
                                <label htmlFor="dob" className='font-Poppins'> Date of Birth
                                    <input type="text" name='dob' placeholder='DOB' onChange={handleFormData} className='font-Poppins bg-transparent border-2 p-1 w-[95%]' />
                                    <div className="text-red-700">{formErr.dob}</div>
                                </label>
                            </div>
                            <div className="mb-3 flex">
                                <label htmlFor="idproof" className='font-Poppins'> ID Proof
                                    <input type="text" name='proof' placeholder='ID' onChange={handleFormData} className='font-Poppins bg-transparent border-2 p-1 w-[95%]' />
                                    <div className="text-red-700">{formErr.proof}</div>
                                </label>
                                <label htmlFor="pob" className='font-Poppins'> Place of Birth
                                    <input type="text" name='pob' placeholder='Place' onChange={handleFormData} className='font-Poppins bg-transparent border-2 p-1 w-[95%]' />
                                    <div className="text-red-700">{formErr.pob}</div>
                                </label>
                            </div>
                            <div className="mb-3 flex">
                                <label htmlFor="address" className='font-Poppins'> Address
                                    <textarea name="address" cols="20" rows="1" onChange={handleFormData} className='font-Poppins bg-transparent border-2 p-1 w-[95%]'></textarea>
                                    <div className="text-red-700">{formErr.address}</div>
                                </label>
                                <label htmlFor="file" className='font-Poppins'> Choose File
                                    <input type="file" name='file' onChange={handleFormData} className='font-Poppins bg-transparent border-2 p-1 w-[95%]' />
                                    <div className="text-red-700">{formErr.file}</div>
                                </label>
                            </div>
                        </div>
                        <div className="right w-1/2">
                            <div className="mb-3 flex">
                                <label htmlFor="company" className='font-Poppins'> Company:
                                    <select className='font-Poppins bg-transparen border-b-4 w-[100%] p-1' name="company" onChange={handleFormData} >
                                        <option value="Apple">Apple</option>
                                        <option value="Microsoft">Microsoft</option>
                                        <option value="Google">Google</option>
                                    </select>
                                    <div className="text-red-700">{formErr.company}</div>
                                </label>
                                <label htmlFor="department" className='font-Poppins'> Department:
                                    <select className='font-Poppins bg-transparen border-b-4 w-[100%] p-1' onChange={handleFormData} name="department">
                                        <option value="IT">Apple</option>
                                        <option value="Management">Microsoft</option>
                                        <option value="Account">Google</option>
                                    </select>
                                    <div className="text-red-700">{formErr.department}</div>
                                </label>
                            </div>
                            <div className="mb-3">

                            </div>
                            <div className="mb-3">
                                <label htmlFor="department" className='font-Poppins'> Job Titles/ Position:
                                    <select className='font-Poppins -transparebgn border-b-4 w-[100%] p-1' onChange={handleFormData} name="jobtitle">
                                        <option>Select Department</option>
                                        <option value="Software Developer">Software Developer</option>
                                        <option value="Software Engineer">Software Engineer</option>
                                        <option value="Product Engineer">Product Engineer</option>
                                    </select>
                                    <div className="text-red-700">{formErr.jobtitle}</div>
                                </label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className='font-Poppins'> Email Id <span className="text-gray-400">(Company)</span>
                                    <input type="email" name='cpemail' placeholder='Type your email' onChange={handleFormData} className='font-Poppins bg-transparent border-2 p-1 w-[95%]' />
                                    <div className="text-red-700">{formErr.cpmail}</div>
                                </label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="department" className='font-Poppins'> Leave Group
                                    <select className='font-Poppins bg-transparen border-b-4 w-[100%] p-1' onChange={handleFormData} name="lvgroup">
                                        <option value="g1">Group1</option>
                                        <option value="g2">Group2</option>
                                        <option value="g3">Group3</option>
                                    </select>
                                    <div className="text-red-700">{formErr.lvgroup}</div>
                                </label>
                            </div>
                            <div className="mb-3 flex">
                                <label htmlFor="emptype" className='font-Poppins mr-1'> Employee Type:
                                    <select className='font-Poppins bg-transparen border-b-4 w-[100%] p-1' onChange={handleFormData} name="empType">
                                        <option>Select Type</option>
                                        <option value="">Admin</option>
                                        <option value="">Manager</option>
                                        <option value="">Employee</option>
                                    </select>
                                    <div className="text-red-700">{formErr.empType}</div>
                                </label>
                                <label htmlFor="status" className='font-Poppins'> Employee Status:
                                    <select className='font-Poppins bg-transparen border-b-4 w-[100%] p-1' onChange={handleFormData} name="empStatus">
                                        <option>Select Status Type</option>
                                        <option value="">Active</option>
                                        <option value="">Deactive</option>
                                    </select>
                                    <div className="text-red-700">{formErr.empStatus}</div>
                                </label>
                            </div>
                            <div className="mb-3 flex">
                                <label htmlFor="date" className='font-Poppins'> Official Start Date
                                    <input type="date" name='srtdate' placeholder='Start Date' onChange={handleFormData} className='font-Poppins bg-transparent border-2 p-1 w-[95%]' />
                                    <div className="text-red-700">{formErr.srtdate}</div>
                                </label>
                                <label htmlFor="date" className='font-Poppins'> Date Regularized
                                    <input type="date" name='regdate' placeholder='Regularized Date' onChange={handleFormData} className='font-Poppins bg-transparent border-2 p-1 w-[95%]' />
                                    <div className="text-red-700">{formErr.regdate}</div>
                                </label>
                            </div>
                        </div>
                        <div className="text-end my-1 mr-2 absolute top-[92%] left-[92%]" >
                            <input type="submit" value="Submit" className='font-Poppins border-2 p-2 rounded-md cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500' />
                        </div>
                    </form>
                </div>
            </div >

        </div>
    )
}

export default Employee