// import './App.css';
import { useState } from "react";
import { Favorite } from "./svetoslav/Favorite/Favorite";

export const App = () => {
	const [isFavorite, setIsFavorite] = useState(false)
	const arrUsers = [{name: 'Ivan', id: 1}, {name: 'Petr', id: 2}]
	const someIdFive = 5
	return <div className="App">
		App
		{arrUsers.map((user) => (
			<Favorite user={user} isFavorite={isFavorite} setIsFavorite={setIsFavorite} key={/>
		))}

	</div>;
};
