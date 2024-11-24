import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { SelectSearchCoderInput, SelectCoders } from '../../../../selectors';
import { requestGetAllCoders } from '../../request-get-all-coders/request-get-all-coders';
const SearchSortContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 50px 0 25px 0;
	input {
		width: 400px;
		height: 50px;
		font-size: 18px;
		border-radius: 30px;
		border: none;
		background-color: #d9d9d9;
		outline: none;
		box-shadow: 15px 10px 10px 5px rgba(0, 0, 0, 0.5);
		padding-left: 15px;
		&:hover {
			animation: scale 0.2s ease-in-out forwards;
		}
		margin-right: 20px;
	}
	button {
		width: 100px;
		height: 50px;
		font-size: 18px;
		font-weight: 600;
		background-color: #d9d9d9;
		border-radius: 30px;
		cursor: pointer;
		border: none;
		box-shadow: 15px 10px 10px 5px rgba(0, 0, 0, 0.5);
		margin-left: 15px;
		&:hover {
			animation: scale 0.2s ease-in-out forwards;
		}
		@keyframes scale {
			0% {
				transform: scale(1);
			}
			100% {
				transform: scale(1.1);
			}
		}
	}
`;
export const SearchSort = () => {
	const SearchCoderInput = useSelector(SelectSearchCoderInput);
	const coders = useSelector(SelectCoders);
	const dispatch = useDispatch();
	const searchCoder = () => {
		const filteredCoders = coders.filter(
			(coder) =>
				coder.name.toLowerCase().trim().includes(SearchCoderInput.toLowerCase().trim())
		);
		dispatch({ type: 'SET_CODERS', payload: filteredCoders });
	};
	const reset = () => {
		requestGetAllCoders().then((data) =>
			dispatch({ type: 'SET_CODERS', payload: data }),
		);
		dispatch({ type: 'SET_SEARCH_CODER_INPUT', payload: '' });
	};
	return (
		<SearchSortContainer>
			<input
				value={SearchCoderInput}
				onChange={(e) => {
					dispatch({ type: 'SET_SEARCH_CODER_INPUT', payload: e.target.value });
				}}
				type="text"
				placeholder="Поиск..."
			/>
			<button
				title="Найти"
				onClick={() => {
					searchCoder();
				}}
			>
				Найти
			</button>
			<button
				title="Сбросить сортировку"
				onClick={() => {
					reset();
				}}
			>
				Сбросить
			</button>
		</SearchSortContainer>
	);
};
