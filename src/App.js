import { Route, Routes } from 'react-router-dom';
import { Header, Footer } from './components';
import {MainPage, MainPageId } from './Pages';
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
				<Routes>
					<Route path="/" element={<MainPage/>} />
					<Route
						path="/coders/:id"
						element={<MainPageId />}
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
