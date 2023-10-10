import * as $ from './Styles';

function Form({ children, action, isHeaderFlag, isFooterFlag, contentHeader, contentFooter, ...attrs }) {
	return (
		<$.FormSheet>
			<$.Form
				action={action}
				{...attrs}
			>
				{isHeaderFlag && <$.Header></$.Header>}
				<$.Content>
					{children}
					<$.SubmitSheet>
						<$.Submit theme={{ type: 'primary', size: 'small' }}>Gửi</$.Submit>
					</$.SubmitSheet>
				</$.Content>
				{isFooterFlag && <$.Footer></$.Footer>}
			</$.Form>
		</$.FormSheet>
	);
}

export default Form;
