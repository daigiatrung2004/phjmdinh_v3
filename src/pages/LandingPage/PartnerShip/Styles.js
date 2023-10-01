import styled from 'styled-components';
import Paragraph from '~/components/Paragraph';

export const Sheet = styled.div`
	background-color: var(--white);
	min-height: 100vh;
	padding-bottom: 30rem;
`;

export const Main = styled.div`
	margin: 6rem auto 0;
	width: 66.8rem;
	background-color: var(--white);

	& .title {
		text-align: center;
		margin: 0;
		padding: 5rem 0 1.6rem;
		font-size: 2.2rem;
		line-height: 3.2rem;
		font-weight: normal;
	}
`;

export const Description = styled(Paragraph)`
	font-size: 14px;
	padding: 16px;
	width: 100%;
	background-color: #e6faeb;
	margin-bottom: -4px;
	color: #00c234;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 1.6rem;
`;
