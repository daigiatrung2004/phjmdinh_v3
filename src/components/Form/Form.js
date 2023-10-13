import * as $ from './Styles';

function Form({ children, action, isHeaderFlag, isFooterFlag, contentHeader, contentFooter, bgHeaderImg, ...attrs }) {
	return (
		<$.FormSheet>
			<$.Form
				action={action}
				{...attrs}
			>
				{isHeaderFlag && (
					<$.Header
						className="flex-center"
						backgroundImage={
							bgHeaderImg
								? bgHeaderImg
								: 'https://as2.ftcdn.net/v2/jpg/02/92/49/43/1000_F_292494319_cbLrN5FGaZ9eP4UjOjdOFHiDEYFgN5eq.jpg'
						}
					>
						<$.TitleHeader>{contentHeader}</$.TitleHeader>
					</$.Header>
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
