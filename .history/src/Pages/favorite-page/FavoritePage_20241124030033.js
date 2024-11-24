import styled from "styled-components";
import { useState, useEffect } from "react";

const FavoriteContainer = ({ className }) => {
	// const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {

	}, []);

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
			<span></span>
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
