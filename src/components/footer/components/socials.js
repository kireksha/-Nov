import styled from 'styled-components';
import { ReactComponent as VK } from '../../../pictures/socials/VK.svg';

const SocialsContainer = ({ className }) => {
	return (
		<ul className={className}>
			<li>
				<VK />
			</li>
		</ul>
	);
};

export const Socials = styled(SocialsContainer)``;
