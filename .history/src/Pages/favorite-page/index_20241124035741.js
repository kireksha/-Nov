import styled from "styled-components";
import { useState, useEffect } from "react";
import { requestGetAllCoders } from "../main-page/request-get-all-coders/request-get-all-coders";

const FavoritePageContainer = ({ className }) => {
	const [coders, setCoders] = useState([]);
	const [filteredCoders, setFilteredCoders] = useState([]);

	useEffect(() => {
		// Загружаем список кодеров
		requestGetAllCoders().then((data) => {
			setCoders(data);
		});
	}, []);

	useEffect(() => {
		// Получаем список избранных кодеров из localStorage
		const favoritesArr = JSON.parse(localStorage.getItem('favs') || '[]');

		const filtered = coders.filter(coder => favoritesArr.includes(coder.id));
		setFilteredCoders(filtered);
	}, [coders]);

	const removeFromFavorites = (coderId) => {
		let favoritesArr = JSON.parse(localStorage.getItem('favs') || '[]');

		favoritesArr = favoritesArr.filter(id => id !== coderId);

		localStorage.setItem('favs', JSON.stringify(favoritesArr));

		setFilteredCoders(filteredCoders.filter(coder => coder.id !== coderId));
	};

	return (
		<>
			<h2>Избранные</h2>
			{filteredCoders.length > 0 ? (
				<ul>
					{filteredCoders.map(coder => (
						<div className="coder_item" key={coder.id}>
							<img src={coder.avatar} alt={coder.name} className="coder-avatar" />
							<li>{coder.name}</li>
							<button onClick={() => removeFromFavorites(coder.id)}>Удалить из избранного</button>
							<hr />
						</div>
					))}
				</ul>
			) : (
				<p>Нет избранных кодеров</p>
			)}
		</>
	);
};

export const FavoritePage = styled(FavoritePageContainer)`
	.coder-avatar {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		object-fit: cover;
		overflow: hidden;
	}
`;
