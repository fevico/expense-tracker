import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-end px-6">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Admin</span>
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
          {/* Your cards, charts etc go here */}

          <Outlet/>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;