
function Company() {
    function search(formData) {
        const query = formData.get("query");
        alert(`You searched for '${query}'`);
    }
    return (
        <div className="w-auto">
            <h1 className='border-2 border-gray-500 rounded m-2 p-2 inline-block font-Poppins'>Add Department</h1>
            <div className="flex p-4">
                <div className="w-1/3 bg-white p-3 mx-4 rounded h-[150px]">
                    <form className="font-Poppins">
                        <div className="mb-3">
                            <label htmlFor="department" className='font-Poppins form-label mb-2'>
                                Department: <span className="text-gray-400 font-Poppins">eg:IT</span><br /></label>
                            <input name="myInput" placeholder="Enter Department" className="p-1 form-control" />

                        </div>
                        <div className="text-end">
                            <input type="submit" value="Submit" className='font-Poppins btn btn-success bg-slate-700' />
                        </div>

                    </form>
                </div>
                <div className="w-2/3 bg-white rounded p-4 relative h-[400px]">
                    <div className="search">
                        <form action={search}>
                            <input name="myInput" placeholder="Search" className="my-1 p-1 form-control p-1" />
                            {/* <button type="submit" className="border-gray-100 border-2 font-Poppins p-2 rounded  bg-green-500 hover:bg-green-300 ease-in delay-300">Search</button> */}
                            <div className="text-end">
                                <input type="submit" value="Search" className='font-Poppins btn btn-success bg-slate-700 ' />
                            </div>
                            <div className="content mt-3">
                                <h3>Department</h3>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">An item</li>
                                    <li className="list-group-item">A second item</li>
                                    <li className="list-group-item">A third item</li>
                                    <li className="list-group-item">A fourth item</li>
                                    <li className="list-group-item">And a fifth one</li>
                                </ul>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Company