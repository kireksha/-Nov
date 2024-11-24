// import styled from "styled-components";

// const FavoriteContainer = ({ className, someId, isFavorite, setIsFavorite }) => {
// 	// Изменено на компактный вариант
// 	const handlerChangeFavorite = () => setIsFavorite(!isFavorite);

// 	return (
// 		<div className={className} onClick={handlerChangeFavorite}>
// 			<span>{isFavorite ? '♥' : '♡'}</span> {/* Символ сердечка */}
// 			Add to Favorite
// 			{someId}
// 		</div>
// 	);
// };

// export const Favorite = styled(FavoriteContainer)`
// 	color: ${({ isFavorite }) => (isFavorite ? 'red' : 'grey')};
// 	border: 1px solid #ccc;
// 	width: 140px;
// 	cursor: pointer; /* Добавлено для интерактивности */
// 	span {
// 		margin-right: 8px; /* Отступ между сердцем и текстом */
// 	}
// `;
import styled from "styled-components";

const FavoriteContainer = ({ className, someId, isFavorite, setIsFavorite }) => {
	const handlerChangeFavorite = () => setIsFavorite(!isFavorite);

	return (
		<div className={className} onClick={handlerChangeFavorite}>
			<span>{isFavorite ? '♥' : '♡'}</span>
		</div>
	);
};

export const Favorite = styled(FavoriteContainer)`
	color: ${({ isFavorite }) => (isFavorite ? 'red' : 'grey')};
	cursor: pointer; 
	display: flex;
	align-items: center; /* Выравнивание по вертикали */
	span {
		display: inline-flex; /* Позволяет управлять размерами */
		justify-content: center;
		align-items: center;
		width: 16px; /* Фиксированная ширина */
		height: 16px; /* Фиксированная высота */
		font-size: 16px; /* Размер шрифта сердечка */
		line-height: 1; /* Исключает влияние высоты строки */
		margin-right: 8px; /* Отступ между сердцем и текстом */
	}
`;
