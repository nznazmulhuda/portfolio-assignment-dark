import * as classes from "./style.module.css";
import PropTypes from "prop-types";

export const Btn = ({ title }) => {
	return (
		<button className={classes.btn}>
			<div className={classes.text_wrapper}>{title}</div>
		</button>
	);
};

Btn.propTypes = {
	title: PropTypes.string,
};
