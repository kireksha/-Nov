import { useState } from 'react';
import { XProgress } from './components/ui/progress';

export const App = () => {
	const [value, setValue] = useState(33);
	const [size, setSize] = useState(85);
	const [thickness, setThickness] = useState(10);
	console.log(thickness);
	return (
		<>
			<div
				className="App"
				style={{
					background: 'rgba(0,0,0,0.2)',
					width: 300,
					height: 300,
				}}
			>
				<XProgress
					value={value}
					thickness={thickness}
					size={size}
					color="positive"
				/>
			</div>
			<div>
				<input
					type="number"
					value={value}
					onChange={({ target }) => setValue(target.value)}
				/>
				<input
					type="number"
					value={size}
					onChange={({ target }) => setSize(target.value)}
				/>
				<input
					type="number"
					value={thickness}
					onChange={({ target }) => setThickness(target.value)}
				/>
			</div>
		</>
	);
};
