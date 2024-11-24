import styled from "styled-components";
import { useState, useEffect } from "react";

const FavoriteContainer = ({ className }) => {
	// const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {

	}, []);



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
