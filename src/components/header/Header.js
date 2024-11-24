import styled from 'styled-components';
import { XDropdown } from '../ui';
import { Link } from 'react-router-dom';
import { HeaderLink } from './components/HeaderLink';
import { IconBack } from './components/icon-back';
import { requestGetAllCoders } from '../../Pages/main-page/request-get-all-coders/request-get-all-coders';
import { SelectCoders } from '../../selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
const HeaderContainer = ({ className }) => {
	const coders = useSelector(SelectCoders);
	const dispatch = useDispatch();
	useEffect(() => {
		requestGetAllCoders().then((data) => dispatch({ type: 'SET_CODERS', payload: data }));
	})
	return (
		<header className={className}>
			<nav className="header-nav">
				<ul className="list-link">
					<XDropdown className="list-link" style={{ marginRight: '40px' }}>
						<Link to="/">Главная</Link><br/>
						<Link to="/favorites">Избранные</Link><br/>
						<Link to="https://result.school/">Сайт школы</Link><br/>
						<h2>Программисты:</h2>
						{coders.map((coder) => <Link key={coder.id} to={`/coders/${coder.id}`}>{coder.name}<br/></Link> )}
					</XDropdown>
					<IconBack />
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
	box-shadow: 15px 10px 10px 5px rgba(0, 0, 0, 0.75);

	& .list-link {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	& li:not(:last-child) {
		margin-right: 40px;
	}
`;
