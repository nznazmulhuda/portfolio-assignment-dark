import PropTypes from "prop-types";

function ServiceCard({ img, title, description }) {
	return (
		<>
			<main className="h-[346px] bg-[#F8F8F8] rounded-[14px] px-[18px] flex flex-col justify-end items-baseline">
				<img src={img} alt="" />

				<h1 className="font-h3-32 font-semibold text-[32px] text-black mt-[26px] mb-[15px]">
					{title}
				</h1>

				<p className="h-[120px] w-[290px] text-black font-nav-bar-text-21 text-[19px] font-normal">
					{description}
				</p>
			</main>
		</>
	);
}

ServiceCard.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
};

export default ServiceCard;
