import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard/Dashboard'
import Employee from './components/Employee/Employee'
import Attendance from './components/Attendance/Attendance'
import Schedules from './components/Schedules/Schedules'
import Leaves from './components/Leaves/Leave'
import Reports from './components/Reports/Reports'
import Companies from './components/Companies/Companies'
import Department from './components/Navigation/QuickAccess/Department'
import JobTitle from './components/Navigation/QuickAccess/JobTitle'
import Login from './components/Registration/Login'
import Registration from './components/Registration/Registration'
import ForgetPass from './components/Registration/ForgetPass'
import EmployeeAdd from './components/Employee/EmployeeAdd'
import Clock from './components/Clock/Clock'
import EmployeeView from './components/Employee/EmployeeView'
import EditAttendance from './components/Attendance/EditAttendance'
import ScheduleAdd from './components/Schedules/ScheduleAdd'
import EmployeeLogin from './components/Registration/EmployeeLogin'
import EmpRegistration from './components/Registration/EmpRegistration'
import EmpDashboard from './components/EmployeeDashboard/EmpDashboard'
import EmpDash from './components/EmployeeDashboard/Sidebar/EmpDash'
import MyAttendance from './components/EmployeeDashboard/Sidebar/MyAttendance'
import MyLeave from './components/EmployeeDashboard/Sidebar/MyLeave'
import MySchedules from './components/EmployeeDashboard/Sidebar/MySchedules'
import Logout from './components/Navigation/Users/Logout'
import ChangePass from './components/Navigation/Users/ChangePass'
import EmployeeUpdate from './components/Employee/EmployeeUpdate'
import DeleteEmployee from './components/Employee/DeleteEmployee'
import DeleteAtten from './components/Attendance/DeleteAtten'
import UpdateClock from './components/Clock/UpdateClock'
import Company from './components/Navigation/QuickAccess/Company'
import DeleteCompany from './components/Companies/DeleteCompany'
import ScheduleUpdate from './components/Schedules/ScheduleUpdate'
import DeleteSchedule from './components/Schedules/DeleteSchedule'
import AddLeave from './components/Leaves/AddLeave'
import LeaveDelete from './components/Leaves/LeaveDelete'
import GetDepartmentData from './components/Department/GetDepartmentData'
import DeleteDepartment from './components/Department/DeleteDepartment'
import LeaveAdd from './components/EmployeeDashboard/Sidebar/LeaveAdd'
import Employeeview from './components/EmployeeDashboard/Navber/QuickAccess/Employeeview'
import Report from './components/EmployeeDashboard/Sidebar/Report'
import UpdateLeave from './components/Leaves/UpdateLeave'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '',
                element: <Dashboard />
            },
            {
                path: '/employes',
                element: <Employee />
            },
            {
                path: '/company',
                element: <Company />
            },
            {
                path: '/attendance',
                element: <Attendance />
            },
            {
                path: '/schedules',
                element: <Schedules />
            },
            {
                path: '/leaves',
                element: <Leaves />
            },
            {
                path: '/reports',
                element: <Reports />
            },
            {
                path: '/logout',
                element: <Logout />
            },
            {
                path: '/companies',
                element: <Companies />
            },
            {
                path: '/department',
                element: <Department />
            },
            {
                path: '/jobtitle',
                element: <JobTitle />
            },
            {
                path: '/editattendance',
                element: <EditAttendance />
            },
            {
                path: '/deletecompany/:id',
                element: <DeleteCompany />
            },
            {
                path: '/addleave',
                element: <AddLeave />
            },
            {
                path: '/deleteleave/:id',
                element: <LeaveDelete />
            },
            {
                path: '/getdepartmentdata',
                element: <GetDepartmentData />
            },
            {
                path: '/deletedepartment/:id',
                element: <DeleteDepartment />
            },
            {
                path: '/updateleave/:id',
                element: <UpdateLeave />
            },

        ],
    },
    {
        path: '/clock',
        element: <Clock />
    },
    {
        path: '/updateclock',
        element: <UpdateClock />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/registration',
        element: <Registration />
    },
    {
        path: '/forget',
        element: <ForgetPass />
    },
    {
        path: '/addemployee',
        element: <EmployeeAdd />
    },
    {
        path: '/employeeview/:id',
        element: <EmployeeView />
    },
    {
        path: '/scheduleadd',
        element: <ScheduleAdd />
    },
    {
        path: '/emplogin',
        element: <EmployeeLogin />
    },
    {
        path: '/empregistration',
        element: <EmpRegistration />
    },
    {
        path: '/changepass',
        element: <ChangePass />
    },
    {
        path: '/updateemployee/:id',
        element: <EmployeeUpdate />
    },
    {
        path: '/deleteemployee/:id',
        element: <DeleteEmployee />
    },
    {
        path: '/deleteattendance/:id',
        element: <DeleteAtten />
    },
    {
        path: '/scheduleupdate/:id',
        element: <ScheduleUpdate />
    },
    {
        path: '/deleteschedule/:id',
        element: <DeleteSchedule />
    },
    {
        path: '/empdashboard',
        element: <EmpDashboard />,
        children: [
            {
                path: '/empdashboard',
                element: <EmpDash />
            },
            {
                path: '/empdashboard/empdash',
                element: <EmpDash />
            },
            {
                path: '/empdashboard/myattendance',
                element: <MyAttendance />
            },
            {
                path: '/empdashboard/myleave',
                element: <MyLeave />
            },
            {
                path: '/empdashboard/myschedules',
                element: <MySchedules />
            },
            {
                path: '/empdashboard/addleave',
                element: <LeaveAdd />
            },
            {
                path: '/empdashboard/empview',
                element: <Employeeview />
            },
            {
                path: '/empdashboard/addreport',
                element: <Report />
            },
        ]
    }
])

const Route = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Route