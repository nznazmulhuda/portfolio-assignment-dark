import SectionTitleDes from "../shared/sectionTitleDes/SectionTitleDes";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";
import testimonial from "../../assets/testimonial.png";
import testimonial_2 from "../../assets/testimonial_2.png";

function Testimonial() {
	return (
		<>
			<main>
				<SectionTitleDes
					title={"Testimonials"}
					description={
						"Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
					}
				/>

				<div className="mt-[72px]">
					<Swiper
						slidesPerView={"auto"}
						centeredSlides={true}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
						className="h-[344px]"
					>
						<SwiperSlide className="border bg-[#F8F8F8] rounded-[14px] flex items-center justify-between p-[48px]">
							<TestimonialCard img={testimonial_2} />
						</SwiperSlide>

						<SwiperSlide className="border bg-[#F8F8F8] rounded-[14px] flex items-center justify-between p-[48px]">
							<TestimonialCard img={testimonial} />
						</SwiperSlide>

						<SwiperSlide className="border bg-[#F8F8F8] rounded-[14px] flex items-center justify-between p-[48px]">
							<TestimonialCard img={testimonial_2} />
						</SwiperSlide>

						<SwiperSlide className="border bg-[#F8F8F8] rounded-[14px] flex items-center justify-between p-[48px]">
							<TestimonialCard img={testimonial} />
						</SwiperSlide>
					</Swiper>
				</div>
			</main>
		</>
	);
}

export default Testimonial;
