import classNames from 'classnames';
import { useRef, useState } from 'react';
import './style.css';
export function XAccordionTab({ className, children, header, ...props }) {
	const [expanded, setExpanded] = useState(false);
	const contentRef = useRef();
	let toggleExpanded = (e) => {
		setExpanded((v) => !v);
	};
	return (
		<div
			{...props}
			className={classNames('x-accordion-tab', {
				'x-accordion-tab--expanded': expanded,
			})}
		>
			<div className="x-accordion-header" onClick={toggleExpanded}>
				<i className="x-accordion-header-icon"></i>
				{header}
			</div>
			<div
				className="x-accordion-content"
				ref={contentRef}
				style={
					expanded
						? { height: contentRef.current.scrollHeight }
						: { height: '0px' }
				}
			>
				{children}
			</div>
		</div>
	);
}
