function Navbar(props) {
    return (
        <div className="bg-blue-600 p-3 text-white">
            <div className="flex justify-around">
                <div className="font-medium">Logo</div>
                <div className="flex gap-4">
                    <div>Overview</div>
                    <div>Landing</div>
                    <div>Page</div>
                    <div>App</div>
                </div>
                <div className="">Sign in</div>
            </div>
        </div>
    )
}

export default Navbar;