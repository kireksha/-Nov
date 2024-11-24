import styled from "styled-components";

const FavoriteContainer = ({ className, someId, isFavorite, setIsFavorite }) => {
	
	return (
		<>
			<div className={className} onClick={handlerChangeFavorite}>
				Add to Favorite
				{someId}
			</div>
		</>
	)
}

export const Favorite = styled(FavoriteContainer)`
	color: ${({ isFavorite }) => (isFavorite ? 'red' : 'grey')};
	border: 1px solid #ccc;
	width: 140px;
`
