// import './App.css';
import { Favorite } from "./svetoslav/Favorite/Favorite";

export const App = () => {
	const [isFavorite, setIsFavorite] = useS
	const someId = 5
	return <div className="App">
		App
		<Favorite someId={someId} />
		</div>;
};
