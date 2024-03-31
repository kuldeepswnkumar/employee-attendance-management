import img from '../img/formal pic.jpg'
import ButtonReturn from '../Button/Button'

function EmployeeView() {
    return (
        <div className='container'>
            <h1 className='border-2 border-gray-500 rounded p-2 m-1 inline-block font-Poppins'>Employee Profile</h1>
            <ButtonReturn />
            <div className="main flex m-1">
                <div className="w-2/5 bg-slate-400 p-3 mx-3 flex flex-col justify-around rounded h-[300px]">
                    <div className="img  border-white w-40 h-40 m-auto"><img src={img} alt="img" className="w-[80%] rounded-full ml-4" /></div>
                    <div className="name m-auto font-Poppins">Name: Kuldeep</div>
                    <div className="name m-auto font-Poppins">Email Id: kuldeep@gmail.com</div>
                    <div className="name m-auto font-Poppins">Mobile No: 1234567890</div>
                </div>
                <div className="w-3/5 bg-slate-400 p-3 rounded h-[630px]">
                    <div className="info ml-4">
                        <h3 className='font-Poppins font-bold'>Personal Information</h3>
                        <div className='m-3 font-Poppins'>Civil Status: </div>
                        <div className='m-3 font-Poppins'>Age: </div>
                        <div className='m-3 font-Poppins'>Gender: </div>
                        <div className='m-3 font-Poppins'>Date of Birth: </div>
                        <div className='m-3 font-Poppins'>Address: </div>
                        <div className='m-3 font-Poppins'>Civil Status: </div>
                        <h3 className='font-Poppins font-bold'>Company Information</h3>
                        <div className='m-3 font-Poppins'>Company</div>
                        <div className='m-3 font-Poppins'>Department</div>
                        <div className='m-3 font-Poppins'>Position</div>
                        <div className='m-3 font-Poppins'>Leave Privillage</div>
                        <div className='m-3 font-Poppins'>Employment Type</div>
                        <div className='m-3 font-Poppins'>Employment Status</div>
                        <div className='m-3 font-Poppins'>Official Start Date</div>
                        <div className='m-2 font-Poppins'>Official Start Regularized</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeView