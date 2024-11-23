import { Route, Routes } from 'react-router-dom';
import { Header, Footer } from './components';
import styled from 'styled-components';

const Content = styled.div`
	margin: 0 auto;
	text-align: center;
`;

export const AppContainer = ({ className }) => {
	return (
		<div className={className}>
			<Header />
			<Content>
				<h2>162 ГРУППА БУДУЩИХ ВЫПУСКНИКОВ RESULT UNIVERSITY</h2>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route
						path="/coders/:id"
						element={<div>Открытая страница программиста по id</div>}
					/>
					<Route
						path="/favorites"
						element={<div>Избранные участники по id</div>}
					/>
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Content>
			<Footer />
		</div>
	);
};

export const App = styled(AppContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
`;
