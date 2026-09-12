import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
    return (
        <nav className="container mx-auto mt-4 sticky top-0 z-50 bg-white">
            <div className="relative flex justify-between items-center px-4">


                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost p-0">
                        <RxHamburgerMenu className="text-2xl" />
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu menu-sm mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="text-fuchsia-600"><a>Home</a></li>
                        <li><a>Technologies</a></li>
                        <li><a>Projects</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>

                <img
                    src={Logo} alt="Logo"
                    className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0" />

                <ul className="hidden md:flex gap-4 items-center">
                    <li className="text-fuchsia-600">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>


                <div className="flex gap-2 items-center">
                    <button className="btn btn-outline rounded-full border-none">Sign in</button>
                    <button className="btn btn-secondary rounded-full border-none">Sign Up</button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
