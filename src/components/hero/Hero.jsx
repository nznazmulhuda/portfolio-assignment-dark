import { Btn } from "../shared/btn/Btn";

export default function Hero() {
	return (
		<>
			<main className="max-w-[1400px] h-[617.24px] border border-green-500 mx-auto">
				{/* left part */}
				<aside className="w-[714px] h-full flex flex-col justify-end items-start py-[25.24px] px-[7px]">
					<h6 className="font-small-heading-24 text-black font-semibold text-[24px]">
						Hi I am{" "}
					</h6>

					<h5 className="text-[#FD6F00] font-h3-32 font-semibold leading-none text-[32px] mt-[6px]">
						Muhammad Umair
					</h5>

					<h1 className="font-main-heading-h1 text-[100px] font-bold leading-[120px]">
						UI & UX
					</h1>

					<h1 className="font-main-heading-h1 text-[100px] font-bold leading-[120px] ml-[230px]">
						Designer
					</h1>

					<p className="max-w-[698px] h-[101px] text-black font-nav-bar-text-21 font-normal text-justify mt-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vitae eveniet quos eligendi, aliquid repellendus commodi impedit dolor fugiat delectus perspiciatis error voluptas minus dicta ducimus provident praesentium fuga totam eaque asperiores iste.
					</p>

					<Btn title={"Hire Me"} />
				</aside>

				{/* right part */}
				<aside></aside>
			</main>
		</>
	);
}
