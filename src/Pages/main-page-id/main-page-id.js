import styled from 'styled-components';
import { useEffect } from 'react';
import { requestGetCoder, requestGetSocials } from './requests';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SelectCoder, SelectClickMoreAboutMe, SelectSocials } from '../../selectors';
import SocialsLogoVK from '../../pictures/socials/VK.svg';
import SocialsLogoTG from '../../pictures/socials/Telegram.svg';
import SocialsLogoInstagram from '../../pictures/socials/Instagram.svg';

const MainPageIdContainer = styled.div`
	width: 100vw;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	button {
		width: 200px;
		height: 50px;
		font-size: 18px;
		font-weight: 600;
		background-color: #d9d9d9;
		border-radius: 30px;
		cursor: pointer;
		&:hover {
			animation: shake 0.4s ease-in-out forwards;
		}
		@keyframes shake {
			0% {
				transform: translate(0, 0);
			}
			25% {
				transform: translate(15px, 0);
			}
			50% {
				transform: translate(0, 0);
			}
			75% {
				transform: translate(-1px, 0);
			}
			100% {
				transform: translate(0, 0);
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
		width: 600px;
		height: 600px;
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
		width: 70px;
		height: 70px;
		object-fit: cover;
		margin-right: 40px;
		box-shadow: none;
	}
	a:hover {
		border-radius: 50%;
		width: 50px;
		height: 50px;
		object-fit: cover;
		margin-right: 40px;
		animation: rotate 0.5s ease-in-out forwards;
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
	margin: 30px;
	h2 {
		font-size: 30px;
		margin: 0;
	}
`;
const ProgressBarContainer = styled.div``;
/*стили для контейнера progressBar*/
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
	}, [id, dispatch]);

	return (
		<MainPageIdContainer>
			<Header>
				<img src={coder.avatar} alt="{coder.name}" />
				<Information>
					<p>Имя: {coder.name}</p>
					<p>Фамилия: {coder.lastname}</p>
					<p>Отчество: {coder.surname}</p>
					<p> Город: {coder.city}</p>
					<p> Год рождения: {coder.birth}</p>
					<SocialsContainer>
						<a href={socials.vk}>
							<img src={SocialsLogoVK} />
						</a>
						<a href={socials.tg}>
							<img src={SocialsLogoTG} />
						</a>
						<a href={socials.inst}>
							<img src={SocialsLogoInstagram} />
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
				<AboutMeContainer>
					<h2>Обо мне:</h2>
					<p>{coder.about}</p>
				</AboutMeContainer>
			)}
			<ProgressBarContainer>
				<p>Тут будет progress bar</p>
				{/* место для того, кто делает progress bar*/}
			</ProgressBarContainer>
		</MainPageIdContainer>
	);
};
