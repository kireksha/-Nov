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
		const favoritesArr = JSON.parse(localStorage.getItem('favs') || '[]');

		const filtered = coders.filter(coder => favoritesArr.includes(coder.id));
		setFilteredCoders(filtered);
	}, [coders]);

	return (
		<>
			<h2>Избранные</h2>
			{filteredCoders.length > 0 ? (
				<ul>
					{filteredCoders.map(coder => (
						<div className="coder_item">
							<li key={coder.id}>{coder.name}</li>
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
	/* Ваши стили */
`;
