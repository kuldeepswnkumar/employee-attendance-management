import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard/Dashboard'
import Employee from './components/Employee/Employee'
import Attendance from './components/Attendance/Attendance'
import Schedules from './components/Schedules/Schedules'
import Leaves from './components/Leaves/Leave'
import Reports from './components/Reports/Reports'
import Users from './components/Users/Users'
import Setting from './components/Setting/Setting'
import Company from './components/Navigation/QuickAccess/Company'
import Department from './components/Navigation/QuickAccess/Department'
import JobTitle from './components/Navigation/QuickAccess/JobTitle'
import Clock from './components/Navigation/QuickAccess/Clock'
import Login from './components/Registration/Login'
import Registration from './components/Registration/Registration'
import ForgetPass from './components/Registration/ForgetPass'
import EmployeeAdd from './components/Employee/EmployeeAdd'




const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Dashboard />
            },
            {
                path: '/employes',
                element: <Employee />
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
                path: '/users',
                element: <Users />
            },
            {
                path: '/setting',
                element: <Setting />
            },
            {
                path: '/company',
                element: <Company />
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
                path: '/clock',
                element: <Clock />
            }
        ],
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
    }

])

const Route = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Route