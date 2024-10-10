import PropTypes from "prop-types";

function SectionTitleDes({ title, description }) {
	return (
		<>
			{/* section title */}
			<h1 className="font-h2-65 text-[65px] text-black font-semibold mb-[15px] text-center">
				{title}
			</h1>

			{/* section description */}
			<p className="w-[932px] h-[101px] text-black font-nav-bar-text-21 text-[21px] font-normal text-center mx-auto">
				{description}
			</p>
		</>
	);
}

SectionTitleDes.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
};

export default SectionTitleDes;
