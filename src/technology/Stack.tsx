import type { TechnologyType } from "../type";
import { RiDeleteBack2Fill } from "react-icons/ri";

interface StackProps {
    selectedTechnologies: TechnologyType[];
    setSelectedTechnologies: React.Dispatch<React.SetStateAction<TechnologyType[]>>;
}

const Stack = ({ selectedTechnologies, setSelectedTechnologies }: StackProps) => {

    const handleRemove = (technologyName: string) => {

        const remainingTechnologies = selectedTechnologies.filter(
            (technology) => technology.name !== technologyName
        );

        setSelectedTechnologies(remainingTechnologies);
    };

    const handleRemoveAll = () => {
        setSelectedTechnologies([])
    };

    return (
        <div className="container mx-auto border border-[#e9eef4] p-5 rounded-2xl">

            <div>

                <h2 className="text-[25px] font-bold mb-3">
                    Your Stack
                </h2>

                {selectedTechnologies.length === 0 ?
                    (<p className="text-[#94A3B8] text-[15px] mb-4">
                        No technologies selected yet.
                    </p>

                    ) : (
                        <p className="text-[#94A3B8] text-[15px]">
                            {selectedTechnologies.length} Technology Selected
                        </p>
                    )}

                <div className="bg-white p-4">

                    {selectedTechnologies.map((technology) => (

                        <div key={technology.name} className="flex items-center justify-between border border-gray-300 mb-4 rounded-2xl px-3 py-3">

                            <div className="flex items-center gap-3">

                                <img src={technology.icon} alt="" className="w-8 h-8" />

                                <span>{technology.name}</span>

                            </div>

                            <button
                                onClick={() => handleRemove(technology.name)}
                                className="hover:text-red-800 cursor-pointer">

                                <RiDeleteBack2Fill />
                            </button>

                        </div>

                    ))}

                    {/* Remove all btn */}
                    {selectedTechnologies.length > 0 && (
                        <button onClick={handleRemoveAll}
                            className="w-full mt-4 border border-red-300 font-medium text-red-500 py-3 px-5 rounded-xl cursor-pointer"
                        >
                            Remove All
                        </button>
                    )}

                    {selectedTechnologies.length === 0 && (
                        <button className="w-full h-15 text-[##94A3B8] rounded-2xl btn btn-dash">
                            Your stack is empty.
                        </button>
                    )}

                </div>

            </div>

        </div>
    );
};

export default Stack;