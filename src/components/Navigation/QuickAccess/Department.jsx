
function Company() {
    function search(formData) {
        const query = formData.get("query");
        alert(`You searched for '${query}'`);
    }
    return (
        <div className="w-auto">
            <h1 className='border-2 border-gray-500 rounded m-2 p-2 inline-block font-Poppins'>Add Department</h1>
            <div className="flex p-4">
                <div className="w-1/3 bg-white p-3 mx-3 rounded h-[180px]">
                    <form className="flex-col font-Poppins">
                        <label>
                            Department Name: <span className="text-gray-400 font-Poppins">eg:Accounting</span><br />
                            <input name="myInput" placeholder="Enter company name" className="my-3 p-3 border-b-2 w-[60%] bg-transparent" />
                        </label><br />
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

export default Company