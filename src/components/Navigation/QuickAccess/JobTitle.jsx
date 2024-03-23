import React from 'react'

const JobTitle = () => {
    function search(formData) {
        const query = formData.get("query");
        alert(`You searched for '${query}'`);
    }
    return (
        <div className="w-auto">
            <h1 className='border-2 border-gray-500 rounded m-2 p-2 inline-block font-Poppins'>Add Department</h1>
            <div className="flex p-4">
                <div className="w-1/3 bg-white p-3 mx-4 rounded h-[200px]">
                    <form className="flex-col font-Poppins">
                        <div className="mb-5">
                            <label htmlFor="department" className='font-Poppins'> Department:
                                <select className='font-Poppins bg-transparen border-b-4 w-[100%] p-1 my-2' name="department">
                                    <option value="IT">Apple</option>
                                    <option value="Management">Microsoft</option>
                                    <option value="Account">Google</option>
                                </select>
                            </label>
                        </div>
                        <div className="mb-8">
                            <label htmlFor="department" className='font-Poppins'>
                                Job Title: <span className="text-gray-400 font-Poppins">eg:CEO</span><br />
                                <input name="myInput" placeholder="Enter job title" className="p-1 border-b-2 bg-transparent my-2 w-full" />
                            </label>
                        </div>
                        <button type="submit" className="border-gray-100 border-2 p-3 font-Poppins rounded float-right bg-green-500 hover:bg-green-300 ease-in delay-300">Submit</button>
                    </form>
                </div>
                <div className="w-2/3 bg-white rounded p-4 relative h-[400px]">
                    <div className="search float-right">
                        <form action={search}>
                            <input name="myInput" placeholder="Search" className="my-1 p-1 border-b-2 font-Poppins border-s-2 w-[80%] bg-transparent" />
                            <button type="submit" className="border-gray-100 border-2 font-Poppins p-2 rounded  bg-green-500 hover:bg-green-300 ease-in delay-300">Search</button>
                        </form>
                    </div>
                    <div className="content mt-10">
                        <h3>Department</h3>
                        <hr />
                        <ul>
                            <li>Accounting</li>
                            <hr />
                            <li>Managment</li>
                            <hr />
                            <li>Development</li>
                            <hr />
                            <li>Executive</li>
                            <hr />
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default JobTitle