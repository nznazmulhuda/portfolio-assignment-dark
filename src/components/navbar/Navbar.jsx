import styles from "./style.module.css";
import subtract from "./subtract.svg";

export const Navbar = () => {
	const links = [
		{
			path: "#home",
			title: "Home",
		},
		{
			path: "#about-me",
			title: "About Me",
		},
		{
			path: "#services",
			title: "Services",
		},
		{
			path: "#projects",
			title: "Projects",
		},
		{
			path: "#testimonials",
			title: "Testimonials",
		},
		{
			path: "#contact",
			title: "Contact",
		},
	];

	return (
		<nav className={styles["about-me"]}>
			<div className={styles.group}>
				{/* logo part */}
				<a href="#" className={styles.logo}>
					<img className={styles.subtract} alt="Subtract" src={subtract} />

					<p className={styles.mumair}>
						<span className={styles["text-wrapper"]}>M</span>
						<span className={styles.span}>umair </span>
					</p>
				</a>

				{/* links */}
				<ul className={styles.frame}>
					{links.map((link, index) => (
						<li key={index} className={styles["div-wrapper"]}>
							<a href={link.path} className={styles["text-wrapper-2"]}>
								{link.title}
							</a>
						</li>
					))}
				</ul>

				<a href="#" className={styles["overlap-group-wrapper"]}>
					<button href="#" className={styles["overlap-group"]}>
						<div className={styles["text-wrapper-3"]}>Download CV</div>
					</button>
				</a>
			</div>
		</nav>
	);
};
