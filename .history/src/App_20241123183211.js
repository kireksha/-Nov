// import './App.css';

import { Favorite } from "./svetoslav/Favorite/Favorite";

export const App = () => {

	return <div className="App">
		App
		{arrUsers.map((user) => (
			<Favorite user={user} key={user.id}/>
		))}

	</div>;
};
