import styled from "styled-components";
import { useState } from "react";

const FavoriteContainer = ({ className, user }) => {
	const [isFavorite, setIsFavorite] = useState(false);

	console.log('userName', user.name);

	const handlerChangeFavorite = () => {

		// let favoritesArr = []
		// let dataFromLS = localStorage.getItem('favs')
		// console.log('dataFromLS', dataFromLS);
		localStorage.setItem('favs',  JSON.stringify())
		setIsFavorite(!isFavorite);
		// if(dataFromLS) {

		// }


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
