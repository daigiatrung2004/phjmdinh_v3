import styled from 'styled-components';

export const Popper = styled.div`
	padding: 10px 0px 10px 0px;
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'unset')};
	box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
	overflow: auto;
	background-color: ${({ transparentFlag }) => (transparentFlag ? 'transparent' : 'var(--bg-list-search)')};
	width: ${({ width }) => (width ? width : 'auto')};
`;
