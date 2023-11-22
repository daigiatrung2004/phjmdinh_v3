import styled from 'styled-components';
import { mediaQueries } from '~/utils/reponsive';

export const Main = styled.main`
	${mediaQueries(
		'desktop',
		`
		padding-bottom: 30rem
		`
	)}

	${mediaQueries(
		'mobile',
		`
		padding-bottom: 5rem
		`
	)}

	${mediaQueries(
		'tablet',
		`
		padding-bottom: 5rem
		`
	)}
`;
