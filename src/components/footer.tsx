import FooterLogo from "../assets/logo-text.png"

const Footer = () => {
    return (
        <div className="container mx-auto p-16">

            <div className="flex flex-col md:flex-row justify-between gap-8 border-b border-gray-200 mb-8">

                {/* devStack logo */}
                <div>
                    <img src={FooterLogo} alt="Footer Logo" className="h-10 mb-3"></img>
                    <p className="text-[#64748B] mb-4">Curated tools, technologies, and resources for developers building
                        modern software.</p>
                    <ul className="flex gap-5 text-[#475569] mb-8 font-medium">
                        <li className=" hover:text-blue-600"><a href="/">GitHub</a></li>
                        <li className=" hover:text-blue-600"><a href="/">Twitter</a></li>
                        <li className=" hover:text-blue-600"><a href="/">LinkdIn</a></li>
                    </ul>
                </div>

                {/* product */}
                <div className="hidden md:block">
                    <h2 className="text-xl font-semibold mb-3">PRODUCT</h2>
                    <ul className="text-[#64748B]">
                        <li className=" hover:text-blue-600"><a href="/">Home</a></li>
                        <li className=" hover:text-blue-600"><a href="/">Technologies</a></li>
                        <li className=" hover:text-blue-600"><a href="/">Projects</a></li>
                    </ul>
                </div>

                {/*Company */}
                <div className="hidden md:block">
                    <h2 className="text-xl font-semibold mb-3">COMPANY</h2>
                    <ul className="text-[#64748B]">
                        <li className=" hover:text-blue-600"><a href="/">About</a></li>
                        <li className=" hover:text-blue-600"><a href="/">Contact</a></li>
                        <li className=" hover:text-blue-600"><a href="/">Careers</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div className="hidden md:block">
                    <h2 className="text-xl font-semibold mb-3">LEGAL</h2>
                    <ul className="text-[#64748B]">
                        <li className=" hover:text-blue-600"><a href="/">Privacy Policy</a></li>
                        <li className=" hover:text-blue-600"><a href="/">Terms of Services</a></li>
                    </ul>
                </div>

            </div>

            {/* 2026 */}
            <div className="flex justify-between">
                <p className="text-[#64748B] font-medium">© 2026 Dev Stack. All rights reserved.</p>


                <div className="flex gap-3 text-[#64748B] font-medium">
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>

            </div>

        </div>
    );
};

export default Footer;