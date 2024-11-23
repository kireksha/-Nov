import styled from "styled-components";

const FavoriteContainer = ({ className, someId, isFavorite, setIsFavorite }) => {
	const handlerChangeFavorite = () => {
		setIsFavorite(!isFavorite)

	};

	return (
		<div className={className} onClick={handlerChangeFavorite}>
			Add to Favorite &#x2661
			{someId}
		</div>
	);
};

export const Favorite = styled(FavoriteContainer)`
	color: ${({ isFavorite }) => (isFavorite ? 'red' : 'grey')};
	border: 1px solid #ccc;
	width: 140px;
	cursor: pointer;
`;

