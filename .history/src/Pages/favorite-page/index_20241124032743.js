
import styled from "styled-components";
import { useState, useEffect } from "react";
import { requestGetAllCoders } from "../main-page/request-get-all-coders/request-get-all-coders";

const FavoritePageContainer = ({ className }) => {
	const [coders, setCoders] = useState([]);
	const [filteredCoders, setFilteredCoders] = useState([]);
	let favoritesArr = JSON.parse(localStorage.getItem('favs') || '[]');

	useEffect(() => {
		// Загружаем список кодеров
		requestGetAllCoders().then((data) => {
			setCoders(data);
		});
	}, []);

	useEffect(() => {
		// Фильтруем кодеров, оставляем только тех, чьи id есть в списке избранного
		const filtered = coders.filter(coder => favoritesArr.includes(coder.id));
		setFilteredCoders(filtered);
	}, [coders, favoritesArr]); // Этот useEffect будет срабатывать, когда изменится coders или favoritesArr

	return (
		<>
			<h1>Избранные</h1>
			{/* Выводим отфильтрованных кодеров */}
			{filteredCoders.length > 0 ? (
				<ul>
					{filteredCoders.map(coder => (
						<li key={coder.id}>{coder.name}</li> // замените "name" на нужное поле
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
