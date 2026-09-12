import { RxHamburgerMenu } from "react-icons/rx";
import NavbarLogo from "../assets/logo-text.png";

const Navbar = () => {

    return (
        <nav className="border-b border-gray-200 bg-white sticky top-0 z-40">
            <div className="flex items-center gap-3 md:justify-between md:gap-5 container mx-auto py-7 px-4">


                {/* hamburger */}
                <button className="md:hidden cursor-pointer">
                    <RxHamburgerMenu size={28} />
                </button>


                <img src={NavbarLogo} alt="Navbar Logo" className="h-10"></img>

                <ul className="hidden md:flex justify-between items-center gap-5 text-[#475569] font-semibold cursor-pointer">

                    <li><a href="/"><span className="text-[#DB2777]">Home</span></a></li>
                    <li><a href="/">Technologies</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>

                </ul>

                <div className="flex gap-3 font-semibold">
                    <button className=" py-2 px-5 rounded-2xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200">Sign In</button>
                    <button className="bg-[#D91B7E] text-white py-2 px-5 rounded-2xl cursor-pointer hover:bg-pink-500 hover:scale-105 transition-transform duration-200">Sign Up</button>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;