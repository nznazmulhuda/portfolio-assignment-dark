import heroImage from "../../assets/hero2.svg";

function Hero2() {
	return (
		<main className="flex items-center justify-between w-[1470px] h-[675px]">
			{/* left side */}
			<aside className="relative w-[681px] h-[675px]">
				<img src={heroImage} alt="second hero image" />

				<div className="w-[374px] h-[83px] bg-[rgba(253,111,0,0.6)] absolute top-[111px] left-[153px]"></div>
			</aside>

			{/* right side */}
			<aside className="w-[753px] h-full flex flex-col justify-center">
				<h1 className="font-h2-65 font-semibold text-[65px] text-black">
					About Me
				</h1>

				<p className="w-[756px] h-[101px] text-black font-nav-bar-text-21 text-[21px] font-normal">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
					dolores mollitia doloremque officia sed rem accusantium quae eos,
					itaque in quibusdam culpa, nihil dolore? Aperiam quaerat commodi
					aliquam voluptatem quibusdam.
				</p>
			</aside>
		</main>
	);
}

export default Hero2;
