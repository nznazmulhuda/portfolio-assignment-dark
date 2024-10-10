import PropTypes from "prop-types";

function TestimonialCard({ img }) {
	return (
		<>
			<div>
				<img width={"235px"} height={"235px"} src={img} alt="" />
			</div>

			<div className="w-[698px]">
				<p className="w-full h-[110px] text-[#424242] font-nav-bar-text-21 text-[21px] font-normal text-start relative tracking-[0.42px]">
					<span className="absolute -top-5 -left-5 text-[32px] font-h3-32 font-bold text-[#FD6F00]">
						&quot;
					</span>
					Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan.
					Id leo urna velit neque mattis id tellus arcu condimentum. Augue
					dictum dolor elementum convallis dignissim malesuada commodo ultrices.
					<span className="absolute -bottom-4 right-8 text-[32px] font-h3-32 font-bold text-[#FD6F00]">
						&quot;
					</span>
				</p>

				<p className="text-black font-small-heading-24 text-[24px] font-semibold tracking-[0.48px]">
					Name
				</p>

				<h1 className="text-black font-small-heading-24 text-[19px] font-medium tracking-[0.38px]">
					CEO
				</h1>
			</div>
		</>
	);
}

TestimonialCard.propTypes = {
	img: PropTypes.string,
};

export default TestimonialCard;
