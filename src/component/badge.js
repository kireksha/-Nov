import styled from 'styled-components'
import { ReactComponent as Sheriff } from './image/sheriff.svg'
import { ReactComponent as Support } from './image/support.svg'

const BadgeContainer = ({ className, timlid }) => {

	const Div = styled.div`
		display: flex;
		justify-content: center;
		height: 40px;
	`;

	return (
		<Div className={className}>
			<button className='button' onClick={() => { alert('Текст') }}><Sheriff width="35px" height="35px" /></button>
			<button className='button'><Support width="35px" height="35px" /></button>
		</Div>
	)
}

export const Badge = styled(BadgeContainer)`
& button {
	border: none;
	cursor: grab;
	background-color: #fff;
}

& button:active {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, .5);
   }
`;
