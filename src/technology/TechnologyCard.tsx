import { FaStar } from "react-icons/fa";
import type { TechnologyType } from "../type";
import Stack from "./Stack";

interface TechnologyCardProps {
    technologies: TechnologyType[];
}

const TechnologyCard = ({ technologies }: TechnologyCardProps) => {

    return (
        <div className="grid grid-cols-12 container mx-auto px-4 py-8 gap-9">

            <div className="col-span-8 gap-6 grid grid-cols-3 ">

                {technologies.map((technology) => (
                    <div
                        key={technology.name}
                        className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:scale-105 transition-transform duration-300"
                    >
                        <div>
                            <div className="flex justify-between items-start mb-4">

                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50">

                                    <img src={technology.icon} alt="" className="w-8 h-8" />
                                </div>

                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E0F2FE] text-[#0EA5E9] border border-[#0EA5E9]">
                                    {technology.badge}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2">{technology.name}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
                                {technology.description}
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center justify-between text-xs font-medium text-gray-600 mb-5">
                                <div className="flex gap-2">
                                    <span className="bg-gray-100 px-2.5 py-1 rounded-md">{technology.category}</span>
                                    <span className="bg-gray-100 px-2.5 py-1 rounded-md">{technology.difficulty}</span>
                                </div>

                                <div className="flex items-center gap-1 text-gray-800">
                                    <FaStar className="text-amber-400" />
                                    <span className="font-bold">{technology.rating}</span>
                                </div>
                            </div>

                            <button className="w-full bg-[#0A0F1D] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#151f79] transition-colors cursor-pointer">
                                Add to Stack
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="col-span-4">
                <Stack/>
            </div>
        </div>
    );
};

export default TechnologyCard;


