import "../App.css";
import Header from "../components/Header";
import Hero from "./Hero";
import Card from "./Card";
import data from "./data"
export default function App() {


	let itemsElements = data.map((item) => {
		return <Card
			key={item.id}
			item={item}
		/>
	})

	return (
		<>
			<Header />
			<Hero />
			<div className="cards-container">
				{ itemsElements }
			</div>
		</>
	);
}
