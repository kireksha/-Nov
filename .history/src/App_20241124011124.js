import { useState } from 'react';
import { XDropdown } from './components/ui'
import { Route, Routes } from 'react-router-dom';
import { Header, Footer, Badge } from './components';
import {MainPage } from './Pages';
import styled from 'styled-components';

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
			<XDropdown>
				<p>dlkfhgdflkgjfdkgl</p>
			</XDropdown>
			<Header />
			<Content>
				<h2>162 ГРУППА БУДУЩИХ ВЫПУСКНИКОВ RESULT UNIVERSITY</h2>
				<Кщ>
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
				</К>
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
