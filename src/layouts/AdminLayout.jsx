import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function AdminLayout() {


  const [sidebarOpen, setSidebarOpen] = useState(false);



  return (


    <div className="
      flex
      min-h-screen
      bg-gray-100
    ">


      {/* Sidebar */}

      <Sidebar

        sidebarOpen={sidebarOpen}

        setSidebarOpen={setSidebarOpen}

      />




      {/* Main Area */}

      <div className="
        flex-1
        flex
        flex-col
        md:ml-[250px]
        min-h-screen
        transition-all
        duration-300
      ">



        {/* Navbar */}

        <Navbar

          setSidebarOpen={setSidebarOpen}

        />





        {/* Page Content */}

        <main className="
          flex-1
          p-4
          overflow-y-auto
        ">


          <Outlet />


        </main>





        {/* Footer */}

        <Footer />



      </div>



    </div>


  );

}


export default AdminLayout;