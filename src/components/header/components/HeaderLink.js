import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderLinkContainer = ({ className, children, linkAddress, href }) => {
	return (
		<li className={className}>
			{linkAddress
				? <Link to={linkAddress}>{children}</Link>
				: <a rel='noreferrer' href={href} target='_blank'>{children}</a>
			}
		</li>
	);
};

export const HeaderLink = styled(HeaderLinkContainer)`
	box-sizing: border-box;
	width: 33.33%;
	height: 80px;
	padding: 25px 50px;
	text-align: center;
	background-color: #d9d9d9;
	border-radius: 30px;
	cursor: pointer;
`;
