import Design from "./components/design/Design";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Hero2 from "./components/hero2/Hero2";
import { Navbar } from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonial/Testimonial";

export default function App() {
	return (
		<main>
			<Navbar />

			<section id="home" className="mt-[100px]">
				<Hero />
			</section>

			<section id="about-me" className="mt-[69.52px]">
				<Hero2 />
			</section>

			<section id="services" className="mt-[139px]">
				<Services />
			</section>

			<section id="projects" className="mt-[139px]">
				<Projects />
			</section>

			<section id="testimonials" className="mt-[139px]">
				<Testimonial />
			</section>

			<section id="contact" className="mt-[139px]">
				<Design />
			</section>

			<Footer />
		</main>
	);
}
