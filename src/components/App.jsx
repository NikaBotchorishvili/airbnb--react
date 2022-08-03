import "../App.css";
import Header from "../components/Header";
import Hero from "./Hero";
import Shop from "./Shop";

export default function App() {
	return (
		<>
			<Header />
			<Hero />
			<div className="shop-container">
				<Shop 
					img="../img1.svg"
					rating={5.0}
					reviewCount={6}
					country="USA"
					title="Life lessons with Katie Zafares"
					price={136}
				/>
			</div>
		</>
	);
}
