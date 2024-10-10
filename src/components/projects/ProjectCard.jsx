import PropTypes from "prop-types";

function ProjectCard({ img, category, title }) {
	return (
		<div className="h-[489px] rounded-[12px] bg-[#FFEBDB]">
			<div className="relative h-full">
				<img src={img} alt="" className="absolute right-[24px]" />
			</div>

			<h3 className="text-[#FD6F00] font-nav-bar-text-21 text-[19px] font-normal mt-[37px] mb-[10px]">
				{category}
			</h3>

			<h1 className="text-black font-small-heading-24 text-[24px] font-bold">
				{title}
			</h1>
		</div>
	);
}

ProjectCard.propTypes = {
	img: PropTypes.string,
	category: PropTypes.string,
	title: PropTypes.string,
};

export default ProjectCard;
