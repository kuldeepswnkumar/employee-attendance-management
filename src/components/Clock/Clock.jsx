import { useState } from 'react';
import Navigator from './Navigator';


const Clock = () => {

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthDay = ["January", "Faburay", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let day = weekday[d.getDay()];
    let month = monthDay[d.getMonth()];
    let currentYear = d.getFullYear();
    const time = new Date().toLocaleTimeString();
    const [currTime, setCurrTime] = useState(time);

    const handleTime = () => {
        const time = new Date().toLocaleTimeString();
        setCurrTime(time);
    }

    setInterval(handleTime, 1000);

    return (
        <>
            <div className='w-screen h-screen bg-slate-800'>
                <Navigator />
                <form action="" className='flex justify-evenly mt-32 ml-20 text-center'>
                    <div className="top mt-32">
                        <select className="form-select">
                            <option selected>Choose...</option>
                            <option value="checkIN">Check In</option>
                            <option value="checkOut">Check Out</option>
                        </select>
                    </div>
                    <div className="mid mt-3 border-2 p-16 bg-blue-700 text-white rounded-[50%] font-Poppins">
                        <p className='uppercase text-3xl mb-2 p-2 font-Poppins'>{day}</p>
                        <h1 className='text-3xl uppercase font-Poppins'>{currTime}</h1>
                        <p className='text-3xl mb-2 p-2 font-Poppins'>{month + "  " + currentYear}</p>
                    </div>
                    <div className="last mt-32 row">
                        <div className="col">
                            <input type="text" className='form-control w-[200px]' placeholder='Enter your id' />
                        </div>
                        <div className="col">
                            <input type="submit" value="Confirm" className='font-Poppins btn btn-success bg-slate-700' />
                        </div>
                    </div>
                </form>

            </div>
        </>

    )

}


export default Clock