import * as $ from './Styles';

function Form({ children, action, isHeaderFlag, isFooterFlag, contentHeader, contentFooter, ...attrs }) {
	return (
		<$.FormSheet>
			<$.Form
				action={action}
				{...attrs}
			>
				{isHeaderFlag && (
					<$.Header
						backgroundImage={
							'https://as2.ftcdn.net/v2/jpg/02/92/49/43/1000_F_292494319_cbLrN5FGaZ9eP4UjOjdOFHiDEYFgN5eq.jpg'
						}
					></$.Header>
				)}
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
