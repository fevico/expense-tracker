
const Footer = () => {
  return (
    <div className="flex flex-col">
        <div className="flex gap-8 border-2 p-8 border-gray-50 mb-6">

        <div className="flex flex-col space-y-4">
            <h1 className="text-xl font-bold">Finflow</h1>
            <p>Modern financial management for everyone.</p>
        </div>

        <div className="grid grid-cols-3 space-x-40">
            <div>
                <h3 className="text-sm font-bold mb-4">Product</h3>
                <div className="text-sm">
                <h4>Features</h4>
                <h4>Pricing</h4>
                <h4>Security</h4>
                </div>
            </div>
            <div>
                <h3 className="text-sm font-bold mb-4">Company</h3>
                <div className="text-sm">
                <h4>About</h4>
                <h4>Blogs</h4>
                <h4>Carrers</h4>
                </div>
            </div>
            <div>
                <h3 className="text-sm font-bold mb-4">Legal</h3>
                <div className="text-sm">
                <h4>Privacy</h4>
                <h4>Terms</h4>
                <h4>Contact</h4>
                </div>
            </div>
        </div>
        </div>
        {/* copy right */}
        <span className="flex justify-center m-4 mb-10">
            <p>© 2026 FinFlow. All rights reserved.</p>
        </span>
    </div>
  )
}

export default Footer