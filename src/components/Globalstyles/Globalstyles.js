import PropTypes from 'prop-types';
import { Style } from './styles';
import load from '~/utils/utility.function';

function GlobalStyles({ children }) {
	load();
	return (
		<>
			<Style />
			{children}
		</>
	);
}

GlobalStyles.propTypes = {
	children: PropTypes.node.isRequired,
};
export default GlobalStyles;
