import Logo from "../assets/logo-text.png"

const Navbar = () => {
    return (
        <nav className=" container mx-auto mt-4">
            <div className="flex justify-between ">
                <img src={Logo} alt="" />

                <ul className=" flex gap-4 items-center">
                    <li className="text-fuchsia-600">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div>
                    <button className="btn btn-outline rounded-full  border-none">Sign in</button>

                    {/* <button className="btn bg-fuchsia-700 text-white rounded-full  border-none">Sign Up</button> */}
                    <button className="btn btn-secondary rounded-full border-none">Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
