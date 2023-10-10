import styled from 'styled-components';
import Button from '~/components/Button';

export const FormSheet = styled.div`
	--border-radius: 0.5rem;
	width: 100%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Form = styled.form`
	position: relative;
	height: auto;
	border-radius: var(--border-radius);
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '50rem')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '100rem')};
`;

export const Header = styled.header`
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '10rem')};
	background-image: url(${({ backgroundImage }) => (backgroundImage ? backgroundImage : '')});
	background-repeat: no-repeat;
	background-size: contain;
	border-top-right-radius: var(--border-radius);
	border-top-left-radius: var(--border-radius);
`;

export const Footer = styled.footer`
	border-bottom-left-radius: var(--border-radius);
	border-bottom-right-radius: var(--border-radius);
`;

export const Content = styled.main`
	padding: 1.5rem;
`;

export const Submit = styled(Button)``;

export const SubmitSheet = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 3rem 0rem 3rem 0rem;
`;
