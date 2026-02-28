import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-xl font-bold mb-6">FinFlow</h2>

        <nav className="flex flex-col gap-4">
          <a href="#" className="text-gray-700 hover:text-black">Dashboard</a>
          <a href="#" className="text-gray-700 hover:text-black">Transactions</a>
          <a href="#" className="text-gray-700 hover:text-black">Analytics</a>
          <a href="#" className="text-gray-700 hover:text-black">Settings</a>
        </nav>
      </aside>

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