import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardHome from "./components/dashboard/Home";

function App() {
   
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
    <Route path="/dashboard" element={<DashboardLayout />}>
    <Route index element={<DashboardHome />} />   
    {/* <Route path="transactions" element={<Transactions />} />   
    <Route path="settings" element={<Settings />} /> */}
  </Route>

    </Routes>
  )
}

export default App
