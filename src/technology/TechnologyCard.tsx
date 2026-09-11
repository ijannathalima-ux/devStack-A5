import type { TechnologyType } from "../type";

interface TechnologyCardProps {
    technologies: TechnologyType[];
}

const TechnologyCard = ({ technologies }: TechnologyCardProps) => {

    console.log(technologies, "technology info");

    return (
        <div>
            {
                technologies.map((technology) => (
                    <div key={technology.name}>
                        {technology.name}
                    </div>
                ))
            }
        </div>
    );
};

export default TechnologyCard;

