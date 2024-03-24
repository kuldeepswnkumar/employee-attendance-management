import React from 'react'
import { useState } from 'react';

const Clock = () => {

    const time = new Date().toLocaleTimeString();
    const [currTime, setCurrTime] = useState(time);

    const handleTime = () => {
        const time = new Date().toLocaleTimeString();
        setCurrTime(time);
    }

    setInterval(handleTime, 1000);



    return (
        <>
            <div className='w-screen'>
                <form action="" className='relative'>
                    <div className="top flex absolute top-32 left-[600px]">
                        <select className="form-select w-full">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="mid flex relative top-40 left-[610px] border-2 border-gray-50">
                        <h1>{currTime}</h1>
                    </div>
                    <div className="last">

                    </div>
                </form>

            </div>
        </>

    )

}


export default Clock