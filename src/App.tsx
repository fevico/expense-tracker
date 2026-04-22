import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardHome from "./components/dashboard/Home";
import TransactionsPage from "./components/dashboard/transactions/Index";
import MyCards from "./components/dashboard/cards/Index";
import AnalyticsPage from "./components/dashboard/analytics/Index";

function App() {
   
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
    <Route path="/dashboard" element={<DashboardLayout />}>
    <Route index element={<DashboardHome />} />   
    <Route path="transactions" element={<TransactionsPage />} />   
    <Route path="cards" element={<MyCards />} />   
    <Route path="analytics" element={<AnalyticsPage />} />   
    {/* <Route path="settings" element={<Settings />} /> */}
  </Route>

    </Routes>
  )
}

export default App
