import subtract from "../../assets/logo.png";
import facebook from "../../assets/facebook.svg";
import insta from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import twiter from "../../assets/twitter.svg";

function Footer() {
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
		<>
			<footer className="mt-[139px] pt-[109px] pb-[62px] flex flex-col items-center bg-[#F8F8F8]">
				{/* logo */}
				<a href="#" className="flex items-center gap-[20px]">
					<img alt="Subtract" src={subtract} />

					<p className="text-[48px] font-">
						<span className="text-[#1E1E1E] font-bold">M</span>
						<span className="text-[#545454]">umair </span>
					</p>
				</a>

				{/* links */}
				<div className="mt-[65px] flex items-center gap-[12px ]">
					{links.map((link) => (
						<a key={link.path} href={link.path}>
							<button className="px-[14px] py-[10px] text-black font-nav-bar-text-21 text-[21px]">
								{link.title}
							</button>
						</a>
					))}
				</div>

				{/* social link */}
				<div className="mt-[80.52px] flex items-center gap-[25.03px]">
					<a href="http://" target="_blank" rel="noopener noreferrer">
						<img src={facebook} alt="facebook" />
					</a>

					<a href="http://" target="_blank" rel="noopener noreferrer">
						<img src={twiter} alt="twiter" />
					</a>

					<a href="http://" target="_blank" rel="noopener noreferrer">
						<img src={insta} alt="instagram" />
					</a>

					<a href="http://" target="_blank" rel="noopener noreferrer">
						<img src={linkedin} alt="linkedin" />
					</a>
				</div>
			</footer>

			{/* copyright */}
			<div className="w-full bg-[#545454] text-center py-[26px] text-white">
				&copy; 2023 <span className="text-[#FD6F00] font-bold">Mumair</span> All
				Rights Reserved , Inc.
			</div>
		</>
	);
}

export default Footer;
