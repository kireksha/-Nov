import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Badge, Footer, Header } from './components';
import { FavoritePage, MainPage, MainPageId } from './Pages';

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
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/coders/:id" element={<MainPageId />} />
					<Route path="/favorites" element={<FavoritePage />} />
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
