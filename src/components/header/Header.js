import { HeaderLink } from './components/HeaderLink';
import styled from 'styled-components';

const HeaderContainer = ({ className }) => {
	return (
		<header className={className}>
			<nav className="header-nav">
				<ul className="list-link">
					<HeaderLink linkAddress="/">ГЛАВНАЯ</HeaderLink>
					<HeaderLink href="https://result.school/">САЙТ ШКОЛЫ</HeaderLink>
					<HeaderLink linkAddress="/favorites">ИЗБРАННЫЕ УЧАСТНИКИ</HeaderLink>
				</ul>
			</nav>
		</header>
	);
};

export const Header = styled(HeaderContainer)`
	padding: 50px 45px;
	background-color: rgba(117, 112, 255, 0.61);

	& .list-link {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	& li:not(:last-child) {
		margin-right: 40px;
	}
`;
