import styled from 'styled-components';

export const WatchArea = styled.div`
	/* margin-top: 6rem; */
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding-left: 8rem;
	padding-right: 8rem;
`;

export const WatchContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 9fr 1fr;
	margin-top: 8rem;
	background-color: var(--bg-color-override);
	margin-bottom: 2rem;
`;

export const PresentationFilmArea = styled.div`
	display: grid;
	grid-template-rows: 90% 10%;
`;

export const VideoArea = styled.div`
	border-right: 1px solid rgba(255, 255, 255, 0.3);
	border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const FooterPresentationArea = styled.div`
	display: flex;
	align-items: center;
`;

export const EposideArea = styled.div`
	justify-self: end;
	padding: 3rem 0rem;
`;

export const RecommendFilmArea = styled.div`
	margin-top: 3rem;
`;

export const ContentFilm = styled.div`
	min-height: 30rem;
`;
