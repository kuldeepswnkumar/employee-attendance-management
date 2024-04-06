import React from 'react'
import toast, { Toaster } from 'react-hot-toast'


const notify = () => toast('Here is your toast.');
const Users = () => {
    return (
        <div>
            <h1>My Toste Message</h1>
            <button onClick={notify}>Click me</button>
            <Toaster />
        </div>
    )
}

export default Users