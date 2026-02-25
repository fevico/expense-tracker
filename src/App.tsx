import Home from "./Pages/Home";

function Header() {
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center p-4 shadow-xl">
        <h3 className="text-xl font-bold">FinFlow</h3>

        <div className="flex gap-4"> 
          <h2>Features</h2>
          <h2>Pricing</h2>
          <h2>Login</h2>
        </div>
      </div>
    </div>
  );
}

function App() {
   
  return (
    <div className='bg-gray-100 h-screen'>
      <Header/>
      <div className="px-10 mt-35">
      <Home/>
      </div>
    </div>
  )
}

export default App
