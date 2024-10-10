import PropTypes from "prop-types";

function ProjectBtn({ isSelect, title }) {
	return (
		<button
			className={`py-[10px] px-[20px] border-[0.4px] rounded-[12px] font-small-heading-24 text-[24px] font-normal ${
				isSelect
					? "bg-[#FD6F00] text-[#fff] border-[#FD6F00]"
					: "bg-[#F8F8F8] text-[#000] border-[#545454]"
			}`}
		>
			{title}
		</button>
	);
}

ProjectBtn.propTypes = {
	isSelect: PropTypes.bool,
	title: PropTypes.string,
};

export default ProjectBtn;
