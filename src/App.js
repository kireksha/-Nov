import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import {MainPage } from './Pages';
import styled from 'styled-components';
import { Badge } from './component leo';

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
					<Route path="/" element={<MainPage/>} />
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
			<Badge />
		</div>
	);

};

export const App = styled(AppContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
`;
