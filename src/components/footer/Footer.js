import styled from 'styled-components';
import { Socials } from './components/socials';

const FooterContainer = ({ className }) => {
	return (
		<footer className={className}>
			<a rel="noreferrer" href="https://result.school/" target="_blank">
				RESULT UNIVERSITY 2025
			</a>
				<Socials className="socials" />
		</footer>
	);
};

export const Footer = styled(FooterContainer)`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	padding: 0;
	width: 100%;
	height: 200px;
	background-color: rgba(117, 112, 255, 0.61);

	& a {
		font-size: 32px;
		font-style: italic;
	}
`;
