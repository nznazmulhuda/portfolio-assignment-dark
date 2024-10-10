import Hero from "./components/hero/Hero";
import Hero2 from "./components/hero2/Hero2";
import { Navbar } from "./components/navbar/Navbar";
import Services from "./components/services/Services";

export default function App() {
	return (
		<main>
			<Navbar />

			<section className="mt-[100px]">
				<Hero />
			</section>

			<section className="mt-[69.52px]">
				<Hero2 />
			</section>

			<section className="mt-[139px]">
				<Services />
			</section>
		</main>
	);
}
