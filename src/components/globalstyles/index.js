import PropTypes from 'prop-types';
import { Style } from './styles';

function GlobalStyles({ children }) {
	return <Style>{children}</Style>;
}

GlobalStyles.propTypes = {
	children: PropTypes.node.isRequired,
};
export default GlobalStyles;
