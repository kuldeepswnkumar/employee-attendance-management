import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faClock, faHome } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Axios from '../../Axios'
import toast from 'react-hot-toast'

const Dashboard = () => {

    const [empData, setEmpData] = useState([])
    const [attData, setAttData] = useState([])
    const [leaveData, setLeaveData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("AccessToken")
        if (token) {
            navigate('/dashboard')
        } else {
            navigate('/clock')
        }
    }, [])

    useEffect(() => {
        Axios.get('http://localhost:8000/api/user/viewdata')
            .then((response) => {
                // console.log("resp data", res.data.data);
                // toast.success(response.data.message)
                setEmpData(response.data.data)
            }).catch((err) => console.log(err))
        // setLoading(false);
    }, [])

    useEffect(() => {
        Axios.get('http://localhost:8000/api/user/attenedempview')
            .then((response) => {
                // console.log(response.data.data);
                setAttData(response.data.data)
            }).catch((error) => {
                console.log(error);
            })
    }, [])



    useEffect(() => {
        Axios.get('http://localhost:8000/api/user/getleavedata')
            .then((response) => {
                console.log(response.data.data);
                setLeaveData(response.data.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            <h1 className='border-2 border-gray-500 rounded m-2 p-2 inline-block font-Poppins'>Dashboard</h1>
            <div id="container" className='flex '>
                <div id="employee" className='w-[30%] h-28 bg-red-600 m-3 relative' >
                    <FontAwesomeIcon icon={faCircleUser} className='p-3 absolute text-zinc-200 fa-5x' />
                    <div className="right-part ml-24">
                        <h2 className='p-2 text-zinc-100 font-weight: 500 font-Poppins'>Employee</h2>
                        <div className='border-b-2 bg-cyan-300 m-1'></div>
                        <p id='para1' className='font-Poppins text-[15px] text-zinc-100 ml-2'>Regular <span className='ml-40'>{empData.length}</span></p>
                        <p id='para2' className='font-Poppins text-[15px] text-zinc-100 ml-2'>Trainee <span className='ml-40'>0</span></p>
                    </div>
                    <div className="Emp border-2 mt-5 border-red-500">
                        {
                            empData.length == 0

                                ?
                                "Recored not found"
                                :

                                <table className="table">
                                    < thead >
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            empData.map((curr, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td >{curr.empid}</td>
                                                        <td>{curr.fname}</td>
                                                        <td>{curr.empStatus}</td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                        }
                    </div>
                </div>
                <div id="attendance" className='w-[30%] h-28 bg-yellow-600 m-3'>
                    <FontAwesomeIcon icon={faClock} className='p-3 absolute text-zinc-200 fa-5x' />
                    <div className="right-part ml-24 ">
                        <h2 className='p-2 text-zinc-100 font-weight: 500 font-Poppins'>Attendance</h2>
                        <div className='border-b-2 bg-cyan-300 m-1'></div>
                        <p id='para1' className='font-Poppins text-[15px] text-zinc-100 ml-2'>Online <span className='ml-40'>{attData.length}</span></p>
                        <p id='para2' className='font-Poppins text-[15px] text-zinc-100 ml-2'>Offline <span className='ml-40'>0</span></p>
                    </div>
                    <div className="empAtt border-2 border-yellow-400 mt-5">
                        {
                            attData.length == 0
                                ?
                                "No record found!"
                                :

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Date</th>
                                            <th scope="col">Employee</th>
                                            <th scope="col">TotalTime</th>
                                            <th scope="col">Status (In/Out)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            attData.map((curr, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>{curr.fullDate}</td>
                                                        <td>{curr.EmployeeName}</td>
                                                        <td>{curr.totalTime}</td>
                                                        <td>{curr.myStatus}</td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                        }
                    </div>
                </div>
                <div id="leaves" className='w-[30%] h-28 bg-green-600 m-3'>
                    <FontAwesomeIcon icon={faHome} className='p-3 absolute text-zinc-200 fa-5x' />
                    <div className="right-part ml-24">
                        <h2 className='p-2 text-zinc-100 font-weight: 500 font-Poppins'>Leaves On Absence</h2>
                        <div className='border-b-2 bg-cyan-300 m-1'></div>
                        <p id='para1' className='font-Poppins text-[15px] text-zinc-100 ml-3'>Leaves <span className='ml-44'>{leaveData.length}</span></p>
                        <p id='para2' className='font-Poppins text-[15px] text-zinc-100 ml-3'>Status <span className='ml-44'>0</span></p>
                    </div>

                    <div className="leaveDt border-2 border-green-600 mt-5">
                        {
                            leaveData.length == 0
                                ?
                                "Record not found!"
                                :

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Employee</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Leave Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            leaveData?.map((curr, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>{curr.empId}</td>
                                                        <td>{curr.empName}</td>
                                                        <td>{curr.decription}</td>
                                                        <td>{curr.leaveStatus}</td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard