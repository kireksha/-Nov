import { XProgress } from './components/ui/progress';
export const App = () => {
	return (
		<div
			className="App"
			style={{
				background: 'rgba(0,0,0,0.2)',
				width: 100,
				height: 100,
			}}
		>
			<XProgress value={33} width={5} size={85} color="positive" />
		</div>
	);
};
