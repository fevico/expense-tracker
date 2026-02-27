import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center p-4 shadow-xl">
        <h3 className="text-xl font-bold">FinFlow</h3>

        <div className="flex gap-4"> 
          <h2>Features</h2>
          <h2>Pricing</h2>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Header