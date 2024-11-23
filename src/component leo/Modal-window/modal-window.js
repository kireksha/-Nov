import styled from "styled-components"

const modalWindowContainer = () => {
	return (
		<>
			<div>
				<h3>Достижения</h3>
			</div>
			<button onClick={closeModal}>Закрыть</button>
		</>
	)
}

export const ModalWindow = styled(modalWindowContainer)`

`;
