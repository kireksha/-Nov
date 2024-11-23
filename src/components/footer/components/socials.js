import { ReactComponent as VK } from '../../../pictures/socials/VK.svg';
import { ReactComponent as TG } from '../../../pictures/socials/Telegram.svg';
import { ReactComponent as YT } from '../../../pictures/socials/YouTube.svg';
import styled from 'styled-components';
import { SingleSocial } from './single-social';

const SocialsContainer = ({ className }) => {
	return (
		<ul className={className}>
			<SingleSocial href="https://t.me/result_school_it" alt="ссылка на телеграмм-канал">
				<TG width="69px" height="44px" />
			</SingleSocial>
			<SingleSocial href="https://www.youtube.com/@ResultSchool" alt="ссылка на ютуб-канал">
				<YT width="51px" height="72px" />
			</SingleSocial>
			<SingleSocial href="vk.com/result.school" alt="ссылка на группу ВК">
				<VK width="60px" height="81px" />
			</SingleSocial>
		</ul>
	);
};

export const Socials = styled(SocialsContainer)`
	position: absolute;
	right: 40px;
	top: 30px;
	display: flex;
	width: 230px;
	height: 81px;
	align-items: center;
	justify-content: space-between;

	& li {
		transition: transform .2s ease-in-out;
	}

	& li:active {
		transform: translate(2px, 2px);
	}
`;
