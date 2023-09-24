import styled from 'styled-components';

export const TagSheet = styled.span`
	display: inline-block;
	margin-right: 0.6rem;
	padding: 0rem 0.5rem;
	background: rgba(255, 255, 255, 0.08);
	border-radius: 0.2rem;

	font-size: 1.2rem;
	line-height: 1.6rem;
	color: rgb(236, 236, 236);
	font-weight: 500;
	text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px;

	&:hover {
		${({ hovering }) => (typeof hovering == 'object' && !window.isobjempty(hovering) ? hovering : {})}
	}
`;

export const Extension = styled(TagSheet)`
	background-color: var(--primary);
	color: var(--white);
`;
