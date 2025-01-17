import styled from "styled-components";
import { useState, useEffect } from "react";

// в пропсы кидается объект юзера при мэпе
const FavoriteContainer = ({ className, user }) => {
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		const favoritesArr = JSON.parse(localStorage.getItem('favs') || '[]');
		setIsFavorite(favoritesArr.includes(user.id));
	}, [user.id]);

	const handlerChangeFavorite = () => {
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
			<span>fav</span>
			{isFavorite ? '♥' : '♡'}
		</div>
	);
};

export const Favorite = styled(FavoriteContainer)`
	color: grey;
	cursor: pointer;
	text-align: center;

	&.favorite {
		color: red;
	}

	span {
		font-size: 26px;
	}
`;
