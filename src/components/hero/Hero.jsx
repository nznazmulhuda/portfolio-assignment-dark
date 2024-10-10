import { Btn } from "../shared/btn/Btn";
import hero from "../../assets/hero.png";
import facebook from "../../assets/fb_w.png";
import insta from "../../assets/in_w.png";
import linkedin from "../../assets/ln_w.png";
import twiter from "../../assets/tw_w.png";

export default function Hero() {
	return (
		<>
			<main className="max-w-[1400px] h-[617.24px] mx-auto flex items-end justify-between">
				{/* left part */}
				<aside className="w-[714px] h-full flex flex-col justify-end items-start py-[25.24px] px-[7px]">
					<h6 className="font-small-heading-24 text-white font-semibold text-[24px]">
						Hi I am{" "}
					</h6>

					<h5 className="text-[#FD6F00] font-h3-32 font-semibold leading-none text-[32px] mt-[6px]">
						Muhammad Umair
					</h5>

					<h1 className="font-main-heading-h1 text-[100px] font-bold leading-[120px] text-white">
						UI & UX
					</h1>

					<h1 className="font-main-heading-h1 text-[100px] font-bold leading-[120px] ml-[230px] text-white">
						Designer
					</h1>

					<p className="max-w-[698px] h-[101px] text-white font-nav-bar-text-21 font-normal text-justify mt-6 text-[21px]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
						praesentium quibusdam, adipisci ipsam vero, nulla in accusamus rem
						iure modi provident nihil.
					</p>

					<Btn title={"Hire Me"} />
				</aside>

				{/* right part */}
				<aside>
					<div className="relative">
						<img src={hero} alt="hero-image" />

						<div className="w-[374px] h-[83px] bg-[rgba(253,111,0,0.6)] absolute top-[78px] left-1/2 -translate-x-1/2"></div>

						<div className="flex items-center gap-[25.03px] justify-end absolute left-1/2 -translate-x-1/2 mt-5">
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
					</div>
				</aside>
			</main>
		</>
	);
}
