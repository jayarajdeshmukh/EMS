import { Routes, Route } from "react-router-dom";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ChangePassword from "../pages/Profile/ChangePassword";

import ProtectedRoute from "../routes/ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import Department from "../pages/Department/Department";
import AddDepartment from "../pages/Department/AddDepartment";
import Attendance from "../pages/Attendance/Attendance";
import Salary from "../pages/Salary/Salary";
import Employees from "../pages/Employee/Employees";
import AddEmployee from "../pages/Employee/AddEmployee";
import EditEmployee from "../pages/Employee/EditEmployee";
import ViewEmployee from "../pages/Employee/ViewEmployee";
import LeaveList from "../pages/Leave/LeaveList";
import ApplyLeave from "../pages/Leave/ApplyLeave";
import NotFound from "../pages/NotFound/NotFound";


export default function AppRoute() {
  return (
     <Routes>

      {/* PUBLIC ROUTES */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />


      {/* PROTECTED ADMIN ROUTES */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile/>}/>
        <Route path="change-password" element={<ChangePassword/>}/>
        <Route path="department" element={<Department/>}/>
        <Route path="department/add" element={<AddDepartment/>}/>
        <Route path="attendance" element={<Attendance/>}/>
        <Route path="salary" element={<Salary/>}/>
        <Route path="employees" element={<Employees/>} />
        <Route path="employees/add" element={<AddEmployee/>} />
        <Route path="employees/edit/:id" element={<EditEmployee/>} />
        <Route path="employees/:id" element={<ViewEmployee/>} />
        <Route path="leave-list" element={<LeaveList/>}/>
        <Route path="ApplyLeave" element={<ApplyLeave/>}/>
        <Route path="NotFound" element={<NotFound/>}/>
      </Route>

    </Routes>
  )
}
