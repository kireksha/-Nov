import { useState } from 'react';
import { XDropdown } from './components/ui';

export const App = () => {
	const [type, setType] = useState('bar');
	const [value, setValue] = useState(33);
	const [size, setSize] = useState(85);
	const [thickness, setThickness] = useState(16);
	return (
		<>
			<div className="App">
				<XDropdown label="Cl">
					<p>dlkfhgdflkgjfdkgl</p>
				</XDropdown>
			</div>
		</>
	);
};
