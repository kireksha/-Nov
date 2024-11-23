import { useState } from 'react';
import { XAccordionTab } from './components/ui/accordion';

export const App = () => {
	const [type, setType] = useState('bar');
	const [value, setValue] = useState(33);
	const [size, setSize] = useState(85);
	const [thickness, setThickness] = useState(16);
	return (
		<>
			<div
				className="App"
				style={{
					width: 300,
					height: 300,
				}}
			>
				<XAccordionTab header="Header">
					<p>
						content content content content content content content content
						content content content content content content content content
						content content content content content content content content
						content content content content content content content content
						content content content content content content content content
						content content content content content content content content
						content content content content content content content content
						content content content content content content content content
						content content
					</p>
				</XAccordionTab>
			</div>
			<div>
				<select value={type} onChange={({ target }) => setType(target.value)}>
					<option value="bar">Bar</option>
					<option value="circle">Circle</option>
				</select>
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
