import classNames from 'classnames';
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
		setOpen(true);
	};
	return (
		<div
			className={classNames('x-dropdown', className, {
				'x-dropdown--open': open,
			})}
			style={style}
		>
			<button className="x-dropdown__btn" onClick={onClick}>
				<svg
					version="1.1"
					id="Capa_1"
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					viewBox="0 0 556.98 556.98"
				>
					<g>
						<g>
							<path d="M536.846,23.491H20.135C9.015,23.491,0,32.506,0,43.62v107.37c0,11.12,9.015,20.128,20.135,20.128h516.711 c11.121,0,20.135-9.015,20.135-20.128V43.626C556.975,32.506,547.967,23.491,536.846,23.491z" />
							<path d="M536.846,204.68H20.135C9.015,204.68,0,213.694,0,224.809v107.369c0,11.12,9.015,20.129,20.135,20.129h516.711 c11.121,0,20.135-9.015,20.135-20.129V224.809C556.975,213.688,547.967,204.68,536.846,204.68z" />
							<path d="M536.846,385.862H20.135C9.015,385.862,0,394.877,0,405.991V513.36c0,11.12,9.015,20.129,20.135,20.129h516.711 c11.121,0,20.135-9.015,20.135-20.129V405.991C556.975,394.877,547.967,385.862,536.846,385.862z" />
						</g>
					</g>
				</svg>
			</button>
			<div className="x-dropdown__menu">{ children }</div>
		</div>
	);
}
