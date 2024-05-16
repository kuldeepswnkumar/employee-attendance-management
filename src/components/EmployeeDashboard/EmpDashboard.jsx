import React from 'react'
import EmpSidebar from './Sidebar/EmpSidebar'
import EmpNavber from './Navber/QuickAccess/EmpNavber'
import { Outlet } from 'react-router-dom'


function EmpDashboard() {
    return (
        <div>
            <div>
                <div className="flex h-screen">
                    <EmpSidebar />
                    <div className="w-4/5 bg-[rgb(208,197,255)]">
                        <EmpNavber />
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmpDashboard