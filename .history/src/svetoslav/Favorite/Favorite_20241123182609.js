// import styled from "styled-components";
// import { useState } from "react";

// const FavoriteContainer = ({ className, user }) => {
// 	const [isFavorite, setIsFavorite] = useState(false);

// 	const handlerChangeFavorite = () => {
// 		let favoritesArr = localStorage.getItem('favs')
// 			? JSON.parse(localStorage.getItem('favs'))
// 			: [];

// 		setIsFavorite(!isFavorite);
// 		if(isFavorite){
// 			favoritesArr.push(user.id)
// 			localStorage.setItem('favs', JSON.stringify(favoritesArr))
// 		} else {
// 			favoritesArr.splice(user.id, 1)
// 		}
// 	};

// 	return (
// 		<div className={`${className} ${isFavorite ? 'favorite' : ''}`} onClick={handlerChangeFavorite}>
// 			<span>{isFavorite ? '♥' : '♡'}</span>
// 		</div>
// 	);
// };

// export const Favorite = styled(FavoriteContainer)`
// 	color: grey;
// 	cursor: pointer;
// 	display: flex;
// 	align-items: center;

// 	&.favorite {
// 		color: red;
// 	}

// 	span {
// 		display: inline-flex;
// 		justify-content: center;
// 		align-items: center;
// 		width: 16px;
// 		height: 16px;
// 		font-size: 16px;
// 		line-height: 1;
// 		margin-right: 8px;
// 	}
// `;
import styled from "styled-components";
import { useState, useEffect } from "react";

const FavoriteContainer = ({ className, user }) => {
	const [isFavorite, setIsFavorite] = useState(false);

	// Синхронизируем `isFavorite` с `localStorage` при загрузке компонента
	useEffect(() => {
		const favoritesArr = JSON.parse(localStorage.getItem('favs') || '[]');
		setIsFavorite(favoritesArr.includes(user.id));
	}, [user.id]);

	const handlerChangeFavorite = () => {
		let favoritesArr = JSON.parse(localStorage.getItem('favs') || '[]');

		if (isFavorite) {
			favoritesArr = favoritesArr.filter(id => id !== user.id);
		} else {
			// Добавляем `user.id` в массив
			favoritesArr.push(user.id);
		}

		// Обновляем localStorage и состояние
		localStorage.setItem('favs', JSON.stringify(favoritesArr));
		setIsFavorite(!isFavorite);
	};

	return (
		<div className={`${className} ${isFavorite ? 'favorite' : ''}`} onClick={handlerChangeFavorite}>
			<span>{isFavorite ? '♥' : '♡'}</span>
		</div>
	);
};

export const Favorite = styled(FavoriteContainer)`
	color: grey;
	cursor: pointer;
	display: flex;
	align-items: center;

	&.favorite {
		color: red;
	}

	span {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 16px;
		height: 16px;
		font-size: 16px;
		line-height: 1;
		margin-right: 8px;
	}
`;
