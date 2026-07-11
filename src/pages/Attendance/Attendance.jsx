import { useEffect, useState } from "react";
import { 
    FaUsers,
    FaCheckCircle,
    FaTimesCircle,
    FaClock
} from "react-icons/fa";

import { getAttendance } from "../../services/attendanceService";


function Attendance(){

    const [attendance,setAttendance] = useState([]);


    useEffect(()=>{
        loadAttendance();
    },[]);



    const loadAttendance = async()=>{
        const res = await getAttendance();
        setAttendance(res);
    };



    const totalEmployees = attendance.length;


    const present = attendance.filter(
        item=>item.status==="Present"
    ).length;


    const absent = attendance.filter(
        item=>item.status==="Absent"
    ).length;


    const late = attendance.filter(
        item=>item.status==="Late"
    ).length;



    const cards=[
        {
            title:"Total Employees",
            count:totalEmployees,
            icon:<FaUsers/>,
            color:"bg-blue-500"
        },

        {
            title:"Present Today",
            count:present,
            icon:<FaCheckCircle/>,
            color:"bg-green-500"
        },

        {
            title:"Absent Today",
            count:absent,
            icon:<FaTimesCircle/>,
            color:"bg-red-500"
        },

        {
            title:"Late Arrivals",
            count:late,
            icon:<FaClock/>,
            color:"bg-yellow-500"
        }
    ];




return(

<div className="p-6 bg-gray-100 min-h-screen">


{/* Header */}

<div className="flex justify-between items-center mb-6">

<h2 className="text-3xl font-bold">
Attendance Dashboard
</h2>


<button
className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
>
+ Mark Attendance
</button>


</div>




{/* Cards */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">


{
cards.map((card,index)=>(

<div
key={index}
className={`${card.color} text-white p-5 rounded-xl shadow flex justify-between items-center`}
>


<div>

<p className="text-sm">
{card.title}
</p>


<h2 className="text-3xl font-bold">
{card.count}
</h2>

</div>


<div className="text-4xl">
{card.icon}
</div>


</div>


))
}


</div>





{/* Table */}


<div className="mt-8 bg-white rounded-xl shadow">


<h3 className="text-xl font-bold p-4">
Attendance List
</h3>



<table className="w-full">


<thead className="bg-gray-800 text-white">

<tr>

<th className="p-3">
ID
</th>

<th className="p-3">
Employee
</th>

<th className="p-3">
Department
</th>

<th className="p-3">
Date
</th>

<th className="p-3">
Check In
</th>

<th className="p-3">
Check Out
</th>

<th className="p-3">
Hours
</th>

<th className="p-3">
Status
</th>


</tr>

</thead>



<tbody>


{
attendance.map(item=>(

<tr
key={item.id}
className="border-b text-center"
>


<td className="p-3">
{item.id}
</td>


<td className="p-3">
{item.employeeName}
</td>


<td className="p-3">
{item.department}
</td>


<td className="p-3">
{item.date}
</td>


<td className="p-3">
{item.checkIn}
</td>


<td className="p-3">
{item.checkOut}
</td>


<td className="p-3">
{item.hours}
</td>



<td className="p-3">


<span
className={`
px-3 py-1 rounded-full text-sm

${
item.status==="Present"
?
"bg-green-100 text-green-700"
:
item.status==="Absent"
?
"bg-red-100 text-red-700"
:
"bg-yellow-100 text-yellow-700"
}

`}
>

{item.status}

</span>


</td>


</tr>


))
}


</tbody>


</table>


</div>




</div>


)


}


export default Attendance;