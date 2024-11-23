import { Socials } from './components/socials';
import styled from 'styled-components';


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
<<<<<<< HEAD
	box-shadow: 15px -10px 10px 5px rgba(0, 0, 0, 0.75);
=======

	& a {
		font-size: 32px;
		font-style: italic;
	}
 & a:hover {
		opacity: .5;
	}

	& a:active {
		transform: translate(2px, 2px);
	}
>>>>>>> 84182a796ba19c292156d9b16ce1270eb9b53f73
`;


