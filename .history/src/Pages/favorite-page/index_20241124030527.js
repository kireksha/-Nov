import styled from "styled-components";
import { useState, useEffect } from "react";

const FavoritePageContainer = ({ className }) => {
	// const [isFavorite, setIsFavorite] = useState(false);
	const [coders, setCoders] = useState([]);
	useEffect(() => {
		requestGetAllCoders().then((data) => setCoders(data));
	}, []);

	useEffect(() => {

	}, []);



	return (
		<>
			I'm fav page
		</>
	);
};

export const FavoritePage = styled(FavoritePageContainer)`

`;