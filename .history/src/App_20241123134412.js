// import './App.css';
import { useState } from "react";
import { Favorite } from "./svetoslav/Favorite/Favorite";

export const App = () => {
	const [isFavorite, setIsFavorite] = useState(false)
	const arrUsers = [{name: Ivan, id: 1}, {name: Ni, id: 2}]
	const someIdFive = 5
	return <div className="App">
		App
		<Favorite someIdFive={someIdFive} isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
	</div>;
};
