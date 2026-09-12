import { FaStar } from "react-icons/fa";
import type { TechnologyType } from "../type";
import Stack from "./Stack";
import { Bounce, toast } from "react-toastify";

interface TechnologyCardProps {
    technologies: TechnologyType[];
    selectedTechnologies: TechnologyType[];
    setSelectedTechnologies: React.Dispatch<React.SetStateAction<TechnologyType[]>>;
}

const TechnologyCard = ({ technologies, selectedTechnologies, setSelectedTechnologies }: TechnologyCardProps) => {

    const handleAddToStack = (technology: TechnologyType) => {

        setSelectedTechnologies([...selectedTechnologies, technology]);

        toast.success('Technology added to your stack!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    };

    return (
        <div className="border-b border-gray-200 mb-6">
            <div className="grid grid-cols-12 container mx-auto px-4 py-8 gap-9">

                {/* technologies card */}
                <div className="col-span-12 lg:col-span-9 gap-6 grid grid-cols-1 lg:grid-cols-3">

                    {technologies.map((technology) => {

                        const isSelected = selectedTechnologies.some(
                            (item) => item.id === technology.id
                        );

                        return (
                            <div
                                key={technology.name}
                                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:scale-105 transition-transform duration-300"
                            >

                                <div>

                                    <div className="flex justify-between items-start mb-4">

                                        {/* technologies icon */}
                                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50">
                                            <img
                                                src={technology.icon}
                                                alt=""
                                                className="w-8 h-8"
                                            />
                                        </div>

                                        {/* technologies badge */}
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E0F2FE] text-[#0EA5E9] border border-[#0EA5E9]">
                                            {technology.badge}
                                        </span>

                                    </div>

                                    {/* technologies name */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {technology.name}
                                    </h3>

                                    {/* technologies description */}
                                    <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
                                        {technology.description}
                                    </p>

                                </div>

                                <div>

                                    <div className="flex items-center justify-between text-xs font-medium text-gray-600 mb-5">

                                        <div className="flex gap-2">

                                            {/* technologies category */}
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-md">
                                                {technology.category}
                                            </span>

                                            {/* technologies difficulty */}
                                            <span className="bg-gray-100 px-2.5 py-1 rounded-md">
                                                {technology.difficulty}
                                            </span>

                                        </div>

                                        <div className="flex items-center gap-1 text-gray-800">
                                            <FaStar className="text-amber-400" />

                                            {/* technologies rating */}
                                            <span className="font-bold">
                                                {technology.rating}
                                            </span>
                                        </div>

                                    </div>

                                </div>

                                <div>

                                    <button
                                        onClick={() => handleAddToStack(technology)}
                                        disabled={isSelected}
                                        className={`w-full py-3 rounded-xl font-semibold text-sm transition-colors ${isSelected
                                                ? " border border-[#0EA5E9] bg-[#E0F2FE] text-[#0EA5E9] cursor-not-allowed" : "bg-[#0A0F1D] text-white cursor-pointer"

                                            }`}>
                                        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
                                    </button>

                                </div>

                            </div>
                        );
                    })}

                </div>

                {/* stack card */}
                <div className="col-span-12 lg:col-span-3 ">
                    <Stack
                        selectedTechnologies={selectedTechnologies}
                        setSelectedTechnologies={setSelectedTechnologies}
                    />
                </div>

            </div>
        </div>
    );
};

export default TechnologyCard;