import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import PropTypes from "prop-types";

export default function SliderSize({ value, title }) {
	return (
		<>
			<label
				htmlFor="title"
				className="text-black font-small-heading-24 font-semibold text-[24px] mt-[25px] mb-[18px]"
			>
				{title}
			</label>

			<Slider
				styles={{
					track: {
						background: "#FD6F00",
						height: "70%",
					},
					handle: {
						background: "#fff",
						padding: 11,
						opacity: 1,
						marginTop: -9,
						border: "3px solid #FD6F00",
					},
					rail: {
						height: "70%",
					},
					tracks: {
						background: "none",
					},
				}}
				style={{ background: "none" }}
				value={value}
				disabled
			/>
		</>
	);
}

SliderSize.propTypes = {
	value: PropTypes.number,
	title: PropTypes.string,
};
