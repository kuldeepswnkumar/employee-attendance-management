import React from 'react'
import EmpSidebar from './Sidebar/EmpSidebar'
import EmpNavber from './Navber/QuickAccess/EmpNavber'


function EmpDashboard() {
    return (
        <div>
            <div>
                <div className="flex h-screen">
                    <EmpSidebar />
                    <div className="w-4/5 bg-[#c7feff]">
                        <EmpNavber />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmpDashboard