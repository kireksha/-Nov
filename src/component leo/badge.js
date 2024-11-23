import styled from 'styled-components'
import { ReactComponent as Sheriff } from './image/sheriff.svg'
import { ReactComponent as Support } from './image/support.svg'
import { ROLE } from './Role';
import { useState } from 'react';
import ReactModal from 'react-modal';


const BadgeContainer = ({ className, roleId }) => {
	const Modal = styled.div`
		text-align: center;
	`;

	const Button = styled.button`
	    cursor: pointer;
	`;

	const Div = styled.div`
		display: flex;
		justify-content: center;
		height: 40px;
	`;

	const [modalIsOpen, setModalIsOpen] = useState(false)

	const openModal = () => {
		setModalIsOpen(true)
	}

	const closeModal = () => {
		setModalIsOpen(false)
	}

	const modalContent = (
		<Modal>
			<h2>Заголовок</h2>
			<p>Текст модального окна</p>
			<Button onClick={closeModal}>Закрыть</Button>
		</Modal>
	)


	return (

		<Div className={className}>
			{roleId === ROLE.TEAMLEAD ? (
				<button onClick={openModal}><Sheriff width="35px" height="35px" /></button>)
				: (<button className='button' onClick={openModal}><Support width="35px" height="35px" /></button>)}
			<ReactModal ariaHideApp={false} isOpen={modalIsOpen} onRequestClose={closeModal}>
				{modalContent}
			</ReactModal>
		</Div >
	)
}

export const Badge = styled(BadgeContainer)`
& button {
	border: none;
    cursor: pointer;
	background-color: #fff;
}

& button:active {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, .5);
}

& .modal{
	text-align: center;
}
`;
