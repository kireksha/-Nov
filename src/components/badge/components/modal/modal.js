import styled from 'styled-components';

const ModalContentContainer = ({ className, closeModal, role }) => {
	return (
		<div className={className}>
			<h2>Роль участника в проекте</h2>
			<p>{role.title}</p>
			<button onClick={closeModal}>Закрыть</button>
		</div>
	);
};

export const ModalContent = styled(ModalContentContainer)`
	text-align: center;

	&button {
		cursor: pointer;
	}
`;
