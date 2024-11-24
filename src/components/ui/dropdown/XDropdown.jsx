import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './style.css';
export function XDropdown({ children, className, style }) {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const closeMenu = () => {
			setOpen(false);
		};
		document.documentElement.addEventListener('click', closeMenu);
		return () => {
			document.documentElement.removeEventListener('click', closeMenu);
		};
	}, []);
	const onClick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setOpen((v) => !v);
	};
	return (
		<div
			className={classNames('x-dropdown', className, {
				'x-dropdown--open': open,
			})}
			style={style}
		>
			<button className="x-dropdown__btn" onClick={onClick}>
				<span></span>
				<span></span>
				<span></span>
			</button>
			<div className="x-dropdown__menu">{children}</div>
		</div>
	);
}

XDropdown.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	style: PropTypes.object,
};
