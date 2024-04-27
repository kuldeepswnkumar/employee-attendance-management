import { useState } from 'react';
import Navigator from './Navigator';
import Axios from '../../Axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";



const Clock = () => {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthDay = ["January", "Faburay", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let day = weekday[d.getDay()];
    let month = monthDay[d.getMonth()];
    let currentYear = d.getFullYear();
    let currDate = d.getDate();
    const time = new Date().toLocaleTimeString();
    const [currTime, setCurrTime] = useState(time);
    const handleTime = () => {
        const time = new Date().toLocaleTimeString();
        setCurrTime(time);
    }

    setInterval(handleTime, 1000);


    const [formData, setFormData] = useState({
        inoutTime: '',
        fullDate: `${currDate + " " + month + " " + currentYear}`,
        TimeIn: `${currTime}`,
        TimeOut: `${currTime}`,
        empId: '',
    })


    const handleFormData = (e) => {
        setFormData(() => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }


    const sendDataform = () => {
        try {
            const response = Axios.post('http://localhost:8000/api/user/attendance', formData)
            console.log("REsp", response);
            // setFormData(response)
            toast.success("Your attendance has been marked!!")
            setLoading(true)
            setTimeout(() => {
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
                navigate("/attendance")
            }, 2000)
        } catch (error) {
            console.log(error);
        }
    }
    // console.log("Form", formData);
    const handleSubmit = (e) => {
        e.preventDefault()
        sendDataform()
    }

    return (
        <>
            <div className='w-screen h-screen bg-slate-800'>
                <Navigator />
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

                        <form onSubmit={handleSubmit} className='flex justify-evenly mt-32 ml-20 text-center'>
                            <div className="top mt-32"  >
                                <select className="form-select" name="inoutTime" value={formData.inoutTime} onChange={handleFormData}>
                                    <option selected>Choose...</option>
                                    <option value="checkIN">Check In</option>
                                    <option value="checkOut">Check Out</option>
                                </select>
                            </div>
                            <div className="mid mt-3 border-2 w-[28%] p-16  text-white rounded-[20%] font-Poppins">
                                <div>
                                    <input type="text" className='uppercase text-3xl text-center  mb-2 p-2 font-Poppins bg-transparent w-48 border-none' name="days" value={day} /><br />
                                </div>
                                <div>
                                    <input type="text" className='uppercase text-3xl text-center  mb-2 p-2 font-Poppins bg-transparent w-48 border-none' name="TimeIn" value={currTime} />

                                    <input type="text" className='uppercase text-3xl text-center  mb-2 p-2 font-Poppins bg-transparent w-48 border-none hidden' name="TimeOut" value={currTime} />
                                </div>
                                <div>
                                    <input type="text" className='uppercase text-3xl text-center  mb-2 p-2 font-Poppins bg-transparent w-56 border-none' name="fullDate" value={currDate + " " + month + " " + currentYear} />
                                </div>
                            </div>
                            <div className="last mt-32 row">
                                <div className="col">
                                    <input type="text" className='form-control w-[200px]' value={formData.empId} onChange={handleFormData} name='empId' placeholder='Enter your id' />
                                </div>
                                <div className="col">
                                    <input type="submit" value="Confirm" className='font-Poppins btn btn-success bg-slate-700' />
                                </div>
                            </div>
                        </form >
                }
            </div >
        </>

    )

}


export default Clock