import styled from "styled-components";
import { useState, useEffect } from "react";
import { requestGetAllCoders } from "../main-page/request-get-all-coders/request-get-all-coders";

const FavoritePageContainer = ({ className }) => {
	// const [isFavorite, setIsFavorite] = useState(false);
	const [coders, setCoders] = useState([]);
	let favoritesArr = JSON.parse(localStorage.getItem('favs') || '[]');
	console.log('favoritesArr', favoritesArr);

	useEffect(() => {
		requestGetAllCoders().then((data) => setCoders(data));
		localStorage.getItem('favs')
	}, []);

	if(favoritesArr.length) {
		
	}



	return (
		<>
			I'm fav page
		</>
	);
};

export const FavoritePage = styled(FavoritePageContainer)`

`;
