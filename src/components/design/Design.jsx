import SectionTitleDes from "../shared/sectionTitleDes/SectionTitleDes";

function Design() {
	return (
		<>
			<main>
				<SectionTitleDes
					title={"Lets Design Together"}
					description={
						"Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
					}
				/>

				<div className="mt-[48px] flex items-center justify-center gap-[25px]">
					<div>
						<input
							type="email"
							placeholder="Enter Your Email"
							className="bg-[#F8F8F8] border-[1px] border-[#AFAFAF] rounded-[14px] w-[627px] h-[75px] focus:outline-none outline-none placeholder:text-[#797979] placeholder:text-[21px] placeholder:font-nav-bar-text-21 py-[22px] px-[26px] text-[24px] font-small-heading-24 text-black"
						/>
					</div>

					<button className="w-[222px] h-[75px] text-center bg-[#FD6F00] rounded-[14px] text-white font-small-heading-24 text-[24px] font-semibold">
						Contact Me
					</button>
				</div>
			</main>
		</>
	);
}

export default Design;
