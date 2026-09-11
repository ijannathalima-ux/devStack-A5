import { use } from "react";
import type { TechnologyType } from "../type";
import TechnologyCard from "./TechnologyCard";



interface TechnologyProps {
    technologiesDataPromise: Promise<TechnologyType[]>
}


const TechnologySection = ({technologiesDataPromise}: TechnologyProps) => {

    const technologies = use(technologiesDataPromise)

    console.log(technologies)

    return (
        <div>
            <div>
                <h2 >Explore the Technologies</h2>
                <p>Pick one technology per category to build your ideal stack.</p>
            </div>


          <TechnologyCard technologies={technologies}></TechnologyCard>
        </div>
    );
};

export default TechnologySection;