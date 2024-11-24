import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { getRole } from '../../bff/api';
import { ReactComponent as Sheriff } from '../../pictures/icons/sheriff.svg';
import { ReactComponent as Support } from '../../pictures/icons/support.svg';
import { ModalContent } from './components/modal/modal';
import { ROLE } from './role';

const BadgeContainer = ({ className, coderId }) => {
	const [role, setRole] = useState({});
	useEffect(() => {
		getRole(coderId).then((data) => setRole(data));
	}, [coderId]);

	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = (event) => {
		event.preventDefault();
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	return (
		<div className={className}>
			{role.roleId === ROLE.TEAMLEAD ? (
				<button onClick={openModal}>
					<Sheriff width="35px" height="35px" />
				</button>
			) : (
				<button className="button" onClick={openModal}>
					<Support width="50px" height="50px" />
				</button>
			)}
			<ReactModal
				ariaHideApp={false}
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
			>
				<ModalContent closeModal={closeModal} role={role} />
			</ReactModal>
		</div>
	);
};
BadgeContainer.propTypes = {
	className: PropTypes.string,
	coderId: PropTypes.any,
};
export const Badge = styled(BadgeContainer)`
	display: flex;
	justify-content: center;
	height: 40px;

	& button {
		border: none;
		cursor: pointer;
		background-color: #fff;
	}

	& button:active {
		box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
	}

	& .modal {
		text-align: center;
	}
`;
