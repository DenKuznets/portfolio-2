import Section from "@/components/Section/Section"


const Project = ({ params }: {params:{id:string}}) => {
    return <Section description={true} projectId={parseInt(params.id)} />;
};

export default Project

