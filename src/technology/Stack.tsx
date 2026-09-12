import type { TechnologyType } from "../type";

interface StackProps {
    selectedTechnologies: TechnologyType[];
    setSelectedTechnologies: React.Dispatch<React.SetStateAction<TechnologyType[]>>;
}

const Stack = ({
    selectedTechnologies,
    setSelectedTechnologies
}: StackProps) => {

    const handleRemove = (technologyName: string) => {

        const remainingTechnologies = selectedTechnologies.filter(
            (technology) => technology.name !== technologyName
        );

        setSelectedTechnologies(remainingTechnologies);
    };

    return (
        <div className="container mx-auto border border-[#e9eef4] p-5 rounded-2xl">

            <div>

                <h2 className="text-[25px] font-bold mb-3">
                    Your Stack
                </h2>

                <p className="text-[#94A3B8] text-[19px]">
                    {selectedTechnologies.length} technologies selected.
                </p>

                <div className="bg-white p-4">

                    {selectedTechnologies.map((technology) => (

                        <div
                            key={technology.name}
                            className="flex items-center justify-between border-b py-3"
                        >

                            <div className="flex items-center gap-3">

                                <img
                                    src={technology.icon}
                                    alt=""
                                    className="w-8 h-8"
                                />

                                <span>
                                    {technology.name}
                                </span>

                            </div>

                            <button
                                onClick={() => handleRemove(technology.name)}
                                className="text-red-500 cursor-pointer"
                            >
                                Remove
                            </button>

                        </div>

                    ))}

                    {selectedTechnologies.length === 0 && (
                        <button className="w-full h-15 rounded-2xl btn btn-dash">
                            Your stack is empty.
                        </button>
                    )}

                </div>

            </div>

        </div>
    );
};

export default Stack;