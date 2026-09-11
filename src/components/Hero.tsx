import BannerImage from "../assets/banner-stack.png"

const Hero = () => {
    return (
        <div className="flex justify-between items-center gap-5 container mx-auto py-8">
            <div>
                <h1 className="text-6xl font-bold mb-5">Build Your Ideal <br></br>
                    <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Development Stack
                    </span>

                </h1>


                <p className="text-[#475569] mb-8 text-[19px]">Explore frontend, backend, database, and tooling options,<br></br>
                    compare them side by side, and put together the stack that fits your
                    next project.</p>


                <div className="flex gap-4">
                    <button className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 py-2 px-5 rounded-2xl text-[#FFFFFF] font-medium hover:scale-105 transition-transform duration-200 cursor-pointer">Explore Technologies</button>
                    <button className="border border-gray-300 bg-[#E5E7EB] text-[#374151] py-2 px-9 font-medium rounded-2xl hover:scale-105 transition-transform duration-200 cursor-pointer">Learn More</button>
                </div>

            </div>

            <img src={BannerImage} alt="Banner Image" className="max-w-130 h-120"></img>


        </div>
    );
};

export default Hero;