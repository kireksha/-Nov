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
			<span>{isFavorite ? '♥' : '♡'}</span>
		</div>
	);
};

export const Favorite = styled(FavoriteContainer)`
	color: grey;
	cursor: pointer;
	// margin: 0 auto;
	text-align: center;
	// display: flex;
	// align-items: center;

	&.favorite {
		color: red;
	}

	span {
		display: inline-flex;
		// justify-content: center;
		align-items: center;
		text-align: center;
		// width: 36px;
		// height: 36px;
		font-size: 26px;
		line-height: 1;
		margin-right: 8px;
	}
`;
