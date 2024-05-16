import Navbar from './Navigation/Navbar';
import SideBar from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <div>
            <div className="flex h-screen">
                <SideBar />
                <div className="w-4/5 bg-[#c7e8ff]">
                    <Navbar />
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout;