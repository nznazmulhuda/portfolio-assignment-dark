import ProjectBtn from "../shared/projectBtn/ProjectBtn";
import SectionTitleDes from "../shared/sectionTitleDes/SectionTitleDes";
import ProjectCard from "./ProjectCard";
import project_1 from "../../assets/project_1.png";
import project_2 from "../../assets/project_2.png";
import project_3 from "../../assets/project_3.png";

function Projects() {
	const projects = [
		{
			img: project_1,
			category: "Web Design",
			title: "AirCalling Landing Page Design",
		},
		{
			img: project_2,
			category: "Web Design",
			title: "Business Landing Page Design",
		},
		{
			img: project_3,
			category: "Web Design",
			title: "Ecom Web Page Design",
		},
	];

	return (
		<>
			<main className="max-w-[1423px] h-[1020px] mx-auto">
				{/* section header */}
				<SectionTitleDes
					title={"My Projects"}
					description={
						"Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"
					}
				/>

				{/* projects navigations */}
				<div className="mt-[12px] flex items-center justify-center gap-[22px] mb-[106px]">
					<ProjectBtn title={"All"} />
					<ProjectBtn title={"UI/UX"} />
					<ProjectBtn title={"Web Design"} isSelect />
					<ProjectBtn title={"App Design"} />
					<ProjectBtn title={"Graphic Design"} />
				</div>

				{/* projects data */}
				<div className="grid grid-cols-3 gap-[44px]">
					{projects.map((project, index) => (
						<ProjectCard
							key={index}
							img={project.img}
							category={project.category}
							title={project.title}
						/>
					))}
				</div>
			</main>
		</>
	);
}

export default Projects;
