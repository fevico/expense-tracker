const Sidebar = () => {
    
    return ( <>
   <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-xl font-bold mb-6">FinFlow</h2>

        <nav className="flex flex-col gap-4">
          <a href="#" className="text-gray-700 hover:text-black">Dashboard</a>
          <a href="#" className="text-gray-700 hover:text-black">Transactions</a>
          <a href="#" className="text-gray-700 hover:text-black">Analytics</a>
          <a href="#" className="text-gray-700 hover:text-black">Settings</a>
        </nav>
      </aside>
    </> 
    );
}
 
export default Sidebar;