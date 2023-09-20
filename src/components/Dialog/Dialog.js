import { faXmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import * as $ from './Styles';
import Button from '~/components/Button';

const Dialog = forwardRef(function Dialog({ children, IconLeft, IconRight, IconTop, ok, ignore, title }, ref) {
	return (
		<$.Overlay ref={ref}>
			<$.PopUp>
				<$.HeaderPopup>
					<$.CloseIcon icon={faXmark} />
					{IconLeft}
					{IconRight}
					{IconTop}
					{title}
				</$.HeaderPopup>
				<$.BodyPopup>{children}</$.BodyPopup>
				<$.FooterPopup>
					{ok && <Button onClick={ok}>Ok</Button>}
					{ignore && <Button onClick={ignore}>No</Button>}
				</$.FooterPopup>
			</$.PopUp>
		</$.Overlay>
	);
});

Dialog.propTypes = {
	children: PropTypes.node.isRequired,
	iconLeft: PropTypes.node,
	iconRight: PropTypes.node,
	iconTop: PropTypes.node,
	ok: PropTypes.func,
	ignore: PropTypes.func,
	title: PropTypes.string,
};

export default Dialog;
