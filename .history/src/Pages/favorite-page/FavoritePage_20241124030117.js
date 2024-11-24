import styled from "styled-components";
import { useState, useEffect } from "react";

const FavoritePageContainer = ({ className }) => {
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

export const FavoritePage = styled(FavoritePageContainer)`
	
`;
