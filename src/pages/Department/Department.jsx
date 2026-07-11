import { useEffect, useState } from "react";
import {
  FaBuilding,
  FaUsers,
  FaCheckCircle,
  FaTimesCircle,
  FaSearch
} from "react-icons/fa";
import { getDepartments } from "../../services/departmentService";
import { useNavigate } from "react-router-dom";

function Department() {

  const navigate = useNavigate();

  const [departments, setDepartments] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadDepartments();
  }, []);

  const loadDepartments = async () => {
    const res = await getDepartments();
    setDepartments(res);
  };

  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalDepartments = departments.length;

  const activeDepartments = departments.filter(
    (dept) => dept.status === "Active"
  ).length;

  const inactiveDepartments = departments.filter(
    (dept) => dept.status === "Inactive"
  ).length;

  const totalEmployees = departments.reduce(
    (total, dept) => total + Number(dept.employees || 0),
    0
  );

  const cards = [
    {
      title: "Total Departments",
      count: totalDepartments,
      icon: <FaBuilding />,
      color: "bg-blue-500",
    },
    {
      title: "Active Departments",
      count: activeDepartments,
      icon: <FaCheckCircle />,
      color: "bg-green-500",
    },
    {
      title: "Inactive Departments",
      count: inactiveDepartments,
      icon: <FaTimesCircle />,
      color: "bg-red-500",
    },
    {
      title: "Total Employees",
      count: totalEmployees,
      icon: <FaUsers />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">

      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Department Dashboard
        </h2>

        <button
          onClick={() => navigate("/department/add")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
        >
          + Add Department
        </button>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {cards.map((card, index) => (

          <div
            key={index}
            className={`${card.color} text-white rounded-xl shadow-lg p-5 flex justify-between items-center`}
          >
            <div>
              <p className="text-sm opacity-90">{card.title}</p>

              <h3 className="text-3xl font-bold mt-2">
                {card.count}
              </h3>
            </div>

            <div className="text-4xl opacity-80">
              {card.icon}
            </div>

          </div>

        ))}

      </div>

      {/* Search */}

      <div className="mt-8 mb-4 relative">

        <FaSearch className="absolute left-3 top-3 text-gray-400" />

        <input
          type="text"
          placeholder="Search Department..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <div className="p-4 border-b">

          <h3 className="text-xl font-bold">
            Department List
          </h3>

        </div>

        <div className="overflow-x-auto">

          <table className="min-w-full text-sm">

            <thead className="bg-gray-800 text-white">

              <tr>
                <th className="p-3 whitespace-nowrap">ID</th>
                <th className="p-3 whitespace-nowrap">Department</th>
                <th className="p-3 whitespace-nowrap">Head</th>
                <th className="p-3 whitespace-nowrap">Employees</th>
                <th className="p-3 whitespace-nowrap">Status</th>
              </tr>

            </thead>

            <tbody>

              {filteredDepartments.length > 0 ? (

                filteredDepartments.map((dept) => (

                  <tr
                    key={dept.id}
                    className="border-b hover:bg-gray-50 text-center transition"
                  >

                    <td className="p-3">{dept.id}</td>

                    <td className="p-3 font-medium">
                      {dept.name}
                    </td>

                    <td className="p-3">
                      {dept.head}
                    </td>

                    <td className="p-3">
                      {dept.employees}
                    </td>

                    <td className="p-3">

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          dept.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {dept.status}
                      </span>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="5"
                    className="p-6 text-gray-500 text-center"
                  >
                    No Department Found
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Department;