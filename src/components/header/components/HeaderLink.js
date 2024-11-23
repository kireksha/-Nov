import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderLinkContainer = ({ className, children, linkAddress='', href='' }) => {
	return (
		<li className={className}>
			{linkAddress !== '' ? (
				<Link to={linkAddress}>{children}</Link>
			) : (
				<a rel="noreferrer" href={href} target="_blank">
					{children}
				</a>
			)}
		</li>
	);
};

export const HeaderLink = styled(HeaderLinkContainer)`
	position: relative;
	box-sizing: border-box;
	width: 33.33%;
	height: 80px;
	padding: 25px 50px;
	text-align: center;
	background-color: #d9d9d9;
	border-radius: 30px;
	cursor: pointer;
	transition: opacity .2s ease-in-out, transform .2s ease-in-out;

	& a {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	&:hover {
		opacity: .8;
	}

	&:active {
		opacity: 1;
		transform: translate(2px, 2px);
	}
`;
