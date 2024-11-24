import { useState, useEffect } from 'react';
import { Badge } from '../../components';
import { requestGetAllCoders } from '../main-page/request-get-all-coders/request-get-all-coders';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FavoritePageContainer = ({ className }) => {
	const [coders, setCoders] = useState([]);
	const [filteredCoders, setFilteredCoders] = useState([]);

	useEffect(() => {
		requestGetAllCoders().then((data) => {
			setCoders(data);
		});
	}, []);

	useEffect(() => {
		const favoritesArr = JSON.parse(localStorage.getItem('favs') || '[]');

		const filtered = coders.filter((coder) => favoritesArr.includes(coder.id));
		setFilteredCoders(filtered);
	}, [coders]);

	const removeFromFavorites = (event, coderId) => {
		event.preventDefault();
		let favoritesArr = JSON.parse(localStorage.getItem('favs') || '[]');

		favoritesArr = favoritesArr.filter((id) => id !== coderId);

		localStorage.setItem('favs', JSON.stringify(favoritesArr));

		setFilteredCoders(filteredCoders.filter((coder) => coder.id !== coderId));
	};

	return (
		<div className={className}>
			<h2>Избранные</h2>
			{filteredCoders.length > 0 ? (
				<ul className="favs-list">
					{filteredCoders.map((coder) => (
						<div className="favs-list_fav">
							<Badge className="badge" coderId={coder.id} />
							<div className="coder_item" key={coder.id}>
								<Link to={`/coders/${coder.id}`}>
								<img
									src={coder.avatar}
									alt={coder.name}
									className="coder-avatar"
								/>
								<li>{coder.name}</li>
								<button onClick={(event) => removeFromFavorites(event, coder.id)}>
									Удалить из избранного
								</button>
								<hr />
								</Link>
							</div>
						</div>
					))}
				</ul>
			) : (
				<p>Нет избранных кодеров</p>
			)}
		</div>
	);
};

export const FavoritePage = styled(FavoritePageContainer)`
	& .favs-list_fav {
		position: relative;
	}
	& .badge {
		position: absolute;
		top: 0;
		left: 0;
	}
	& .favs-list {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-gap: 20px;
	}
	& .coder-avatar {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		object-fit: cover;
		overflow: hidden;
	}
`;
