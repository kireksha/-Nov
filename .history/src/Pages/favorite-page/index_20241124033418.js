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
		// Получаем список избранных кодеров только один раз
		const favoritesArr = JSON.parse(localStorage.getItem('favs') || '[]');

		// Фильтруем кодеров, оставляем только тех, чьи id есть в списке избранного
		const filtered = coders.filter(coder => favoritesArr.includes(coder.id));
		setFilteredCoders(filtered);
	}, [coders]); // Этот useEffect будет срабатывать, когда изменится coders

	return (
		<>
			<h2>Избранные</h2>
			{filteredCoders.length > 0 ? (
				<ul>
					{filteredCoders.map(coder => (
						<li key={coder.id}>{coder.name}</li>
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
