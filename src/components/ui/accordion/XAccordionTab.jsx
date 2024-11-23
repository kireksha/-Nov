import { useState } from 'react';
import './style.css';
export function XAccordionTab({ className, children, header }) {
	const [expanded, setExpanded] = useState(false);
	return (
		<div className="x-accordion-tab">
			<div className="x-accordion-header">{header}</div>
			<div className="x-accordion-content">{children}</div>
		</div>
	);
}
