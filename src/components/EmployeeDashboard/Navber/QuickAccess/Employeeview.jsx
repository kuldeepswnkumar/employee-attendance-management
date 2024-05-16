import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Axios from '../../../../Axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Employeeview() {
    const [emdata, setData] = useState([])
    const { id } = useParams()
    console.log(id);

    useEffect(() => {
        try {
            Axios.get(`http://localhost:8000/api/user/singleviewdata/${id}`)
                .then((res) => {
                    // console.log("Single", res.data.data);
                    setData(res.data.data)
                }).catch((err) => console.error(err))
        } catch (error) {
            console.log(error);
        }
    }, [id])
    return (
        <div>
            <div className='container'>
                <h1 className='border-2 border-gray-500 rounded p-2 m-1 inline-block font-Poppins'>Employee Profile</h1>
                {/* <ButtonReturn /> */}
                <div className="text-end mr-4">
                    {/* <Link to="/addemployee">
                        <Link to="/employes"><FontAwesomeIcon icon={faArrowLeft} /> <input type="button" value="Return" className='font-Poppins btn btn-success bg-slate-700' /> </Link>
                    </Link> */}
                </div>
                {
                    emdata?.map((curr, i) => {
                        return (
                            <div key={i} className="main flex m-1">
                                <div className="w-2/5 bg-slate-400 p-3 mx-3 flex flex-col justify-around rounded h-[300px]">
                                    <div className="img  border-white w-40 h-40 m-auto"><img src={curr.fileData} alt="img" className="w-[80%] rounded-full ml-4" /></div>
                                    <div className="name m-auto font-Poppins">Employee Id: {curr.empid}</div>
                                    <div className="name m-auto font-Poppins">Name: {curr.fname} </div>
                                    <div className="name m-auto font-Poppins">Email Id: {curr.email}</div>
                                </div>
                                <div className="w-3/5 bg-slate-400 p-3 rounded h-[630px]">
                                    <div className="info ml-4">
                                        <h3 className='font-Poppins font-bold'>Personal Details</h3>
                                        <div className='m-3 font-Poppins'>Civil Status: {curr.cstatus} </div>
                                        <div className='m-3 font-Poppins'>Age: {curr.age}</div>
                                        <div className='m-3 font-Poppins'>Gender: {curr.gender}</div>
                                        <div className='m-3 font-Poppins'>Date of Birth: {curr.dob}</div>
                                        <div className='m-3 font-Poppins'>Address: {curr.address}</div>
                                        <h3 className='font-Poppins font-bold'>Company Information</h3>
                                        <h3 className='m-3 font-Poppins'>Company: {curr.company}</h3>
                                        <div className='m-3 font-Poppins'>Department: {curr.department}</div>
                                        <div className='m-3 font-Poppins'>Position: {curr.jobtitle}</div>
                                        <div className='m-3 font-Poppins'>Leave Group: {curr.lvgroup}</div>
                                        <div className='m-3 font-Poppins'>Employment Type: {curr.empType}</div>
                                        <div className='m-3 font-Poppins'>Employment Status: {curr.empStatus}</div>
                                        <div className='m-3 font-Poppins'>Join Date: {curr.JoinDate}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Employeeview