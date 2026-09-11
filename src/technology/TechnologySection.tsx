import { use } from "react";
import type { TechnologyType } from "../type";
import TechnologyCard from "./TechnologyCard";



interface TechnologyProps {
    technologiesDataPromise: Promise<TechnologyType[]>
}


const TechnologySection = ({ technologiesDataPromise }: TechnologyProps) => {

    const technologies = use(technologiesDataPromise)

    console.log(technologies)

    return (
        <div>
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-4">Explore the <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span></h2>
                <p className="text-[#64748B]">Pick one technology per category to build your ideal stack.</p>
            </div>


            <TechnologyCard technologies={technologies}></TechnologyCard>
        </div>
    );
};

export default TechnologySection;