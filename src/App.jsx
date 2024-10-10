import Hero from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";

export default function App() {
	return (
		<main>
			<Navbar />

			<section className="mt-[100px]">
				<Hero />
			</section>
		</main>
	);
}
