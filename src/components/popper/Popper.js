import * as $ from './Styles';

function Popper({ children, ...attrs }) {
	return <$.Popper {...attrs}>{children}</$.Popper>;
}

export default Popper;
