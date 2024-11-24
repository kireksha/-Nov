import { useNavigate } from 'react-router-dom';
import { ReactComponent as Backward } from '../../../pictures/icons/back-arrow-svgrepo-com.svg';
import styled from 'styled-components';

const IconBackContainer = ({ className }) => {
	const navigate = useNavigate();
	return (
		<div className={className} onClick={() => navigate(-1)}>
			<i><Backward width='50px' height='50px' /></i>
		</div>
	);
};

export const IconBack = styled(IconBackContainer)`\
	margin-right: 40px;
	cursor: pointer;
	transition: opacity .1s ease-in-out, transform .1s ease-in-out;

	&:hover {
		opacity: .5;
	}

	&:active {
		transform: translate(2px, 2px);
	}

	& i {
		width: 60px;
		height: 60px;
		text-align: center;
	}
`;
