import styled from 'styled-components';
import { useEffect } from 'react';
import { requestGetCoder, requestGetSocials , requestGetSkills} from './requests';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SelectCoder, SelectClickMoreAboutMe, SelectSocials} from '../../selectors';
import SocialsLogoVK from '../../pictures/socials/VK.svg';
import SocialsLogoTG from '../../pictures/socials/Telegram.svg';
import SocialsLogoInstagram from '../../pictures/socials/Instagram.svg';
import { Badge } from '../../components';

const MainPageIdContainer = styled.div`
	width: 100vw;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	button:not(:first-child) {
		width: 200px;
		height: 50px;
		font-size: 18px;
		font-weight: 600;
		background-color: #d9d9d9;
		border-radius: 30px;
		cursor: pointer;
			&:hover {
		animation: scale 0.2s ease-in-out forwards;
		}
		@keyframes scale {
			0% {
				transform: scale(1);
			}
			100% {
				transform: scale(1.2);
			}
		}
		}
	}
`;
const Header = styled.header`
	display: flex;
	width: 100vw;
	hight: 20%;
	display: flex;
	flex-direction: row;
	padding: 50px;
	justify-content: center;
	img {
		width: 500px;
		height: 500px;
		border-radius: 50%;
		box-shadow: 15px 10px 10px 5px rgba(0, 0, 0, 0.75);
	}
`;
const SocialsContainer = styled.div`
	display: flex;
	justify-content: start;
	width: 400px;
	height: 100px;
	align-items: center;
	cursor: pointer;
	img {
		width: 60px;
		height: 60px;
		object-fit: cover;
		box-shadow: none;
	}
	a:hover {
		border-radius: 50%;
		width: 60px;
		height: 60px;
		object-fit: cover;
		margin-right: 40px;
		&:hover {
		animation: rotate 0.3s ease-in-out forwards;
		}
		@keyframes rotate {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
	}
`;
const Information = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	font-size: 25px;
	padding-left: 55px;
`;

const AboutMeContainer = styled.div`
	width: 85%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 25px;
	line-height: 1.5;
	padding: 10px;
	border: 2px solid black;
	margin: 25px;
	h2 {
		font-size: 30px;
		margin: 0;
	}
`;


export const MainPageId = () => {
	const coder = useSelector(SelectCoder);
	const clickMoreAboutMe = useSelector(SelectClickMoreAboutMe);
	const socials = useSelector(SelectSocials);
	const dispatch = useDispatch();
	const { id } = useParams();
	useEffect(() => {
		requestGetCoder(id).then((data) =>
			dispatch({ type: 'SET_CODER', payload: data }),
		);
		requestGetSocials(id).then((data) =>
			dispatch({ type: 'SET_SOCIALS', payload: data }),
		);
		requestGetSkills(id).then((data) =>
			dispatch({ type: 'SET_SKILLS', payload: data })
		,
		);
	}, [id, dispatch]);
	return (
		<MainPageIdContainer>
			<Header>
				<Badge coderId={id} />
				<img src={coder.avatar} alt="{coder.name}" />
				<Information>
					<p>Имя: {coder.name}</p>
					<p>Фамилия: {coder.lastname}</p>
					<p>Отчество: {coder.surname}</p>
					<p> Город: {coder.city}</p>
					<p> Год рождения: {coder.birth}</p>
					<SocialsContainer>
						<a href={socials.vk}>
							<img src={SocialsLogoVK} alt="vk" />
						</a>
						<a href={socials.tg}>
							<img src={SocialsLogoTG} alt="telegram" />
						</a>
						<a href={socials.inst}>
							<img src={SocialsLogoInstagram} alt="instagram" />
						</a>
					</SocialsContainer>
				</Information>
			</Header>
			{
				<button
					onClick={() =>
						dispatch({
							type: 'SET_CLICK_MORE_ABOUT_ME',
							payload: !clickMoreAboutMe,
						})
					}
				>
					{clickMoreAboutMe ? 'Скрыть' : 'Больше обо мне...'}
				</button>
			}
			{clickMoreAboutMe && (
				<>
					<AboutMeContainer>
						<h2>Обо мне:</h2>
						<p>{coder.about}</p>
					</AboutMeContainer>
				</>
			)}
		</MainPageIdContainer>
	);
};
