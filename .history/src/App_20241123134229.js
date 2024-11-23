// import './App.css';
import { useState } from "react";
import { Favorite } from "./svetoslav/Favorite/Favorite";

export const App = () => {
	const [isFavorite, setIsFavorite] = useState(false)
	const someIdFive = 5
	return <div className="App">
		App
		<Favorite someId={someIdFive} isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
	</div>;
};
