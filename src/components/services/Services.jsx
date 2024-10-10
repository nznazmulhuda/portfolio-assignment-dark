import SectionTitleDes from "../shared/sectionTitleDes/SectionTitleDes";
import ServiceCard from "./ServiceCard";
import ui from "../../assets/ui.png";
import web from "../../assets/web.png";
import app from "../../assets/app.png";
import graphic from "../../assets/graphic.png";

function Services() {
	const services = [
		{
			img: ui,
			title: "UI/UX",
			description:
				"Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
		},
		{
			img: web,
			title: "UI/UX",
			description:
				"Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
		},
		{
			img: app,
			title: "UI/UX",
			description:
				"Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
		},
		{
			img: graphic,
			title: "UI/UX",
			description:
				"Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
		},
	];

	return (
		<>
			<main className="w-[1413px] h-[584px] mx-auto">
				{/* section header */}
				<SectionTitleDes
					title={"Services"}
					description={
						"Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet done morbi convallis pretium"
					}
				/>

				<div className="grid grid-cols-4 gap-[31px]">
					{services.map((service, index) => (
						<ServiceCard
							key={index}
							img={service.img}
							title={service.title}
							description={service.description}
						/>
					))}
				</div>
			</main>
		</>
	);
}

export default Services;
