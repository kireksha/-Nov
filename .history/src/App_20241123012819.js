// import './App.css';
import { useState } from "react";
import { Favorite } from "./svetoslav/Favorite/Favorite";

export const App = () => {
	const [isFavorite, setIsFavorite] = useState
	const someId = 5
	return <div className="App">
		App
		<Favorite someId={someId} isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
		</div>;
};
