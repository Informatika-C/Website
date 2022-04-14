function Navbar(props) {
    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 text-white">
            <div className="flex justify-around">
                <div>
                    <div className="font-medium cursor-pointer hover:font-bold absolute">Logo</div>
                </div>
                <div className="flex gap-4 cursor-pointer">
                    <div className="hover:font-bold">Home</div>
                    <div className="hover:font-bold">Product</div>
                    <div className="hover:font-bold">Page</div>
                    <div className="hover:font-bold">About Us</div>
                </div>
                <div className="cursor-pointer hover:font-bold">Sign in</div>
            </div>
        </div>
    )
}

export default Navbar;