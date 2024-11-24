import { requestGetAllCoders } from './request-get-all-coders/request-get-all-coders';
import { Favorite, SearchSort, SimpleCarousel } from './components';
import { Badge } from '../../components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const MainPageContainer = styled.div`
	width: 100%;
	height: 100%;
	margin: 50px 0;
	text-align: center;

	.cards-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 20px;
	}

	img {
		width: 180px;
		height: 180px;
		object-fit: cover;
		border-radius: 50%;
		box-shadow: 15px 10px 10px 5px rgba(0, 0, 0, 0.75);
	}

	p {
		font-size: 25px;
		margin: 10px 0;
	}

	.cards-container_card {
		position: relative;
		transition: all 0.2s ease-in-out;
	}

	.cards-container_card:hover {
		box-shadow: 15px 10px 10px 10px rgba(0, 0, 0, 0.75);
		border-radius: 15px;
	}

	.item_wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 360px;
		padding: 10px;
	}

	.avatar {
		margin-bottom: 30px;
	}

	.item_info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.badge {
		position: absolute;
		right: 20px;
		top: 10%;
	}
`;

export const MainPage = () => {
	const [coders, setCoders] = useState([]);
	useEffect(() => {
		requestGetAllCoders().then((data) => setCoders(data));
	}, []);

	return (
		<MainPageContainer>
			<h2>162 - ГРУППА БУДУЩИХ ВЫПУСКНИКОВ RESULT UNIVERSITY!</h2>
			<p>
				Здесь Вы можете познакомиться с участниками
				<br /> Хакатона №2 курса "Junior Fronted-разработчик"
			</p>
			<SearchSort />
			<div className="cards-container">
				{coders.map((coder) => (
					<div key={coder.id} className="cards-container_card">
						<Badge className="badge" coderId={coder.id} />
						<Link to={`/coders/${coder.id}`}>
							<div className="item_wrapper">
								<img
									className="avatar"
									src={coder.avatar}
									alt={coder.name}
								/>
								<div className="item_info">
									<p>{coder.name}</p>
									<Favorite user={coder} />
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</MainPageContainer>
	);
};
