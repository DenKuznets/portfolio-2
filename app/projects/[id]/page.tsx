import Section from "@/components/Section/Section"
import { StaticParamsType } from "../page";


const Project = ({ params }: StaticParamsType) => {
    return <Section description={true} projectId={parseInt(params.id)} />;
};

export default Project

