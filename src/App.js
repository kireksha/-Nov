import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Badge, Footer, Header } from './components';
import { MainPage } from './Pages';

const Content = styled.div`
	margin: 0 auto;
	text-align: center;
`;

export const AppContainer = ({ className }) => {
	const [type, setType] = useState('bar');
	const [value, setValue] = useState(33);
	const [size, setSize] = useState(85);
	const [thickness, setThickness] = useState(16);
	return (
		<div className={className}>
			<Header />
			<Content>
				<h2>162 ГРУППА БУДУЩИХ ВЫПУСКНИКОВ RESULT UNIVERSITY</h2>
				<Routes>
					<Route path="/" element={<MainPage />} />
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
