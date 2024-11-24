// import styled from 'styled-components';
// import { useEffect, useState } from 'react';
// import { requestGetAllCoders } from './request-get-all-coders/request-get-all-coders';
// import { Link } from 'react-router-dom';
// import { Favorite } from '../../svetoslav/Favorite/Favorite';

// const MainPageContainer = styled.div`
// 	width: 100%;
// 	height: 100%;
// 	margin: 50px 0 50px 0;
// 	text-align: center;
// 	div {
// 		display: grid;
// 		grid-template-columns: 1fr 1fr 1fr;
// 		grid-template-rows: 1fr 1fr;
// 		grid-gap: 20px;
// 	}
// 	img {
// 		width: 50%;
// 		height: 60%;
// 		object-fit: cover;
// 		border-radius: 50%;
// 					box-shadow: 15px 10px 10px 5px rgba(0, 0, 0, 0.75);
// 	}
// 		p {
// 			font-size: 25px;
// 		}
// 			a:hover {
// 				box-shadow: 15px 10px 10px 10px rgba(0, 0, 0, 0.75);
// 				border-radius: 15px;
// 			}
// 	.item_wtrapper {
// 		display: flex;
// 		flex-direction: column;
// 		text-align: center;
// 		height: 300px;
// 	}

// `;
// export const MainPage = () => {
// 	const [coders, setCoders] = useState([]);
// 	useEffect(() => {
// 		requestGetAllCoders().then((data) => setCoders(data));
// 	}, []);

// 	return (
// 		<MainPageContainer>
// 			<p>
// 				Здесь Вы можете познакомиться с участниками
// 				<br /> Хакатона №2 курса "Junior Fronted-разработчик"{' '}
// 			</p>
// 			<div>
// 				{coders.map((coder) => (
// 					<Link key={coder.id} to={`/coders/${coder.id}`}>
// 						<div className="item_wtrapper">
// 							<img src={coder.avatar} alt={coder.name} />
// 							<p key={coder.id}>{coder.name}</p>
// 							<Favorite user={coder} />
// 						</div>
// 					</Link>

// 				))}
// 			</div>
// 		</MainPageContainer>
// 	);
// };

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { requestGetAllCoders } from './request-get-all-coders/request-get-all-coders';
import { Link } from 'react-router-dom';
import { Favorite } from '../../svetoslav/Favorite/Favorite';

const MainPageContainer = styled.div`
	width: 100%;
	height: 100%;
	margin: 50px 0;
	text-align: center;
	div {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 20px;
	}

	img {
		width: 150px; /* Установите фиксированный размер */
		height: 150px; /* Установите фиксированный размер */
		object-fit: cover;
		border-radius: 50%; /* Круглая форма */
		box-shadow: 15px 10px 10px 5px rgba(0, 0, 0, 0.75);
	}

	p {
		font-size: 25px;
	}

	a:hover {
		box-shadow: 15px 10px 10px 10px rgba(0, 0, 0, 0.75);
		border-radius: 15px;
	}

	.item_wtrapper {
		display: flex;
		flex-direction: column;
		justify-content: center; /* Выравнивание по центру по вертикали */
		align-items: center; /* Выравнивание по центру по горизонтали */
		text-align: center;
		height: 400px;
	}
`;

export const MainPage = () => {
	const [coders, setCoders] = useState([]);
	useEffect(() => {
		requestGetAllCoders().then((data) => setCoders(data));
	}, []);

	return (
		<MainPageContainer>
			<p>
				Здесь Вы можете познакомиться с участниками
				<br /> Хакатона №2 курса "Junior Fronted-разработчик"{' '}
			</p>
			<div>
				{coders.map((coder) => (
					<Link key={coder.id} to={`/coders/${coder.id}`}>
						<div className="item_wtrapper">
							<img src={coder.avatar} alt={coder.name} />
							<p>{coder.name}</p>
							<Favorite user={coder} />
							{/* <div className="favorite-wrapper">

							</div> */}
						</div>
					</Link>
				))}
			</div>
		</MainPageContainer>
	);
};

