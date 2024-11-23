import { useState } from 'react';
import { XAccordionTab } from './components/ui/accordion';
import { XProgress } from './components/ui/progress';

export const App = () => {
	const [type, setType] = useState('bar');
	const [value, setValue] = useState(33);
	const [size, setSize] = useState(85);
	const [thickness, setThickness] = useState(16);
	return (
		<>
			<div className="App">
				<XAccordionTab header="Обо мне">
					<p>
						content content content content content content content content
						content content content content content content content content
						content content content content content content content content
						content content content content content content content content
						content content content content content content content content
						content content
					</p>
				</XAccordionTab>
				<XAccordionTab header="Мой прогресс" style={{ marginTop: '8px' }}>
					<div style={{ display: 'flex', justifyContent: 'space-around' }}>
						<XProgress
							type="circle"
							value={80}
							size={128}
							thickness={10}
							color="negative"
						>
							HTML
						</XProgress>
						<XProgress
							type="circle"
							value={90}
							size={128}
							thickness={10}
							color="secondary"
						>
							CSS
						</XProgress>
						<XProgress
							type="circle"
							value={75}
							size={128}
							thickness={10}
							color="warning"
						>
							JS
						</XProgress>
						<XProgress
							type="circle"
							value={95}
							size={128}
							thickness={10}
							color="info"
						>
							React
						</XProgress>
					</div>
				</XAccordionTab>
			</div>
		</>
	);
};
