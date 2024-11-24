import styled from "styled-components";
import { useState, useEffect } from "react";

const FavoriteContainer = ({ className, user }) => {
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		const favoritesArr = JSON.parse(localStorage.getItem('favs') || '[]');
		setIsFavorite(favoritesArr.includes(user.id));
	}, [user.id]);

	const handlerChangeFavorite = (event) => {
		event.preventDefault();
		let favoritesArr = JSON.parse(localStorage.getItem('favs') || '[]');

		if (isFavorite) {
			favoritesArr = favoritesArr.filter(id => id !== user.id);
		} else {
			favoritesArr.push(user.id);
		}

		localStorage.setItem('favs', JSON.stringify(favoritesArr));
		setIsFavorite(!isFavorite);
	};

	return (
		<div className={`${className} ${isFavorite ? 'favorite' : ''}`} onClick={handlerChangeFavorite}>
			{isFavorite ? '♥' : '♡'}
		</div>
	);
};

export const Favorite = styled(FavoriteContainer)`
	color: grey;
	cursor: pointer;
	font-size: 50px;
	&.favorite {
		color: red;
	}
`;
