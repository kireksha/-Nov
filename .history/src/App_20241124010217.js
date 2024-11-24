import './App.css';

export const App = () => {
	return <div className="App"></div>;
};

export const App = styled(AppContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
`;
