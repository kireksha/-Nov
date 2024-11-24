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

export const App = () => {
	return <div className="App"></div>;
};

export const App = styled(AppContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
`;
